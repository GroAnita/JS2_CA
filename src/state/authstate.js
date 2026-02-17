// state/are you logged in or out?
//who is the current user?

let authState = null;

const AUTH_STORAGE_KEY = 'authUser';

/**
 * setting the authentication state in memory
 * @param {*} authData
 */
export function setAuthState(authData) {
  authState = authData;
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
  document.dispatchEvent(new Event('auth:changed'));
}

//clearing the auth state when logging out
export function clearAuthState() {
  authState = null;
  localStorage.removeItem(AUTH_STORAGE_KEY);
  document.dispatchEvent(new Event('auth:changed'));
}

//Getting the full auth state
export function getAuthState() {
  if (authState) {
    return authState;
  }

  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!stored) {
    return null;
  }

  try {
    authState = JSON.parse(stored);
    return authState;
  } catch {
    return null;
  }
}

//To check if user is logged in
export function isLoggedIn() {
  return Boolean(getAuthToken());
}

//getting the logged in user info
export function getCurrentUser() {
  const state = getAuthState();
  if (!state) return null;
  return {
    username: state.name,
    email: state.email,
  };
}

//And get the token from auth state
export function getAuthToken() {
  const state = getAuthState();
  return state?.accessToken || null;
}
