import { getFollowingList } from '../state/followState.js';
import Familiars from '../views/familiars.js';

export async function initFamiliars() {
  const container = document.getElementById('app');
  const following = getFollowingList();

  container.innerHTML = '';
  const view = await Familiars(following);
  container.appendChild(view);
}
