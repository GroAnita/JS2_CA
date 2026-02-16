import { getRandomAvatar } from '../services/unsplashService.js';

export default async function Familiars(profiles = []) {
  console.log('Rendering Familiars with profiles:', profiles);

  const profileCards = await Promise.all(
    profiles.map(async (profile) => {
      const avatar = profile.avatar?.url || (await getRandomAvatar());

      return `
        <a href="/profiles/${profile.name}" data-link class="block">
            <div class="flex flex-col items-center gap-3 shrink-0">
                <div class="w-24 h-24 rounded-full border-2 border-gray-300/70 p-0.5 hover:border-purple-400 transition mb-4 mt-6">
                    <img
                        src="${avatar}"
                        alt="${profile.name} avatar"
                        class="w-full h-full rounded-full object-cover"
                    />
                </div>
                <span class="text-xs font-[Cinzel] text-gray-300">
                    ${profile.name}
                </span>
            </div>
        </a>
        `;
    })
  );

  return `
   <h1 class="text-2xl font-[Cinzel] font-semibold text-purple-400 mb-6 text-center mt-4">
   My Familiars
 </h1>
 <section class="grid grid-cols-4 items-center gap-4 px-6 py-4 overflow-x-auto border-b border-gray-700 bg-[#121212]">
    ${profileCards.join('')}
 </section>
    `;
}
