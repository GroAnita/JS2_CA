import { apiClient } from './apiClient';

/**
 * Creates a new post.
 *
 * @param {Object} postData - The data for the new post.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.body - The body content of the post.
 * @param {Array<string>} postData.tags - An array of tags associated with the post.
 * @returns {Promise<Object>} The created post object from the API.
 * @throws Will throw an error if the API request fails.
 */

export async function createPost(postData) {
  return await apiClient('social/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
  });
}

export async function fetchPosts(params = '') {
  return await apiClient(`/social/posts?_author=true&_comments=true${params}`);
}
