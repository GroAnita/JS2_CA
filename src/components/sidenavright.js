import { getRandomAvatar } from '../services/unsplashService.js';

export default async function SideMenuRight(profiles = []) {
  const aside = document.createElement('aside');
  aside.className =
    'hidden md:flex w-64 flex-col bg-[#121212] px-6 py-8 border-l border-gray-700';

  const title = document.createElement('h1');
  title.className =
    'font-[Cinzel] mb-10 text-xl mx-auto font-semibold text-purple-400';
  title.textContent = 'Familiars';

  aside.appendChild(title);

  const section = document.createElement('section');
  section.className =
    'flex flex-col items-center gap-4 px-6 py-4 overflow-x-auto border-b border-gray-700 bg-[#121212]';

  const firstSixProfiles = profiles.slice(0, 6);

  for (const profile of firstSixProfiles) {
    const avatarUrl = profile.avatar?.url || (await getRandomAvatar());

    const profileLink = document.createElement('a');
    profileLink.href = `/profiles/${profile.name}`;
    profileLink.dataset.link = '';
    profileLink.className = 'block';

    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col items-center gap-3 shrink-0';

    const avatarBorder = document.createElement('div');
    avatarBorder.className =
      'w-24 h-24 rounded-full border-2 border-purple-400 p-0.5 hover:border-purple-800 transition mb-4 mt-6';

    const avatarImg = document.createElement('img');
    avatarImg.src = avatarUrl;
    avatarImg.alt = `€{profile.name} avatar`;
    avatarImg.className = 'w-full h-full rounded-full object-cover';

    const name = document.createElement('span');
    name.className = 'text-xs font-[Cinzel] text-gray-300';
    name.textContent = profile.name;

    avatarBorder.appendChild(avatarImg);
    wrapper.appendChild(avatarBorder);
    wrapper.appendChild(name);
    profileLink.appendChild(wrapper);
    section.appendChild(profileLink);
  }

  aside.appendChild(section);

  return aside;
}

/**  return `
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
*/
