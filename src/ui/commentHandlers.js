import { createComment } from '../services/commentService.js';

export function initCommentHandlers() {
  document.addEventListener('submit', async (event) => {
    const form = event.target.closest('[data-comment-form]');
    if (!form) return;
    event.preventDefault();

    const postId = form.dataset.postId;
    const input = form.querySelector('input[name="comment"]');
    const body = input.value.trim();

    if (!body) return;

    try {
      const response = await createComment(postId, body);
      addCommentToDom(form, response.data);
      form.reset();
    } catch (error) {
      console.error('Failed to create comment:', error.message);
    }
  });
}

export function addCommentToDom(form, comment) {
  const container = form
    .closest('article')
    .querySelector('[data-comments-container]');
  if (!container) return;
  const formHtml = `
   <div class="text-sm text-gray-500 border-t border-gray-700 pt-2">
      <p class="font-[Cinzel] text-purple-400">
        ${comment.owner} says:
      </p>
      <p class="font-[Inter] text-gray-300 mt-1">
        ${comment.body}
      </p>
    </div>`;

  container.insertAdjacentHTML('afterbegin', formHtml);
}
