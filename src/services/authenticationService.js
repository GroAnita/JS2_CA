import { apiClient } from './apiClient.js';
import { clearAuthState } from '../state/authstate.js';
import { updateAuthUI } from '../ui/authui.js';
import { setAuthState } from '../state/authstate.js';

export async function registerUser(data) {
  try {
    const response = await fetch('https://v2.api.noroff.dev/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

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
  const response = await apiClient('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  const authData = response.data;
  setAuthState(authData);

  // Commenting out automatic API key creation - create manually at noroff.dev
  // if (!localStorage.getItem('apiKey')) {
  //   await createApiKey(authData.accessToken);
  // }

  updateAuthUI();
  return authData;
}

export function logoutUser() {
  clearAuthState();
  localStorage.removeItem('apiKey');
  updateAuthUI();
}

export async function createApiKey(accessToken) {
  try {
    console.log(
      'Creating API key with token:',
      accessToken ? 'Token exists' : 'No token'
    );
    const response = await fetch(
      'https://v2.api.noroff.dev/auth/create-api-key',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const result = await response.json();
    console.log('API key response:', response.status, result);

    if (!response.ok) {
      throw new Error(
        result.errors?.[0]?.message || 'Failed to create API key'
      );
    }

    const apiKey = result.data.key;
    localStorage.setItem('apiKey', apiKey);
    console.log('API key saved to localStorage');
    return apiKey;
  } catch (error) {
    console.error('Failed to create API key:', error);
    console.error('Full error details:', error.message);
    // Don't throw - just log the error and continue without API key
    return null;
  }
}
