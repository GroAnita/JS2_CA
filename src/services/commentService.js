import { apiClient } from './apiClient.js';

export function createComment(postId, body) {
  return apiClient(`/social/posts/${postId}/comment`, {
    method: 'POST',
    body: JSON.stringify({ body }),
  });
}

export function fetchComments(postId) {
  return apiClient(`/social/posts/${postId}/comment`);
}
