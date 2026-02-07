import { createPost } from '../services/postCreateService';

export function initCreatePost() {
  const form = document.getElementById('postForm');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const postData = {
      body: formData.get('body'),
    };

    try {
      const newPost = await createPost(postData);
      console.log('Post created successfully:', newPost);
      form.reset();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  });
}
