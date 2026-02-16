import Home from '../views/home.js';
import About from '../views/about.js';
import Contact from '../views/contact.js';
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

import { getRandomAvatar } from '../services/unsplashService.js';
import { initSinglePost } from '../initialize/initSinglePost.js';
import { initOwnProfile } from '../initialize/initOwnProfile.js';
import ownProfile from '../views/ownProfile.js';
import editPost from '../views/editPost.js';
import { initEditPost } from '../initialize/initEditPost.js';
import { initFamiliars } from '../initialize/initFamiliars.js';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/newuser': guestOnly(NewUser),
  '/profiles': Profiles,
  '/createPost': createPost,
  '/ownProfile': initOwnProfile,
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
