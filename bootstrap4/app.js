// Styles
import '../common/common.scss';
import './app.scss';
// Common JavaScript
// import * as Common from '../common';
import { onHashChange, loadDefaultPage } from '../common/PageLoader.js';
// Dependent HTML pages
import './html/home.html';
import './html/data.html';
import './html/form.html';
import './html/modal.html';
import './html/notification.html';
import './html/panel.html';

const onBootstrapHashChange = async () => {
  const page = await onHashChange();
  // Home page specific
  if (page === 'home') {
    document.getElementById('content').classList.remove('container');
  } else {
    document.getElementById('content').classList.add('container');
  }
};

window.onhashchange = onBootstrapHashChange;
loadDefaultPage();
