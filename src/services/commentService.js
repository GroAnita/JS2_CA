import { apiClient } from './apiClient.js';

export function createComment(postId, commentText) {
  return apiClient(`/social/posts/${postId}/comment?_author=true`, {
    method: 'POST',
    body: JSON.stringify({ body: commentText }),
  });
}

export function fetchComments(postId) {
  return apiClient(`/social/posts/${postId}/comment`);
}
