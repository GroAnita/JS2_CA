import { getRandomAvatar } from '../services/unsplashService.js';

/**
 * Makes sure that profiles in the sidebar has avatars and limits the number of profiles to display.
 * if a profile does not have an avatar, it fetches a random one from getRandomAvatar.
 * @param {Array<Object>} profiles -
 * @param {number} [limit=6]
 * @returns {Promise<Array<Object>>}
 */
export async function prepareProfilesForSidebar(profiles, limit = 6) {
  return Promise.all(
    profiles.slice(0, limit).map(async (profile) => {
      if (profile.avatar?.url) return profile;
      const avatarUrl = await getRandomAvatar();
      return {
        ...profile,
        avatar: {
          url: avatarUrl,
          alt: `${profile.name} avatar`,
        },
      };
    })
  );
}
