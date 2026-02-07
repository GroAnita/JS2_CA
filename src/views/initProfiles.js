import { fetchProfiles } from '../services/profileService.js';
import { renderProfiles } from '../components/profileList.js';
import { isLoggedIn } from '../state/authstate.js';

export async function initProfiles() {
  if (!isLoggedIn()) return;

  try {
    const response = await fetchProfiles();
    renderProfiles(response.data);
  } catch (error) {
    console.error('Failed to load profiles:', error.message);
  }
}
