import * as PageLoader from '../common/pageLoader';
import './html/home.html';
import './html/data.html';
import './html/form.html';
import './html/modal.html';
import './html/notification.html';
import './html/panel.html';

window.onhashchange = PageLoader.onHashChange;
PageLoader.loadDefaultPage();
