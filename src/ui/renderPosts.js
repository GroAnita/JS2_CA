export function renderPosts(posts) {
  const postsContainer = document.getElementById('posts');
  if (!postsContainer) return;

  postsContainer.innerHTML = posts
    .map(
      (post) => `
        <article class="border border-gray-700 rounded-lg p-4 bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto">
          <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
            🕯️ ${post.title || 'Unknown'}
          </h3>
              <hr class="my-4 border-gray-700"/>
              <h4 class="text-sm font-[Cinzel] text-gray-400 mb-2">
                Posted by ${post.author?.name || 'Unknown'} on ${new Date(post.created).toLocaleDateString()}
              </h4>
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
      `
    )
    .join('');
}
