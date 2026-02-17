export default function searchOverlay() {
  return `
    <div id="search-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm hidden z-50 flex items-start justify-center pt-32">

    <div class="w-full max-w-xl bg-[#2b023c] rounded-xl border border-purple-700">

    <input 
    id="search-input"
    type="text"
    placeholder="Scry the Coven..."
    class="w-full p-3 rounded bg-purple-600 text-white outline-none"></input>
    <div id="search-results" class="mt-4 space-y-2">
    </div>
    </div>
    </div>
    `;
}
