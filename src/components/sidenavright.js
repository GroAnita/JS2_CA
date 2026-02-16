import { getRandomAvatar } from '../services/unsplashService.js';

export default async function SideMenuRight(profiles = []) {
  console.log('profiles received:', profiles);

  return `
    <aside class="hidden md:flex w-64 flex-col bg-[#121212] px-6 py-8 border-l border-gray-700">

      <h1 class="font-[Cinzel] mb-10 text-xl mx-auto font-semibold text-purple-400">
        Familiars
      </h1>

      <section class="flex flex-col items-center gap-4 px-6 py-4 overflow-x-auto border-b border-gray-700 bg-[#121212]">
    
        ${(
          await Promise.all(
            profiles.slice(0, 6).map(async (profile) => {
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
          )
        ).join('')}
      </section>
    </aside>
  `;
}
