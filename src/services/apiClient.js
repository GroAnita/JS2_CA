import { getAuthToken } from '../state/authstate.js';
import { getUserFriendlyErrorMessages } from '../utils/errorMessages.js';

const BASE_URL = 'https://v2.api.noroff.dev';

export async function apiClient(endpoint, options = {}) {
  try {
    const accessToken = getAuthToken();

    const headers = {
      'Content-Type': 'application/json',
      'X-Noroff-API-Key': import.meta.env.VITE_NOROFF_API_KEY,
      ...options.headers,
    };

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    let result = null;
    const text = await response.text();
    result = text ? JSON.parse(text) : {};

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
