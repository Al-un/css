// ---------- To re-export page loaders
import { loadDefaultPage, loadPage, onHashChange } from './PageLoader';
export { loadDefaultPage, loadPage, onHashChange };

// ---------- Hide and seeks
export const toggleDisplay = targetId => {
  document.getElementById(targetId).classList.toggle('not-displayed');
};
