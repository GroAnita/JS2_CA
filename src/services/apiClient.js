import { getAuthToken } from '../state/authstate.js';
import { getUserFriendlyErrorMessages } from '../utils/errorMessages.js';

const BASE_URL = 'https://v2.api.noroff.dev';

/**
 * options: object: method, headers, body etc passed to fetch.
 * returns: the parsed JSON response from the API, or throws an error with a user-friendly message if the request fails.
 * API key injection and error handling is done here to centralize it and avoid repetition in other service files.
 * Authentication token is added to the headers.
 *
 * @async
 * @function apiClient
 * @param {string} endpoint - The API endpoint to call (e.g., '/social/profiles').
 * @param {object} [options={}] - Optional fetch options (method, headers, body, etc.).
 * @returns {Promise<object>} - The parsed JSON response from the API.
 * @throws {Error} - Throws an error with a user-friendly message if the request fails.
 * @example // GET request
 * const posts = await apiClient('/social/posts');
 * @example // POST request with body
 * const createPost = await apiClient('/social/posts', {
 *   method: 'POST',
 *   body: JSON.stringify({ title: 'My Post', content: 'Hello world!' }),
 * });
 * @example // Request with authentication token
 * const profile = await apiClient('/social/profiles/id');
 * */
export async function apiClient(endpoint, options = {}) {
  try {
    const accessToken = getAuthToken(); // get the access token from authState

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

    // if empty response, returns empty result instead of throwing error when trying to parse JSON. incase of 204 No content for an example.
    let result = null;
    const text = await response.text();
    result = text ? JSON.parse(text) : {};
    // attepts to get the first error message from API response.
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
