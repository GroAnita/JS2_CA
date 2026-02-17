import { fetchProfile, fetchProfilePosts } from '../services/profileService.js';
import { getAvatar } from '../ui/getAvatar.js';
import showToast from '../ui/showToast.js';
import { getCurrentUser } from '../state/authstate.js';
import { renderPosts } from '../ui/renderPosts.js';
import { updateProfile } from '../services/profileService.js';

export async function initOwnProfile() {
  const user = getCurrentUser();
  if (!user) return;

  try {
    const [profileRes, postRes] = await Promise.all([
      fetchProfile(
        user.username,
        '?_posts=true&_followers=true&following=true'
      ),
      fetchProfilePosts(user.username, '?_author=true&_comments=true'),
    ]);

    const profile = profileRes.data;
    const posts = postRes.data;

    document.getElementById('own-profile-info').innerHTML = `
        <img 
        src="${getAvatar(profile)}"
        alt ="Avatar of ${profile.name}"
        class="h-32 w-32 rounded-full mb-4 mx-auto"
        />
        <h2 class="text-lg font-semibold text-purple-500">
        🕯️ ${profile.name}
        </h2>
        <button id="change-avatar" class="mt-2 px-2 py-1 rounded-lg bg-purple-500 text-white text-xs border-2 border-gray-300/60 hover:border-purple-600 hover:bg-purple-400 transition">
        Change Avatar
        </button>
        <p class="font-[Inter] text-white mt-2">
        ${profile.bio || 'No bio available.'}
        </p>
        <p class="text-sm text-gray-300 mt-1">
        posts: ${profile._count?.posts ?? 0}
        followers: ${profile._count?.followers ?? 0}
        following: ${profile._count?.following ?? 0}
        </p>

        `;

    const changeAvatarButton = document.getElementById('change-avatar');
    if (!changeAvatarButton) {
      console.warn('Change avatar button not found');
      return;
    }
    changeAvatarButton.addEventListener('click', async () => {
      const newAvatarUrl = prompt('Enter new avatar URL: ');
      if (!newAvatarUrl) return;
      try {
        await updateProfile(user.username, {
          avatar: {
            url: newAvatarUrl,
            alt: `${profile.name}'s avatar`,
          },
        });
        showToast('Avatar updated successfully!', 'success');
        document.querySelector('#own-profile-info img').src = newAvatarUrl;
      } catch (error) {
        console.error('Failed to update avatar:', error);
        showToast('Failed to update avatar. Please try again.', 'error');
      }
    });

    const bioInput = document.getElementById('bio-input');
    bioInput.value = profile.bio || '';

    await renderPosts(posts, { containerId: 'own-posts' });
  } catch (error) {
    console.error('Error loading profile:', error);
    showToast('Failed to load profile. Please try again later.', 'error');
  }
}
