import { getRandomPostImage } from '../services/unsplashService.js';

export async function renderSinglePost(post) {
  const app = document.getElementById('app');
  const image =
    post.media?.url ||
    (await getRandomPostImage(post.id, post.tags?.[0] || 'fantasy'));

  app.innerHTML = `
    <section class="max-x-2xl mx-auto p-6">
    <button id="back-button" class="mb-6 text-purple-400 hover:underline">
    <i class="fa-solid fa-arrow-left"></i> Back
    </button>
          <article class="border border-gray-700 rounded-lg p-6 bg-[var(--color-bg-surface)]">

        <img src="${image}" class="w-full mb-4 rounded" />

        <h1 class="text-2xl font-[Cinzel] text-purple-400">
          ${post.title}
        </h1>
 <a href="/profiles/${post.author?.name || 'Unknown'}" data-link><h4 class="text-xs font-[Cinzel] text-gray-400 mb-2">
                Posted by ${post.author?.name || 'Unknown'} on ${new Date(post.created).toLocaleDateString()}
              </h4></a>
       
        <p class="mt-6 text-gray-300 font-[Inter]">
          ${post.body}
        </p>

        <hr class="my-6 border-gray-700"/>

        <h2 class="font-[Cinzel] text-lg text-purple-300 mb-3">
          Whispers (${post.comments?.length || 0})
        </h2>

        <div class="space-y-4">
          ${
            post.comments?.length
              ? post.comments
                  .map(
                    (comment) => `
                     <div class="border-t border-gray-700 pt-3">
                    <div class="flex flex-row items-center justify-between gap-2">
                     <a href="/profiles/${comment.author?.name || 'Unknown'}" data-link>
                    <p class="text-purple-400 font-[Cinzel]">
                ${comment.author?.name || 'Unknown'} Says:</p>  </a> <p class="text-xs text-gray-500">Posted on ${new Date(comment.created).toLocaleDateString()}</p>
            
                    </div>
                  <p class="text-gray-100 text-sm mt-1">
                    ${comment.body}
                  </p>
                </div>
              `
                  )
                  .join('')
              : `<p class="text-gray-500">No whispers yet...</p>`
          }
        </div>

      </article>
    </section>
  `;
  const backButton = document.getElementById('back-button');
  backButton.addEventListener('click', () => {
    history.back();
  });
}
