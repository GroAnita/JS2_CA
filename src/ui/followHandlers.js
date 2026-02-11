import { followUser, unfollowUser } from '../services/followService.js';
import { getFollowingList, setFollowingList } from '../state/followState.js';

export function initFollowHandlers() {
  document.addEventListener('click', async (event) => {
    const followButton = event.target.closest('button[data-auth="follow"]');
    const unfollowButton = event.target.closest('button[data-auth="followed"]');

    if (!followButton && !unfollowButton) return;
    const button = followButton || unfollowButton;
    const username = button.dataset.username;

    try {
      let result;
      if (followButton) {
        result = await followUser(username);
      } else {
        result = await unfollowUser(username);
      }
      setFollowingList(result.data.following);
      updateAllFollowButtons(username);
    } catch (error) {
      console.error('Error updating follow status:', error);
      alert('Failed to update follow status. Please try again.');
    }
  });
}

function updateAllFollowButtons(username) {
  const followingList = getFollowingList();
  const isFollowing = followingList.some((user) => user.name === username);
  const allContainer = document.querySelectorAll('[data-follow-container]');
  allContainer.forEach((container) => {
    const followButton = container.querySelector('[data-auth="follow"]');
    const unfollowButton = container.querySelector('[data-auth="followed"]');

    if (!followButton || !unfollowButton) return;

    if (followButton.dataset.username === username) {
      followButton.classList.toggle('hidden', isFollowing);
      unfollowButton.classList.toggle('hidden', !isFollowing);
    }
  });
}
