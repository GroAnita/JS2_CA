import { fetchPosts } from '../services/postCreateService.js';

export function initSearch() {
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  if (!overlay || !input || !results) return; // if it finds nothing, just return.

  // Opening the search overlay
  document.addEventListener('click', (event) => {
    const searchButton = event.target.closest('[data-open-search]');
    if (!searchButton) return;
    overlay.classList.remove('hidden');
    input.focus();
  });

  // close when user clics outside search container
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) overlay.classList.add('hidden');
  });

  // close overlay using ESC key
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') overlay.classList.add('hidden');
  });

  // closes the overlay when user click on search result link.
  results.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-link]');
    if (!link) return;
    overlay.classList.add('hidden');
  });

  // search input
  input.addEventListener('input', async () => {
    const query = input.value.trim();
    if (!query) {
      results.innerHTML = '';
      return;
    }
    if (query.length < 2) {
      results.innerHTML = '';
      return;
    }
    try {
      const response = await fetchPosts(`&search=${encodeURIComponent(query)}`);
      const posts = response.data || [];

      // Wanted a filter that is better at matching titles and body text, and is case insensitive, better at more exact text?!.
      const filteredposts = posts.filter((post) => {
        const title = post.title?.toLowerCase() || '';
        const body = post.body?.toLowerCase() || '';

        return (
          title.includes(query.toLowerCase()) ||
          body.includes(query.toLowerCase())
        );
      });

      results.innerHTML = filteredposts
        .map(
          (post) => `
      <a href="/post/${post.id}" data-link class="block p-3 rounded hover:bg-gray-800 transition">
      <p class="text-purple-400 font-[Cinzel] font-semibold">${post.title}</p>
      <p class="text-sm text-gray-500">By ${post.author?.name || 'unknown'}</p>
      </a>
      `
        )
        .join('');
    } catch (error) {
      console.error('Search error:', error);
      results.innerHTML =
        '<p class="text-red-500">An error occurred while searching.</p>';
    }
  });
}
