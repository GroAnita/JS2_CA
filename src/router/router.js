import Home from '../views/home.js';
import About from '../views/about.js';
import Contact from '../views/contact.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import SideNav from '../components/sidenav.js';
import SideMenuRight from '../components/sidenavright.js';
import NewUser from '../views/newuser.js';
import { initNewUserForm } from '../components/newuserform.js';
import { initLoginModal } from '../components/loginmodal.js';
import { guestOnly } from './routeguards.js';
import { updateAuthUI } from '../ui/authui.js';
import { initHome } from '../views/initHome.js';
import Profiles from '../views/profiles.js';
import { initProfiles } from '../views/initProfiles.js';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/newuser': guestOnly(NewUser),
  '/profiles': Profiles,
};

export async function router() {
  const base = '/JS2_CA';
  let path = window.location.pathname;

  if (path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }
  const route = routes[path] || Home;

  document.getElementById('sidenav').innerHTML = SideNav();
  document.getElementById('header').innerHTML = Header();
  document.getElementById('app').innerHTML = route();
  document.getElementById('footer').innerHTML = Footer();

  let profiles = [];

  if (path === '/') {
    const homeData = await initHome();
    profiles = homeData?.profiles || [];
    profiles = profiles.slice(0, 6);
  }

  document.getElementById('sidenavRight').innerHTML = SideMenuRight(profiles);

  initLoginModal();
  updateAuthUI();

  if (path === '/newuser') {
    initNewUserForm();
  }

  if (path === '/profiles') {
    initProfiles();
  }
}
