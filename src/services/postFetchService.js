import { apiClient } from './apiClient.js';

export async function fetchPosts() {
  return apiClient('social/posts');
}
