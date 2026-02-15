export default function EditPost() {
  return `
    <h1 class="text-2xl font-bold mb-4 text-center font-[Cinzel] mt-4 text-purple-500">Edit Post</h1>
    <form data-edit-post-form>
    <input name="title" id="edit-title" class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 text-purple-600" placeholder="Post Title" required>
    <textarea name="body" id="edit-body" class="text-purple-600 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4" placeholder="Post Body" rows="6" required></textarea>
    <input name="tags" id="edit-tags" class="text-purple-600 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4" placeholder="Tags (comma separated)">
    <input name="image" id="edit-image" class="text-purple-600 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4" placeholder="Media URL">
    <button type="submit" class="w-full py-2 rounded bg-purple-400 hover:bg-purple-500 transition font-[Cinzel] text-white">Update Post</button>
  </form>
  `;
}
