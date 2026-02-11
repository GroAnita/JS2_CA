import { getRandomPostImage } from '../services/unsplashService.js';
import { getFollowingList } from '../state/followState.js';
import { getCurrentUser } from '../state/authstate.js';

export async function renderPosts(posts) {
  const postsContainer = document.getElementById('posts');
  if (!postsContainer) return;

  const followingList = getFollowingList();
  const currentUser = getCurrentUser();
  const postHtmlArray = await Promise.all(
    posts.slice(0, 6).map(async (post) => {
      const isFollowing = followingList.some(
        (user) => user.name === post.author?.name
      );
      const isOwnPost =
        currentUser && post.author?.name === currentUser.username;
      const image =
        post.media?.url ||
        (await getRandomPostImage(post.id, post.tags?.[0] || 'fantasy'));

      return `
      
        <article class="border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto break-words">
        <div>
        <img
          src="${image}"
          alt="Avatar of ${post.author?.name || 'Unknown'}"
          class="h-120 w-120 mb-2 object-cover"
        />
        </div>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
            🕯️ ${post.title || 'Unknown'}
          </h3>
          <i class="fa-regular fa-thumbs-up cursor-pointer"></i>
          
        </div>
              <hr class="my-4 border-gray-700"/>
              <div class="flex justify-between items-start gap-2">
              <a href="/profiles/${post.author?.name || 'Unknown'}" data-link><h4 class="text-sm font-[Cinzel] text-gray-400 mb-2">
                Posted by ${post.author?.name || 'Unknown'} on ${new Date(post.created).toLocaleDateString()}
              </h4></a>
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
              </div>
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

          <div class="mt-4 space-y-2">
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
            </div>
          `
            )
            .join('')}
           </div>
          
        </article>
      `;
    })
  );

  postsContainer.innerHTML = postHtmlArray.join('');
}
