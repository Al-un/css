// Styles
import '../common/common.scss';
import './app.scss';
// Common JavaScript
import * as Common from '../common';
// Dependent HTML pages
import './html/home.html';
import './html/data.html';
import './html/form.html';
import './html/modal.html';
import './html/notification.html';
import './html/panel.html';

window.onhashchange = Common.onHashChange;
Common.loadDefaultPage();
