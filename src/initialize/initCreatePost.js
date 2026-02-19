import { createPost } from '../services/postCreateService.js';
import { router } from '../router/router.js';
import { updatePost } from '../services/postFetchService.js';
import { ValidateImageUrls } from '../utils/validation.js';
import showToast from '../ui/showToast.js';

export function initCreatePost() {
  const form = document.querySelector('[data-create-post-form]');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = form.title.value.trim();
    const body = form.body.value.trim();
    const tags = form.tags.value
      ? form.tags.value.split(',').map((tag) => tag.trim())
      : [];

    const imageUrl = form.image?.value.trim();
    if (imageUrl && !ValidateImageUrls(imageUrl)) {
      showToast(
        'Please use a sage image from unsplash, pixabay, imgur or pexels.',
        'error'
      );
      return;
    }
    const postData = {
      title,
      body,
      tags,
      media: imageUrl
        ? {
            url: imageUrl,
            alt: title,
          }
        : null,
    };
    console.log('create post initialized');

    const postId = form.dataset.postId;

    try {
      if (postId) {
        await updatePost(postId, postData);
      } else {
        await createPost(postData);
      }

      document.dispatchEvent(new Event('post:updated'));
      history.pushState(null, null, '/');
      router();
      window.scrollTo(0, 0);
    } catch (error) {
      alert(error.message || 'Failed to create post. Please try again.');
    }
  });
}
