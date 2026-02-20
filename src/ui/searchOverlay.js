export default function searchOverlay() {
  const searchOverlay = document.createElement('div');
  searchOverlay.id = 'search-overlay';
  searchOverlay.className =
    'fixed inset-0 bg-black/60 backdrop-blur-sm hidden z-50 flex items-start justify-center pt-32';

  const container = document.createElement('div');
  container.className =
    'w-full max-w-xl bg-[#2b023c] rounded-xl border border-purple-700 ';

  const searchInput = document.createElement('input');
  searchInput.id = 'search-input';
  searchInput.type = 'text';
  searchInput.placeholder = 'Scry the Coven...';
  searchInput.className =
    'w-full p-3 rounded bg-purple-600 text-white outline-none';

  const resultsContainer = document.createElement('div');
  resultsContainer.id = 'search-results';
  resultsContainer.className = 'mt-4 space-y-2';

  container.appendChild(searchInput);
  container.appendChild(resultsContainer);
  searchOverlay.appendChild(container);

  return searchOverlay;
}
