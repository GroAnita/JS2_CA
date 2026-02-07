import { apiClient } from './apiClient.js';

export function fetchProfiles(params = '') {
  return apiClient(`/social/profiles${params}`);
}

export function fetchProfile(name, params = '') {
  return apiClient(`/social/profiles/${name}${params}`);
}

export function fetchProfilePosts(name, params = '') {
  return apiClient(`/social/profiles/${name}/posts${params}`);
}

export function updateProfile(name, data) {
  return apiClient(`/social/profiles/${name}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function followProfile(name) {
  return apiClient(`/social/profiles/${name}/follow`, {
    method: 'PUT',
  });
}

export function unfollowProfile(name) {
  return apiClient(`/social/profiles/${name}/unfollow`, {
    method: 'PUT',
  });
}

export function searchProfiles(query) {
  return apiClient(`/social/profiles/search?query=${query}`);
}
