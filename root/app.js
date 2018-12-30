import '../common/common.scss';
import './app.scss';
import frameworks from './frameworks';

/**
 * Create an element, add css classes and assign defined attributes
 * @param {String} tagName
 * @param {Array} cssClasses
 */
const createTag = (tagName, cssClasses, attributes) => {
  // generate
  const element = document.createElement(tagName);

  // css
  if (Array.isArray(cssClasses)) {
    cssClasses.forEach(clazz => element.classList.add(clazz));
  }
  // single CSS class
  else if (typeof cssClasses === 'string') {
    element.classList.add(cssClasses);
  }

  // attributes
  for (let attr in attributes) {
    // special attributes:
    if (attr === 'innerHTML') {
      element.innerHTML = attributes[attr];
    }
    // Others
    else {
      element.setAttribute(attr, attributes[attr]);
    }
  }

  return element;
};

/**
 * For knowledge purpose, let's play a bit...
 * @param {*} framework
 */
const renderFramework = framework => {
  // --- Header
  const header = createTag('div', ['card-header', 'has-background-primary']);
  // header: icon
  header.appendChild(
    createTag('img', 'card-header-icon', {
      src: framework.header.icon
    })
  );
  // header: title
  header.appendChild(
    createTag('p', ['card-header-title', 'has-text-white'], {
      innerHTML: framework.header.title
    })
  );

  // --- Content
  const content = createTag('div', ['card-content', 'content']);
  content.appendChild(createTag('p', null, { innerHTML: 'Pros' }));
  const pros = createTag('ul');
  framework.content.pros.forEach(pro => {
    const proElmt = createTag('li', null, { innerHTML: pro });
    pros.appendChild(proElmt);
  });
  content.appendChild(pros);
  content.appendChild(createTag('p', null, { innerHTML: 'Cons' }));
  const cons = createTag('ul');
  framework.content.cons.forEach(con => {
    const conElmt = createTag('li', null, { innerHTML: con });
    cons.appendChild(conElmt);
  });
  content.appendChild(cons);

  // --- Footer
  const footer = createTag('div', 'card-footer');
  // Demo
  footer.appendChild(
    createTag('a', 'card-footer-item', {
      href: framework.footer.demo,
      innerHTML: 'Demo'
    })
  );
  footer.appendChild(
    createTag('a', 'card-footer-item', {
      href: framework.footer.docs,
      innerHTML: 'Documentation'
    })
  );

  // generate card
  const card = createTag('div', 'card');
  card.appendChild(header);
  card.appendChild(content);
  card.appendChild(footer);

  return card;
};

/**
 * Render each defined frameworks
 */
const renderAllFrameworks = () => {
  for (let i = 0; i < frameworks.length; i++) {
    const fw = renderFramework(frameworks[i]);

    const placeholder = document.querySelector(
      '#content > .columns:last-child'
    );
    // Bulma specific
    const container = document.createElement('div');
    container.classList.add('column');
    container.appendChild(fw);

    placeholder.appendChild(container);
  }
};

window.onload = () => renderAllFrameworks();
