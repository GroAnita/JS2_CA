import { createPost } from '../services/postCreateService.js';

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
    try {
      await createPost(postData);
      form.reset();
      document.dispatchEvent(new Event('post:created'));
    } catch (error) {
      alert(error.message || 'Failed to create post. Please try again.');
    }
  });
}
