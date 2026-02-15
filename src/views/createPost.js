export default function createPost(post = {}) {
  return `
    
<section>
    <form data-create-post-form data-post-id="${post.id || ''}" class="mt-20 max-w-md mx-auto p-6 bg-[var(--color-bg-surface)] border border-gray-700 rounded-lg shadow-sm">
    <input
     type="text"
    name="title"
    value="${post.title || ''}"
    placeholder="Spell Title"
    class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]"
    required
  />
    <textarea
     name="body" 
     placeholder="Your spellcasting thoughts..." 
     class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" required>
     ${post.body || ''}
     </textarea>
    <input
     type="text" 
     name="tags" 
    value="${post.tags ? post.tags.join(', ') : ''}"
     placeholder="Tags (comma separated)" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" />
    <input
     type="url" 
     name="image" 
     value="${post.media?.url || ''}"
     placeholder="Media URL (optional)" class="w-full p-2 mb-4 rounded bg-gray-800 text-sm font-[Inter]" />
    <button 
    type="submit"
     class="w-full py-2 rounded bg-purple-400 hover:bg-purple-500 transition font-[Cinzel] text-white">
     ${post.id ? 'Update Spell' : 'Cast Spell'}
    </button>
  </form>
    </section>
    `;
}
