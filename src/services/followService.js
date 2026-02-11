import { apiClient } from '../services/apiClient';

export async function followUser(username) {
  return await apiClient(`/social/profiles/${username}/follow`, {
    method: 'PUT',
  });
}

export async function unfollowUser(username) {
  return await apiClient(`/social/profiles/${username}/unfollow`, {
    method: 'PUT',
  });
}
