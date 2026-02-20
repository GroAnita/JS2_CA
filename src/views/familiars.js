import { getRandomAvatar } from '../services/unsplashService.js';

/**
 * Renders the Familiars view that displays ALL the profiles the user is following.
 *
 * @function Familiars
 * @param {Array<Object>} profiles - An array of profile objects to be displayed as familiars.
 * @returns {Promise<HTMLElement>} A promise that resolves to an HTML element containing the rendered Familiars view.
 */
export default async function Familiars(profiles = []) {
  const wrapper = document.createElement('div');

  const title = document.createElement('h1');
  title.className =
    'text-2xl font-[Cinzel] font-semibold text-purple-400 mb-6 text-center mt-4';
  title.textContent = 'My Familiars';

  const section = document.createElement('section');
  section.className =
    'grid grid-cols-4 items-center gap-4 px-6 py-4 overflow-x-auto border-b border-gray-700 bg-[#121212] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  for (const profile of profiles) {
    const avatarUrl = profile.avatar?.url || (await getRandomAvatar());

    const familiarLink = document.createElement('a');
    familiarLink.href = `/profiles/${profile.name}`;
    familiarLink.dataset.link = '';
    familiarLink.className = 'block';

    const familiarWrapper = document.createElement('div');
    familiarWrapper.className = 'flex flex-col items-center gap-3 shrink-0';

    const avatarBorder = document.createElement('div');
    avatarBorder.className =
      'w-24 h-24 rounded-full border-2 border-gray-300/70 p-0.5 hover:border-purple-400 transition mb-4 mt-6';

    const avatarImg = document.createElement('img');
    avatarImg.src = avatarUrl;
    avatarImg.alt = `${profile.name} avatar`;
    avatarImg.className = 'w-full h-full rounded-full object-cover';

    const familiarName = document.createElement('span');
    familiarName.className = 'text-xs font-[Cinzel] text-gray-300';
    familiarName.textContent = profile.name;

    avatarBorder.appendChild(avatarImg);
    familiarWrapper.appendChild(avatarBorder);
    familiarWrapper.appendChild(familiarName);
    familiarLink.appendChild(familiarName);
    familiarLink.appendChild(familiarWrapper);
    section.appendChild(familiarLink);
  }

  wrapper.appendChild(title);
  wrapper.appendChild(section);

  return wrapper;
}
