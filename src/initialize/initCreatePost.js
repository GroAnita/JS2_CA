import { createPost } from '../services/postCreateService.js';
import { router } from '../router/router.js';
import { updatePost } from '../services/postFetchService.js';
import { ValidateImageUrls } from '../utils/validation.js';
import showToast from '../ui/showToast.js';

/**
 * Initializes the create/edit post form.
 * This function:
 * - Attaches a submit handler to the post form.
 * - Validates image URL.
 * - Formats tags and media data.
 * - determine if creating or editing a post.
 * - Dispatches a global update event.
 * - Navigates back to news feed after submission.
 *
 * expected HTML : <form data-create-post-form data-post-id="">
 * @function initCreatePost
 * @returns {void}
 */
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

    //A validation that checks if the image URL is from a trusted source that is preapproved and if not will give a toast error message.This to prevent users from posting potentially harmful or inappropriate images.
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

    const postId = form.dataset.postId;
    //If there is a postId - update post, if not , create a new post.
    try {
      if (postId) {
        await updatePost(postId, postData);
      } else {
        await createPost(postData);
      }

      document.dispatchEvent(new Event('post:updated')); //feed refresh after creating or updating a post.
      history.pushState(null, null, '/');
      router();
      window.scrollTo(0, 0);
    } catch (error) {
      alert(error.message || 'Failed to create post. Please try again.');
    }
  });
}
