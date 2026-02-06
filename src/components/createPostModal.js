import { createPost } from "../services/postCreateService.js";

export function createPostModal() {
  return `
    <div id="createPostModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
      <div class="bg-white rounded-lg w-11/12 max-w-md p-6">
        <h2 class="text-2xl mb-4">Cast a New Spell</h2>

        <form id="postForm" class="space-y-4">
          <div>
            <label for="body" class="block text-sm font-medium text-gray-700">
              Post Body
            </label>
            <textarea
              id="body"
              name="body"
              rows="4"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            ></textarea>
          </div>

          <div class="flex justify-end space-x-2">
            <button
              type="button"
              id="closeCreatePostModal"
              class="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="px-4 py-2 bg-purple-600 text-white rounded-md"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

/**
 * Initializes the Create Post Modal functionality.
 */
export function initCreatePostModal() {
  const modal = document.getElementById("createPostModal");
  const openButtons = document.querySelectorAll("[data-open-create-post]");
  const closeButton = document.getElementById("closeCreatePostModal");
  const postForm = document.getElementById("postForm");

  if (!modal || !closeButton || !postForm) {
    console.error("Create Post Modal elements not found in the DOM.");
    return;
  }

  // Open modal
  openButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      modal.classList.remove("hidden");
    });
  });

  // Close modal
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Submit post
  postForm.addEventListener("submit", async e => {
    e.preventDefault();

    const body = postForm.body.value.trim();
    if (!body) return;

    try {
      const newPost = await createPost({ body });

      //  Notify the app that a post was created
      document.dispatchEvent(
        new CustomEvent("post:created", { detail: newPost })
      );

      modal.classList.add("hidden");
      postForm.reset();
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  });
}
