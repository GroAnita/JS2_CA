import Home from '../views/Home.js';
import About from '../views/About.js';
import Contact from '../views/Contact.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import SideNav from '../components/sidenav.js';
import SideMenuRight from '../components/sidenavright.js';
import NewUser from '../views/newuser.js';
import { initNewUserForm } from '../components/newuserform.js';
import { initLoginModal } from '../components/loginmodal.js';
import { guestOnly } from './routeguards.js';
import { updateAuthUI } from '../ui/authui.js';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/newuser': guestOnly(NewUser),
};

export function router() {
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
  document.getElementById('sidenavRight').innerHTML = SideMenuRight();

  // Re-initialize modal after rendering
  initLoginModal();
  updateAuthUI();

  if (path === '/newuser') {
    initNewUserForm();
  }
}
