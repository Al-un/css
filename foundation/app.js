// Styles
import 'common.scss';
import './app.scss';
import $ from 'jquery';
import Foundation from 'foundation-sites/dist/js/foundation';
// import FoundationKeyboard from 'foundation-sites/dist/js/plugins/foundation.util.keyboard';
// import FoundationBox from 'foundation-sites/dist/js/plugins/foundation.util.box';
// import FoundationTriggers from 'foundation-sites/dist/js/plugins/foundation.util.triggers';
// import FoundationMediaQuery from 'foundation-sites/dist/js/plugins/foundation.util.mediaQuery';
// import FoundationMotion from 'foundation-sites/dist/js/plugins/foundation.util.motion';
// Common JavaScript
import * as Common from '../common';
import { onHashChange, loadDefaultPage } from 'pageLoader';
// Dependent HTML pages
import './html/home.html';
import './html/data.html';
import './html/form.html';
import './html/modal.html';
import './html/notification.html';
import './html/panel.html';

window.onhashchange = onHashChange;
loadDefaultPage();

// https://foundation.zurb.com/forum/posts/55013-how-to-include-jquery-plugin-using-webpack
window.$ = $;
$(document).foundation();
