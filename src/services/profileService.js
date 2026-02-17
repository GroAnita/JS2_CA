import { apiClient } from './apiClient.js';

/**
 * Fetches a list of profiles fromt the API.
 * @param {string} [params=''] -Optional query string ('?_followers=true') to inc followers count etc.
 * @returns {Promise} - API response containing profiles data.
 */
export function fetchProfiles(params = '') {
  return apiClient(`/social/profiles${params}`);
}

/**
 * Fetching a single profile by username from API.
 * @param {string} name - Username of the profile.
 * @param {string} [params=''] - Optional query params.
 * @return {Promsise<Object>} - API response with profile data.
 */
export function fetchProfile(name, params = '') {
  return apiClient(`/social/profiles/${name}${params}`);
}

/**
 * Fetching posts created by a specific profile.
 * @param {string} username of the profile who owns the posts.
 * @param {string} [params=''] - Optional query params.
 * @return {Promise<Object>} - API response with posts data.
 */
export function fetchProfilePosts(name, params = '') {
  return apiClient(`/social/profiles/${name}/posts${params}`);
}

/**
 * Updating a users profile.
 * @param {string} name - Username of the profile to update.
 * @param {Object} data - Data to update the profile with.
 * @return {Promise<Object>} - API response with updated profile data.
 */
export function updateProfile(name, data) {
  return apiClient(`/social/profiles/${name}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * Follows a profile by username. Sends a PUT request to the API to follow the specific profile.
 * @param {string} name - Username of the profile to follow.
 * @returns {Promise} - API response from the follow request.
 */
export function followProfile(name) {
  return apiClient(`/social/profiles/${name}/follow`, {
    method: 'PUT',
  });
}

/**
 * Unfollows a profile by username. Sends a PUT request to API to unfollow the specific profile.
 * @param {string} name - Username of the profile to unfollow.
 * @returns {Promise} - API response from the unfollow request.
 */
export function unfollowProfile(name) {
  return apiClient(`/social/profiles/${name}/unfollow`, {
    method: 'PUT',
  });
}

/**
 * Searches for profiles by a query string. Sends a GET request to the API to search for profiles matching the query.
 * @param {string} query - The search query string.
 * @returns {Promise<Object>} - Matching profiles
 */
export function searchProfiles(query) {
  if (!query || query.trim()) return Promise.resolve({ data: [] });
  return apiClient(
    `/social/profiles/search?query=${encodeURIComponent(query)}`
  );
}
