import './css/variables.css';
import './css/styles.css';
import { router } from './router/router.js';
import LoginModal, { initLoginModal } from './components/loginmodal.js';
import { loadAuthFromStorage } from './utils/authstorage.js';
import { updateAuthUI } from './ui/authui.js';
import { setAuthState } from './state/authstate.js';
import { logoutUser } from './services/authenticationService.js';
import { getAuthState } from './state/authstate.js';
import { initFollowHandlers } from './ui/followHandlers.js';
import { initSearch } from './initialize/initSearch.js';
import { initComment } from './initialize/initComment.js';

// Set API key in localStorage for apiClient to use
localStorage.setItem('apiKey', import.meta.env.VITE_NOROFF_API_KEY);
document.addEventListener('auth:changed', () => {
  updateAuthUI();
  if (window.location.pathname.includes('/JS2_CA/')) {
    router();
  }
});

const base = '/JS2_CA';

function navigateTo(url) {
  history.pushState(null, null, base + url);
  router();
}
document.addEventListener('click', (e) => {
  // createPost button
  if (e.target.closest('[data-open-create-post]')) {
    e.preventDefault();
    navigateTo('/createPost');
    return;
  }
  //logout button
  if (e.target.closest('#logout-button')) {
    e.preventDefault();
    logoutUser();
    navigateTo('/');
    return;
  }
  //own profile button / covenprofile
  if (e.target.closest('[data-open-own-profile]')) {
    e.preventDefault();
    navigateTo('/ownProfile');
    return;
  }

  const link = e.target.closest('a[data-link]');
  if (link) {
    e.preventDefault();
    navigateTo(link.getAttribute('href'));
  }

  //familiars button
  if (e.target.closest('[data-open-familiars]')) {
    e.preventDefault();
    navigateTo('/familiars');
  }
});

//Handle browsers back and forward buttons
window.addEventListener('popstate', router);

//Login Modal
document.body.insertAdjacentHTML('beforeend', LoginModal());
initLoginModal();

export function initAuth() {
  const authData = loadAuthFromStorage();
  if (!authData) {
    updateAuthUI();
    return;
  }
  setAuthState(authData);
}
initFollowHandlers(); // Set up follow/unfollow button handlers
initAuth(); //initializing the authentication state
getAuthState();
initSearch(); // Initialize search functionality
initComment(); // Initialize comment functionality
router();
