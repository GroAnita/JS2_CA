export default function createPost(post = {}) {
  const section = document.createElement('section');

  const form = document.createElement('form');
  form.dataset.createPostForm = '';
  form.dataset.postId = post.id || '';
  form.className =
    'mt-20 max-w-md mx-auto p-6 bg-[var(--color-bg-surface)] border border-gray-700 rounded-lg shadow-sm';

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.value = post.title || '';
  titleInput.placeholder = 'Spell Title';
  titleInput.className =
    'w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]';
  titleInput.required = true;

  const bodyTextArea = document.createElement('textarea');
  bodyTextArea.name = 'body';
  bodyTextArea.placeholder = 'Your spellbinding thoughts...';
  bodyTextArea.className =
    'w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]';
  bodyTextArea.required = true;
  bodyTextArea.value = post.body || '';

  const tagInputs = document.createElement('input');
  tagInputs.type = 'text';
  tagInputs.name = 'tags';
  tagInputs.value = post.tags ? post.tags.join(', ') : '';
  tagInputs.placeholder = 'tags (comma separated)';
  tagInputs.className =
    'w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]';

  const imageInput = document.createElement('input');
  imageInput.type = 'url';
  imageInput.name = 'image';
  imageInput.value = post.media?.url || '';
  imageInput.placeholder =
    'Image url from safe sources like pexels, unsplash, etc...';
  imageInput.className =
    'w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]';

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = post.id ? 'Update Spell' : 'Cast Spell';
  submitButton.className =
    'w-full py-2 rounded bg-purple-400 hover:bg-purple-500 transition font-[Cinzel] text-white';

  form.appendChild(titleInput);
  form.appendChild(bodyTextArea);
  form.appendChild(tagInputs);
  form.appendChild(imageInput);
  form.appendChild(submitButton);

  section.appendChild(form);

  return section;
}
