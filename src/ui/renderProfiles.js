import { getRandomAvatar } from '../services/unsplashService.js';

export async function renderProfiles(profiles) {
  const container = document.getElementById('profiles-list');
  if (!container) return;

  const profileHtmlArray = await Promise.all(
    profiles.map(async (profile) => {
      const avatarUrl =
        profile.author?.avatar?.url || (await getRandomAvatar());
      return `
      <a
  href="/profiles/${profile.name}"
  data-link
  class="block">
<article class="border p-4 rounded-lg bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto">
<img 
src="${avatarUrl}" 
alt="Avatar of ${profile.name}" 
class="h-24 w-24 rounded-full mb-4 mx-auto"/>
    <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
    🕯️ ${profile.name}
  </h3>
  <p class="font-[Inter] text-gray-500 mt-2">
    ${profile.bio || 'No bio available.'}
  </p>
  <p class="text-sm text-gray-500">
    posts: ${profile._count?.posts ?? 0}
    followers: ${profile._count?.followers ?? 0}
    following: ${profile._count?.following ?? 0}
  </p>
</article>
</a>
    `;
    })
  );
  container.innerHTML = profileHtmlArray.join('');
}
