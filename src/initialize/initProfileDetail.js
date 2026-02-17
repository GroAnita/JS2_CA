import { fetchProfile, fetchProfilePosts } from '../services/profileService.js';
import { getAvatar } from '../ui/getAvatar.js';
import showToast from '../ui/showToast.js';

export async function initProfileDetail(name) {
  try {
    const [profilesResponse, postResponse] = await Promise.all([
      fetchProfile(name, '?_posts=true$_followers=true&following=true'),
      fetchProfilePosts(name),
    ]);

    const profile = profilesResponse.data;
    const posts = postResponse.data;

    document.getElementById('profile-detail').innerHTML = `
            <div class="text-center">
            <img
            src="${getAvatar(profile)}"
            alt="Avatar of ${profile.name}"
            class="h-32 w-32 rounded-full mb-4 mx-auto"
            />
            <h2 class="text-2xl font-[Cinzel] font-semibold text-purple-500">
                🕯️ ${profile.name}
            </h2>
            <p class="font-[Inter] text-gray-500 mt-2">
                ${profile.bio || 'No bio available.'}
            </p>
            <p class="text-sm text-gray-500">
                posts: ${profile._count?.posts ?? 0}
                followers: ${profile._count?.followers ?? 0}
                following: ${profile._count?.following ?? 0}
            </p>
            </div>
        `;

    document.getElementById('profile-posts').innerHTML = posts
      .map(
        (post) => `
            <article class="border p-4 rounded-lg bg-[var(--color-bg-surface)] shadow-sm w-96 mx-auto">
                <h3 class="text-lg font-[Cinzel] font-semibold text-purple-500">
                    🕯️ ${profile.name}
                </h3>
                <img
                <p class="font-[Inter] text-gray-300 mt-2">
                    ${post.body}
                </p>
            </article>
        `
      )
      .join('');
  } catch (error) {
    console.error('Error fetching profile details:', error);
    showToast(
      'Failed to load profile details. Please try again later.',
      'error'
    );
  }
}
