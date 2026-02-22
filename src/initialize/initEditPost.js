import { fetchSinglePost } from '../services/postCreateService.js';
import { updatePost } from '../services/postFetchService.js';
import showToast from '../ui/showToast.js';
import { router } from '../router/router.js';

export async function initEditPost(postId) {
  if (!postId || isNaN(postId)) {
    console.error('Invalid post ID:', postId);
    return;
  }

  try {
    const response = await fetchSinglePost(postId);
    const post = response.data;

    document.querySelector('[name="title"]').value = post.title;
    document.querySelector('[name="body"]').value = post.body;
    document.querySelector('[name="tags"]').value = (post.tags || []).join(
      ', '
    );
    document.querySelector('[name="image"]').value = post.media
      ? post.media.url
      : '';
  } catch (error) {
    console.error('Failed to load post:', error.message);
    showToast('Failed to load post. Please try again later.');
    return;
  }

  const form = document.querySelector('[data-edit-post-form]');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = form.querySelector('[name="title"]').value.trim();
    const body = form.querySelector('[name="body"]').value.trim();
    const tags = form
      .querySelector('[name="tags"]')
      .value.split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    const imageUrl = form.querySelector('[name="image"]').value.trim();

    if (!title || !body) {
      showToast('Title and body are required.', 'error');
      return;
    }

    try {
      await updatePost(postId, {
        title,
        body,
        tags,
        media: imageUrl ? { url: imageUrl } : null,
      });
      showToast('Post updated successfully!', 'success');
      history.pushState(null, null, `/post/${postId}`);
      router();
    } catch (error) {
      console.error('Failed to update post:', error);
      showToast('Failed to update post. Please try again.', 'error');
    }
  });
}
