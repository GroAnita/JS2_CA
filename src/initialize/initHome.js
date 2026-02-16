/**
 * initHome is resposible for initializing the home page.
 *
 * Reponsible for:
 * - Loading and rendering posts.
 * -Handling "load more" button.
 * -Showing the guest welcome message for user not logged in.
 * -Fetching the profiles for my sidebar display.
 * -setting the following list in a global state for use in follow buttons and profile displays.
 */

import { fetchPosts } from '../services/postCreateService.js';
import showToast from '../ui/showToast.js';
import { isLoggedIn } from '../state/authstate.js';
import { renderPosts } from '../ui/renderPosts.js';
import { fetchProfiles } from '../services/profileService.js';
import { getCurrentUser } from '../state/authstate.js';
import { setFollowingList } from '../state/followState.js';
import { apiClient } from '../services/apiClient.js';

const navItemClass = `
    flex flex-col items-center gap-2
    text-gray-300 opacity-80
    hover:text-purple-400 hover:opacity-100
    transition
  `;

const iconCircleClass = `
    w-12 h-12
    rounded-full
    border-2 border-gray-300/60
    flex items-center justify-center
    transition
    hover:shadow-[0_0_12px_rgba(199,125,255,0.4)]
  `;

/**
 * These 4 variales are :
 * page - Current pagination page for post feed.
 * LIMIT - How many posts to be loaded per page.
 * isLastPage - Indicates if the last page has been reached.
 * isLoading - Prevents multiple fetch requests at the same time.
 */
let page = 0;
const LIMIT = 6;
let isLastPage = false;
let isLoading = false;

/**
 * Loads more posts for the post feed.
 * Prevents duplicate requests and stops loading when it reach the last page of posts.
 *
 * @async
 * @function loadMorePosts
 * @param {boolean} [append=false] - If true, new posts will be appended to the existing feed, if false, it will be replacing the current feed.
 * @returns {Promise<void>}
 */

async function loadMorePosts(append = false) {
  if (isLoading || isLastPage) return;
  isLoading = true;
  const loadMoreButton = document.getElementById('load-more-posts');
  if (loadMoreButton) loadMoreButton.textContent = 'Loading...';

  try {
    const response = await fetchPosts(`&page=${page}&limit=${LIMIT}`);
    const posts = response.data;
    if (!posts.length) {
      loadMoreButton?.remove();
      isLoading = false;
      return;
    }

    await renderPosts(posts, { append });
    if (posts.length < LIMIT) {
      isLastPage = true;
      loadMoreButton?.remove();
    } else {
      page++;
    }
  } catch (error) {
    console.error('Failed to load more posts:', error);
    showToast('Failed to load more posts. Please try again.', 'error');
  }
  if (loadMoreButton) loadMoreButton.textContent = 'Load More';
  isLoading = false;
}

/**
 * This creates and appends the "Load More" button below the posts feed.
 * Makes sure only one button is exists and adds click event listener, for loading more posts when clicked.
 */
function createLoadMoreButton() {
  if (document.getElementById('load-more-posts')) return;
  const app = document.getElementById('app');
  const button = document.createElement('button');
  button.id = 'load-more-posts';
  button.textContent = 'Load More';
  button.className = `
    mt-6 px-4 py-2 rounded-md border border-gray-300/60 hover:border-purple-400 transition
    ${navItemClass}
    bg-transparent
    mx-auto mb-10
  `;
  button.addEventListener('click', () => loadMorePosts(true));
  app.appendChild(button);
}

/**
 * Initializes the home view.
 * Behavior:
 * -It shows a welcome screen for guests.
 * Loads and renders posts for logged in users.
 * Fetches Following list for logged in user/current user.
 * Loads profiles for sidebar.
 * Enables pagination via the "Load More" button..
 *
 * @async
 * @function initHome
 * @returns {Promise<{profiles: Array<Object>}|undefined>}
 * Returns profiles for sidebar renders.
 */

export async function initHome() {
  console.log('Initializing home view...');
  const postsContainer = document.getElementById('posts');
  if (!postsContainer) return;

  if (!isLoggedIn()) {
    //Shows welcome message for guests.
    page = 1;
    isLastPage = false;
    isLoading = false;
    postsContainer.innerHTML = `   <section class="p-6 space-y-6">
      <div>
      <img
      src="${import.meta.env.BASE_URL}witch.jpg"
      alt="Witch avatar"
      class="w-60 h-auto  border-4 border-gray-300/70 p-1 mx-auto mb-4"
    />
      </div>
      <h1 class="font-[Cinzel] text-purple-400 font-bold text-xl text-center">
Welcome to Hex & Chill
      </h1>
      <h3 class="text-gray-400 text-center">
Where witches and wizards gather to share their magical tales and connect with fellow familiars.
      </h3>
      <h3 class="text-gray-400 text-center">
Explore the latest posts from our coven, discover new profiles, and let your magic be known.
      </h3>

        <button 
        type="button" 
        data-open-login-modal
        data-auth="logged-out"
        class="${navItemClass} bg-transparent mx-auto mt-6 px-4 py-2 rounded-md border border-gray-300/60 hover:border-purple-400 transition">
          <div class="${iconCircleClass}">
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
          <span class="text-xs font-[Cinzel]">Enter the Circle</span>
        </button>
 </section>`;
    document.getElementById('load-more-posts')?.remove();
    return;
  }

  postsContainer.innerHTML = '';
  page = 1;
  isLastPage = false;
  try {
    const currentUser = getCurrentUser();

    if (currentUser) {
      const profile = await apiClient(
        `/social/profiles/${currentUser.username}?_following=true`
      );
      //Store following list to control follow/unfollow buttons.
      setFollowingList(profile.data.following || []);
    }

    const [, profilesResponse] = await Promise.all([
      loadMorePosts(false),
      fetchProfiles(),
    ]);
    console.log('profilesResponse:', profilesResponse.data);

    createLoadMoreButton();
    return {
      profiles: profilesResponse.data,
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    if (error.message.includes('API key')) {
      showToast(
        'Please log out and log back in to refresh your API key',
        'error'
      );
    } else {
      showToast('Failed to load posts. Please try again.', 'error');
    }
  }
}
