export default function createPost() {
  return `
    
<section>
    <form data-create-post-form class="max-w-md mx-auto p-6 bg-[var(--color-bg-surface)] border border-gray-700 rounded-lg shadow-sm">
    <input type="text" name="title" placeholder="Post title" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" required />
    <textarea name="body" placeholder="Your spellcasting thoughts..." class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" required></textarea>
    <input type="text" name="tags" placeholder="Tags (comma separated)" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" />
    <input type="url" name="image" placeholder="Media URL (optional)" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" />
    <button type="submit" class="w-full py-2 rounded bg-purple-400 hover:bg-purple-500 transition font-[Cinzel] text-white">
      Cast Spell
    </button>
  </form>
    </section>
    `;
}
