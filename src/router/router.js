import Home from '../views/home.js';
import About from '../views/about.js';
import Contact from '../views/contact.js';
import Header from '../components/header.js';
import SideNav from '../components/sidenav.js';
import SideMenuRight from '../components/sidenavright.js';
import NewUser from '../views/newuser.js';
import { initCreatePost } from '../views/initCreatePost.js';
import createPost from '../views/createPost.js';

import { initNewUserForm } from '../components/newuserform.js';
import { initLoginModal } from '../components/loginmodal.js';
import { guestOnly } from './routeguards.js';
import { updateAuthUI } from '../ui/authui.js';

import { initHome } from '../views/initHome.js';
import Profiles from '../views/profiles.js';
import { initProfiles } from '../views/initProfiles.js';

import ProfileDetail from '../views/profileDetail.js';
import { initProfileDetail } from '../views/initProfileDetail.js';

import { getRandomAvatar } from '../services/unsplashService.js';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
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

  if (path.startsWith('/profiles/') && path !== '/profiles') {
    const name = path.split('/')[2];

    document.getElementById('app').innerHTML = ProfileDetail(name);

    document.getElementById('sidenavRight').innerHTML = await SideMenuRight([]);

    initLoginModal();
    updateAuthUI();

    await initProfileDetail(name);
    return;
  }

  const route = routes[path] || Home;
  document.getElementById('app').innerHTML = route();

  let profiles = [];

  if (path === '/') {
    const homeData = await initHome();
    profiles = homeData?.profiles || [];

    profiles = await Promise.all(
      profiles.slice(0, 6).map(async (profile) => {
        if (profile.avatar?.url) return profile;

        const avatarUrl = await getRandomAvatar();
        return {
          ...profile,
          avatar: {
            url: avatarUrl,
            alt: `${profile.name} avatar`,
          },
        };
      })
    );
  }

  document.getElementById('sidenavRight').innerHTML =
    await SideMenuRight(profiles);
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
}
