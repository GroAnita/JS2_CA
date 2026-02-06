import { getAuthToken } from '../state/authstate.js';
import { getUserFriendlyErrorMessages } from '../utils/errorMessages.js';

const BASE_URL = 'https://v2.api.noroff.dev';

export async function apiClient(endpoint, options = {}) {
  try {
    const apiKey = localStorage.getItem('apiKey');
    const accessToken = getAuthToken();

    const headers = { 'Content-Type': 'application/json', ...options.headers };

    if (apiKey) {
      headers['X-Noroff-API-Key'] = apiKey;
    }

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.errors?.[0]?.message || 'API error');
    }
    return result;
  } catch (error) {
    console.error('API Client Error:', error.message);
    const userFriendlyMessage = getUserFriendlyErrorMessages(error);
    throw new Error(userFriendlyMessage);
  }
}
