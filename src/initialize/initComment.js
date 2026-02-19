import { createComment } from '../services/commentService.js';
import showToast from '../ui/showToast.js';

export function initComment() {
  document.addEventListener('submit', async (event) => {
    const form = event.target.closest('[data-comment-form]');
    if (!form) return;

    event.preventDefault();

    const postId = form.dataset.postId;
    const input = form.querySelector('input[name="comment"]');
    const text = input.value.trim();

    if (!text) {
      showToast('Comment cannot be empty.', 'error');
      return;
    }

    const button = form.querySelector('button');
    button.disabled = true;
    button.textContent = 'Whispering…';

    try {
      const response = await createComment(postId, text);
      const comment = response.data;

      const article = form.closest('article');
      const container = article.querySelector('[data-comments-container]');

      const commentDiv = document.createElement('div');
      commentDiv.className = 'text-sm text-gray-300 mt-2 border-t pt-2';

      const author = document.createElement('p');
      author.className = 'font-[Inter] text-purple-500';
      author.textContent = `🕯️ ${comment.author?.name || 'Unknown'} says:`;

      const body = document.createElement('p');
      body.textContent = comment.body;

      const time = document.createElement('p');
      time.className = 'text-xs text-gray-500 mt-1 text-end';
      time.textContent = new Date(comment.created).toLocaleString();

      commentDiv.append(author, body, time);
      container.prepend(commentDiv);

      input.value = '';
    } catch (error) {
      console.error('Failed to create comment:', error);
      showToast('Failed to post comment.', 'error');
    } finally {
      button.disabled = false;
      button.textContent = 'Whisper';
    }
  });
}
