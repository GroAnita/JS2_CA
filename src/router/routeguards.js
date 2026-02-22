import { isLoggedIn } from '../state/authstate';

// router/protects routes like /profile from unauthenticated users

//redirects unauthenticated users to home page/ guests
export function requireAuth() {
  if (!isLoggedIn()) {
    //my user is not logged in, redirect to home page
    history.pushState(null, null, '/');
    return false;
  }
  return true;
}

//redirects logged in users away from login/register pages
export function redirectIfLoggedIn() {
  if (isLoggedIn()) {
    //user is logged in, redirect to home page
    history.pushState(null, null, '/');
    return false;
  }
  return true;
}

// protecting a route to only allow logged in users
export function protectedRoute(view) {
  return () => {
    if (!requireAuth()) return '';
    return view();
  };
}

// This view is for guest users only
export function guestOnly(view) {
  return () => {
    if (!redirectIfLoggedIn()) return '';
    return view();
  };
}
