import { fetchProfiles } from '../services/profileService.js';
import { renderProfiles } from '../components/profileList.js';
import { isLoggedIn } from '../state/authstate.js';
import showToast from '../ui/showToast.js';

export async function initProfiles() {
  if (!isLoggedIn()) {
    showToast('You must be logged in to view profiles.');
    return;
  }

  try {
    const response = await fetchProfiles();
    await renderProfiles(response.data);
  } catch (error) {
    console.error('Failed to load profiles:', error.message);
    showToast('Failed to load profiles. Please try again later.');
  }
}
