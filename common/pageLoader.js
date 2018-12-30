/**
 * https://stackoverflow.com/questions/31617955/create-individual-spa-bundles-with-webpack
 */

// Load required pages
// [TODO] require via a function instead of manually
const VALID_PAGES = ['home', 'data', 'form', 'modal', 'notification', 'panel'];

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
 * @returns loaded page name
 */
export const onHashChange = async () => {
  const page = window.location.hash.split('/')[0].replace('#', '');

  if (!page) return null;

  await loadPage(page);

  return page;
};

/**
 * By default, load the home page
 */
export const loadDefaultPage = () => {
  window.location.hash = '#home';
  onHashChange();
};
