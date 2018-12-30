import '../common/common.scss';
import './app.scss';
import * as Common from '../common';
import './html/home.html';
import './html/data.html';
import './html/form.html';
import './html/modal.html';
import './html/notification.html';
import './html/panel.html';

const onHashChange = async () => {
  await Common.onHashChange();
};

window.onhashchange = onHashChange;
Common.loadDefaultPage();

/**
 * Bulma specific stuff
 */
const CSS_ACTIVE_MENU = 'is-active';

/**
 * When on mobile view, toggle menu content
 */
export const toggleMenu = () => {
  document
    // toggle menu content AND menu toggler burger
    .querySelectorAll('.navbar > .container > .navbar-menu, .navbar-burger')
    .forEach(node => {
      node.classList.toggle(CSS_ACTIVE_MENU);
    });
};

/**
 * Popup a toast
 */
export const popNormalNotif = () => {
  Common.toggleDisplay('notification-normal');
};

/**
 * Popup an error toast
 */
export const popErrorNotif = () => {
  Common.toggleDisplay('notification-error');
};
