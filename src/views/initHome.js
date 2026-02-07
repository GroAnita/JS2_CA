import { fetchPosts } from '../services/postCreateService.js';
import showToast from '../ui/showToast.js';
import { isLoggedIn } from '../state/authstate.js';
import { renderPosts } from '../ui/renderPosts.js';
import { fetchProfiles } from '../services/profileService.js';

export async function initHome() {
  if (!isLoggedIn()) {
    console.warn('User not logged in, skipping post fetch');
    return {
      profiles: [],
    };
  }

  try {
    const [postsResponse, profilesResponse] = await Promise.all([
      fetchPosts(),
      fetchProfiles(),
    ]);

    console.log('first post:', postsResponse.data[0]);
    renderPosts(postsResponse.data);

    console.log('profiles loaded:', profilesResponse.data);

    return {
      profiles: profilesResponse.data,
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    if (error.message.includes('API key')) {
      showToast(
        'Please log out and log back in to refresh your API key',
        'error'
      );
    } else {
      showToast('Failed to load posts. Please try again.', 'error');
    }
    return {
      profiles: [],
    };
  }
}
