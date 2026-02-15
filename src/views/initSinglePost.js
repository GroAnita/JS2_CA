import { fetchSinglePost } from '../services/postCreateService.js';
import { renderSinglePost } from '../ui/renderSinglePost.js';
import showToast from '../ui/showToast.js';

export async function initSinglePost(postId) {
  try {
    const response = await fetchSinglePost(postId);
    await renderSinglePost(response.data);
  } catch (error) {
    console.error('Failed to load post:', error.message);
    showToast('Failed to load post. Please try again later.', 'error');
  }
}
