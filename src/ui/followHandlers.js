import { followUser, unfollowUser } from '../services/followService.js';
import { getFollowingList, setFollowingList } from '../state/followState.js';

/**
 * Initializing global follow/unfollow button click handlers.
 * -Basically it listens for clicks on follow buttons anywhere on the document.
 * 1.It calls API to follow or unfollow user.
 * 2.Updates the global following state.
 * 3.Updates all follow buttons for that user in the UI.
 *
 * @function initFollowHandlers
 * @returns {void}
 */
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

/**
 * Updates all follow/unfollow buttons in the UI so it reflects what the current follow status is for the given username.
 * This makes sure that:
 * -Follow buttons are hidden if user is already followed
 * -Unfollow buttons is visible if user is Followed.
 *
 * @function updateAllFollowButtons
 * @param {string} username - The username who follow status has changed, and whose buttons should be updated.
 * @returns {void}
 */
export function updateAllFollowButtons(username) {
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
