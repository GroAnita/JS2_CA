import { apiClient } from './apiClient.js';

export async function fetchPosts(params = '') {
  return apiClient(
    `/social/posts?_author=true&_comments=true&_sort=created&_order=desc${params}`
  );
}

export async function deletePost(postId) {
  return await apiClient(`/social/posts/${postId}`, {
    method: 'DELETE',
  });
}

export async function updatePost(postId, postData) {
  return await apiClient(`/social/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify(postData),
  });
}
