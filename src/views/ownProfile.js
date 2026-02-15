export default function ownProfile() {
  return `
    <h1 class="text-2xl font-bold mb-4 text-center mt-4 text-purple-500">Edit Profile</h1>
    <div id="own-profile-info" class="w-full max-w-md mx-auto h-65 rounded-lg shadow p-6 text-center">
    </div>
    
    </div>
    <section class="mt-6">
    <h3 class="text-xl font-bold mb-4">Your Bio</h3>
    <textarea
        id="bio-input"
      class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
      rows="5"
      placeholder="Share your story..."
    ></textarea>
    <button id="save-bio" class="mt-4 bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600 transition">
      Save Bio
    </button>
  </section>
  <section class="mt-6">
    <h3 class="text-xl font-bold mb-4">My Posts</h3>
    <div id="own-posts"></div>
  </section>
    

    `;
}
