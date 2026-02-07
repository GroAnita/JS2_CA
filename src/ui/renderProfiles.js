export function renderProfiles(profiles) {
  const container = document.getElementById('profiles-list');
  if (!container) return;

  container.innerHTML = profiles
    .map(
      (profile) => `
<article class="border p-4 rounded-lg bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto">
<img src="${profile.avatar?.url || ''}" alt="Avatar of ${profile.name}" class="h-24 w-24 rounded-full mb-4 mx-auto"/>
    <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
    🕯️ ${profile.name}
  </h3>
  <p class="font-[Inter] text-gray-500 mt-2">
    ${profile.bio || 'No bio available.'}
  </p>
  <p class="text-sm text-gray-500">
  posts: ${profile._count.posts}
  followers: ${profile._count.followers}
    following: ${profile._count.following}
    </p>
</article>
    `
    )
    .join('');
}
