/**
 * HEX AND CHILL SPA router
 * Handles navigation , layout renders and view initialization.
 */

import Home from '../views/home.js';
import Header from '../components/header.js';
import SideNav from '../components/sidenav.js';
import SideMenuRight from '../components/sidenavright.js';
import NewUser from '../views/newuser.js';
import { initCreatePost } from '../initialize/initCreatePost.js';
import createPost from '../views/createPost.js';
import { initNewUserForm } from '../ui/newuserform.js';
import { initLoginModal } from '../components/loginmodal.js';
import { guestOnly } from './routeguards.js';
import { updateAuthUI } from '../ui/authui.js';
import { initHome } from '../initialize/initHome.js';
import Profiles from '../views/profiles.js';
import { initProfiles } from '../initialize/initProfiles.js';
import ProfileDetail from '../views/profileDetail.js';
import { initProfileDetail } from '../initialize/initProfileDetail.js';
import { initSinglePost } from '../initialize/initSinglePost.js';
import { initOwnProfile } from '../initialize/initOwnProfile.js';
import ownProfile from '../views/ownProfile.js';
import editPost from '../views/editPost.js';
import { initEditPost } from '../initialize/initEditPost.js';
import { initFamiliars } from '../initialize/initFamiliars.js';
import { fetchProfiles } from '../services/profileService.js';
import { prepareProfilesForSidebar } from '../utils/profileHelpers.js';
import searchOverlay from '../ui/searchOverlay.js';

/**
 * A static route map for simple view rendering.
 * Dynamic routes are handled separately in the router function.
 */
const routes = {
  '/': Home,
  '/newuser': guestOnly(NewUser),
  '/profiles': Profiles,
  '/createPost': createPost,
};

export async function router() {
  const base = '/JS2_CA';
  let path = window.location.pathname;

  if (path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }

  // Layout
  document.getElementById('sidenav').innerHTML = SideNav();
  document.getElementById('header').innerHTML = Header();
  document.body.insertAdjacentHTML('beforeend', searchOverlay());
  if (path.startsWith('/profiles/') && path !== '/profiles') {
    const name = path.split('/')[2];

    document.getElementById('app').innerHTML = ProfileDetail(name);

    const profilesResponse = await fetchProfiles();
    let profiles = profilesResponse.data;
    profiles = await prepareProfilesForSidebar(profiles);
    const sideNavRight = document.getElementById('sidenavRight');
    sideNavRight.innerHTML = '';
    const menu = await SideMenuRight(profiles);
    sideNavRight.appendChild(menu);

    initLoginModal();
    updateAuthUI();

    await initProfileDetail(name);
    return;
  }

  const route = routes[path] || Home;
  const app = document.getElementById('app');
  app.innerHTML = '';
  const view = route();
  if (view instanceof HTMLElement) {
    app.appendChild(view);
  } else {
    app.innerHTML = view;
  }
  let profiles = [];

  if (path === '/') {
    const homeData = await initHome();
    profiles = homeData?.profiles || [];
  } else {
    const profilesResponse = await fetchProfiles();
    profiles = profilesResponse.data;
  }
  profiles = await prepareProfilesForSidebar(profiles);

  const sideNavRight = document.getElementById('sidenavRight');
  sideNavRight.innerHTML = '';
  sideNavRight.appendChild(await SideMenuRight(profiles));

  initLoginModal();
  updateAuthUI();

  if (path === '/newuser') {
    initNewUserForm();
  }

  if (path === '/profiles') {
    initProfiles();
  }

  if (path === '/createPost') {
    initCreatePost();
  }

  if (path.startsWith('/post/')) {
    const postId = path.split('/post/')[1];
    initSinglePost(postId);
    return;
  }

  if (path === '/ownProfile') {
    document.getElementById('app').innerHTML = ownProfile();
    initOwnProfile();
  }

  if (path.startsWith('/edit-post')) {
    const postId = path.split('/edit-post/')[1];
    document.getElementById('app').innerHTML = editPost();
    await initEditPost(postId);
    return;
  }

  if (path === '/familiars') {
    await initFamiliars();
    return;
  }
}
