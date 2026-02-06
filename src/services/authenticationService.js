import { apiClient } from './apiClient.js';
import { removeAuthFromStorage, clearAuthState } from '../state/authstate.js';
import { updateAuthUI } from '../ui/authui.js';

export async function registerUser(data) {
  try {
    const response = await fetch(
      'https://v2.api.noroff.dev/api/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.error || 'Failed to register user');
    }

    return json.data;
  } catch (error) {
    throw new Error(`Registration error: ${error.message}`);
  }
}

export async function loginUser(credentials) {
  return apiClient('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}

export function logoutUser() {
  clearAuthState();
  removeAuthFromStorage();
  updateAuthUI();
}
