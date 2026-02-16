import { getRandomPostImage } from '../services/unsplashService.js';
import { getFollowingList } from '../state/followState.js';
import { getCurrentUser } from '../state/authstate.js';
import { deletePost } from '../services/postFetchService.js';
import showToast from './showToast.js';
import { router } from '../router/router.js';
import { getAvatar } from './getAvatar.js';

/**
 * Renders a list of posts in to the #posts container.
 * Each of the posts have:
 * -Author info and an avatar
 * -post image (if it has media, otherwise a random image from unsplash)
 * -post title and body.
 * -A follow/unfollow button it the post is not the users own post.
 * -Edit and delete menu if the post is users own post.
 * -Comments and a form to submit new comments.
 *
 * @async
 * @function renderPosts
 * @param {Array<Object>} posts - Array of post objects from API.
 * @param {Object} [options] - Rendering options.
 * @param {boolean} [options.append=false] -If true, new posts will be appended to the container instead of replacing its content.
 * @returns {Promise<void>} Renders the posts in the DOM
 */
export async function renderPosts(posts, { append = false } = {}) {
  const postsContainer = document.getElementById('posts');
  if (!postsContainer) return;

  const followingList = getFollowingList();
  const currentUser = getCurrentUser();
  const postHtmlArray = await Promise.all(
    posts.map(async (post) => {
      const isFollowing = followingList.some(
        (user) => user.name === post.author?.name
      );
      const isOwner = currentUser?.username === post.author?.name;
      const isOwnPost =
        currentUser && post.author?.name === currentUser.username;
      const image =
        post.media?.url ||
        (await getRandomPostImage(post.id, post.tags?.[0] || 'fantasy'));

      return `
      
        <article data-post="${post.id}" class=" post-card border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm w-3/4 mx-auto break-words ">
        ${
          isOwner
            ? `
          <div class="relative flex justify-end">
          <button
          class="post-menu-toggle text-gray-400 hover:text-white"
          data-post-id="${post.id}">
          <i class="fa-solid fa-ellipsis"></i>
          </button>
          <div class="post-menu hidden absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded shadow-lg z-10"
          data-menu-for="${post.id}">
          <button data-post-id="${post.id}" class="edit-post w-full text-left px-4 py-2 hover:bg-gray-700">Edit</button>
          <button class="delete-post w-full text-left px-4 py-2 hover:bg-gray-700" data-post-id="${post.id}">Delete</button>
          </div>
          </div>
        `
            : ''
        }
      
        <header class="flex items-center gap-3 mb-2">
        <div>
        <img class="h-12 w-12 rounded-full object-cover inline-block mr-3" src="${getAvatar(post.author)}" alt="Avatar of ${post.author?.name || 'Unknown'}"/>
        </div>
        <div class="flex flex-col">
         <a href="/profiles/${post.author?.name || 'Unknown'}" data-link><h4 class="text-m font-bold font-[Cinzel] text-purple-600 mb-2">
                ${post.author?.name || 'Unknown'}  
              </h4></a>
              <p class="text-xs text-gray-500 mb-2">${new Date(post.created).toLocaleString()}</p>
              </div>
        </header>
          <a href="/post/${post.id}" data-link class="block">
        <div>
        <img
          src="${image}"
          alt="Avatar of ${post.author?.name || 'Unknown'}"
          class="h-96 w-full mb-2 object-cover rounded-md mx-auto"
        />
        </div>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
            🕯️ ${post.title || 'Unknown'}
          </h3>
           <div class="flex justify-between items-start gap-4">
             
              <div 
              data-follow-container class="${isOwnPost ? 'hidden' : ''}">
              <button
              type="button"
              data-auth="follow"
              data-username="${post.author?.name}"
              class="${isFollowing ? 'hidden' : ''} text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition">
            Follow
          </button>
          <button
          type="button"
          data-auth="followed"
          data-username="${post.author?.name}"
          class="${isFollowing ? '' : 'hidden'} text-sm text-purple-400 w-20 h-6 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition">
            Unfollow
          </button>
          </div>
              
          <i class="fa-regular fa-thumbs-up cursor-pointer"></i>
          </div>
        </div>
              <hr class="my-4 border-gray-700"/>
             
          <p class="font-[Inter] text-gray-300 mt-2">
            ${post.body}
          </p>
          <form data-comment-form data-post-id="${post.id}" class="mt-3 flex gap-2">
  <input
    type="text"
    name="comment"
    placeholder="Send a whisper..."
    class="flex-1 p-2 rounded bg-gray-800 text-sm"
    required
  />
  <button
    type="submit"
    class="text-sm px-3 py-1 rounded bg-purple-500 hover:bg-purple-600 transition"
  >
    Whisper
  </button>
</form>
</a>
          <div class="mt-4 space-y-2" data-comments-container>
          ${post.comments
            ?.map(
              (comment) => `
            <div class="text-sm text-gray-500 border-t border-gray-700 pt-2">
              <p class="font-[Cinzel] text-purple-400">
                ${comment.author?.name || 'Unknown'} says:
              </p>
              <p class="font-[Inter] text-gray-300 mt-1">
                ${comment.body}
              </p>
              <p class="text-xs text-gray-600 mt-1 text-end">
                sent on ${new Date(comment.created).toLocaleString()}
              </p>
            </div>
          `
            )
            .join('')}
           </div>
          
        </article>
      `;
    })
  );
  if (append) {
    postsContainer.insertAdjacentHTML('beforeend', postHtmlArray.join(''));
  } else {
    postsContainer.innerHTML = postHtmlArray.join('');
  }
}
/**
 * Toggles the menu for edit/delete post options if it is users own post they show or else they are hidden. Also handles the click events for both edit and delete button.
 */
document.addEventListener('click', (event) => {
  const toggle = event.target.closest('.post-menu-toggle');
  if (!toggle) return;
  const postId = toggle.dataset.postId;
  const menu = document.querySelector(`[data-menu-for="${postId}"]`);
  menu?.classList.toggle('hidden');
});

/**
 * Closes the edit/delete menu if user clicks outside of it.
 */
document.addEventListener('click', (event) => {
  if (
    !event.target.closest('.post-menu') &&
    !event.target.closest('.post-menu-toggle')
  ) {
    document.querySelectorAll('.post-menu').forEach((menu) => {
      menu.classList.add('hidden');
    });
  }
});

/**
 * Handles the click event for the delete post button. It asks the user for confirmation about deleting and the then deletes the post via API.
 * If delete is sucess, it removes post from DOM and shows a success toast, if it fails it show an error toast.
 */
document.addEventListener('click', async (event) => {
  const deleteButton = event.target.closest('.delete-post');
  if (!deleteButton) return;
  const postId = deleteButton.dataset.postId;
  if (!confirm('Are you sure you want to delete this post?')) return;
  try {
    await deletePost(postId);
    document.querySelector(`[data-post="${postId}"]`)?.remove();
    showToast('Post deleted successfully', 'success');
  } catch (error) {
    console.error('Failed to delete post:', error);
    showToast('Failed to delete post. Please try again.', 'error');
  }
});

/**
 * Just navigates to the edit post view when edit button is clicked.
 * editPost view has the rest of edit logic.
 */
document.addEventListener('click', (event) => {
  const editButton = event.target.closest('.edit-post');
  if (!editButton) return;
  event.preventDefault();
  event.stopPropagation();
  const postId = editButton.dataset.postId;

  history.pushState(null, null, `/edit-post/${postId}`);
  router();
});
