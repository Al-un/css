/**
 * https://stackoverflow.com/questions/31617955/create-individual-spa-bundles-with-webpack
 */

// Load required pages
// [TODO] require via a function instead of manually
const VALID_PAGES = ['data', 'form', 'modal', 'notification', 'panel'];

// Paths config
const FOLDER = 'html/';
const CONTENT_PLACEHOLDER = document.getElementById('content');

/**
 * Load a specific page to the main#content
 *
 * Source: https://stackoverflow.com/a/52349344/4906586
 * @param {*} page request page name without extension nor folder path
 */
export const loadPage = async page => {
  // Validity check
  if (!VALID_PAGES.includes(page)) {
    console.warn(`Requested page ${page} is invalid`);
    return;
  }

  // Load page
  const content = await (await fetch(`${FOLDER}${page}.html`)).text();
  CONTENT_PLACEHOLDER.innerHTML = content;
};

/**
 * Hash change listener
 */
export const onHashChange = () => {
  const page = window.location.hash.split('/')[0].replace('#', '');

  if (!page) return;

  loadPage(page);
};

/**
 * By default, load the form page
 */
export const loadDefaultPage = () => {
  window.location.hash = '#form';
  onHashChange();
};
