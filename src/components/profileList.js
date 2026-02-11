import { getRandomAvatar } from '../services/unsplashService.js';

export async function renderProfiles(profiles) {
  const container = document.getElementById('profiles-container');

  if (!container) {
    console.warn('Profiles container not found');
    return;
  }

  if (!profiles || profiles.length === 0) {
    container.innerHTML =
      '<p class="text-center text-gray-500">No profiles found.</p>';
    return;
  }

  container.innerHTML = await Promise.all(
    profiles
      .map(
        async (profile) => `
    <div class="bg-white rounded-lg shadow p-4">
      <img 
        src="${profile.avatar?.url || (await getRandomAvatar())}" 
        alt="${profile.name}"
        class="w-16 h-16 rounded-full mx-auto mb-2"
      />
      <h3 class="text-center font-bold text-purple-600">${profile.name}</h3>
      <p class="text-center text-sm text-gray-600">${profile.bio || 'No bio available'}</p>
      <div class="flex justify-center gap-4 mt-2 text-sm text-gray-500">
        <span>Posts: ${profile._count?.posts || 0}</span>
        <span>Followers: ${profile._count?.followers || 0}</span>
      </div>
    </div>
  `
      )
      .join('')
  );
}
