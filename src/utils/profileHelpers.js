import { getRandomAvatar } from '../services/unsplashService.js';
import { getFollowingList } from '../state/followState.js';

/**
 * Makes sure that profiles in the sidebar has avatars and limits the number of profiles to display.
 * if a profile does not have an avatar, it fetches a random one from getRandomAvatar.
 * @param {Array<Object>} profiles -
 * @param {number} [limit=6]
 * @returns {Promise<Array<Object>>}
 */
export async function prepareProfilesForSidebar(profiles) {
  const following = getFollowingList();
  const followingNames = new Set(following.map((user) => user.name));

  const familiarProfiles = profiles.filter((profile) =>
    followingNames.has(profile.name)
  );

  const preparedProfiles = await Promise.all(
    familiarProfiles.map(async (profile) => {
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
  return preparedProfiles.slice(0, 6); // Limits to the first 6 profiles
}
