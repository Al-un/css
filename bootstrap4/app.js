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
  const page = await Common.onHashChange();
  // Home page specific
  if (page === 'home') {
    document.getElementById('content').classList.remove('container');
  } else {
    document.getElementById('content').classList.add('container');
  }
};

window.onhashchange = onHashChange;
Common.loadDefaultPage();