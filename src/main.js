import './css/variables.css';
import './css/styles.css';
import './css/nav.css';
import './css/footer.css';
import './css/loggedinusers.css';
import { router } from './router/router.js';
import LoginModal, { initLoginModal } from './components/loginmodal.js';
import { loadAuthFromStorage } from './utils/authstorage.js';
import { updateAuthUI } from './ui/authui.js';
import { setAuthState } from './state/authstate.js';
//import { loadAuthFromStorage } from "./utils/authStorage.js";
//import { setAuthState } from "./state/authState.js";
//import { updateAuthUI } from "./ui/authUI.js";

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-link]');
  if (link) {
    e.preventDefault();
    navigateTo(link.getAttribute('href'));
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
  updateAuthUI(); //update nav/buttons and profile info
}

initAuth(); //initializing the authentication state
//the initial call to set up the correct view
router();
