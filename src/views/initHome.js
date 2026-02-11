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
export async function initHome() {
  const postsContainer = document.getElementById('posts');
  if (!postsContainer) return;

  if (!isLoggedIn()) {
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
    console.warn('User not logged in, skipping post fetch');
    return {
      profiles: [],
    };
  }
  postsContainer.innerHTML = ''; // Clear any existing content while loading
  const currentUser = getCurrentUser();

  if (currentUser) {
    const profile = await apiClient(
      `/social/profiles/${currentUser.username}?_following=true`
    );
    setFollowingList(profile.data.following || []);
  }
  try {
    const [postsResponse, profilesResponse] = await Promise.all([
      fetchPosts(),
      fetchProfiles(),
    ]);

    console.log('first post:', postsResponse.data[0]);
    await renderPosts(postsResponse.data);

    console.log('profiles loaded:', profilesResponse.data);

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
    return {
      profiles: [],
    };
  }
}
