[![Build Status](https://travis-ci.com/Al-un/css.svg?branch=master)](https://travis-ci.com/Al-un/css)

# CSS Tournament

Objective is to compare CSS frameworks about:

- Capabilities
- Usage, learning curve and stuff
- SCSS support
- Theming

Not tested:

- integration with front-end frameworks (Angular, React, Vue.js)

## Getting started

Getting the stuff loaded

```shell
# Clone this repository
git clone https://github.com/Al-un/css.git
# Move in
cd css
# Install dependencies: Yarn
yarn install
# OR with NPM:
npm install
```

Run the appropriate script and check `http://localhost:8080`. Available scripts
are:

- `yarn run bootstrap4`
- `yarn run bulma`

## Folder structure

### Non-CSS folders

Special folders are:

- `common`: code shared by all CSS framworks
- `raw`: raw HTML input to keep as reference when adding another CSS framework
- `root`: the webpage at root level

### One folder per CSS framwork

Each folder represents a given CSS framework. If a framework is tested under
multiple versions, folder name must include the version as well.

Each folder must contain:

- `app.js` as webpack entry point
- `index.html` as HTML entry point. The `main` tag must have `id="content"`
- `html` folder with following pages:
  - `data.html` tables and list stuff
  - `feedback.html` interaction with user stuff: modal, toast, alerts...
  - `form.html` form stuff

For each framework or framework+version, create a NPM script in `package.json`:

- `{framework}` script with `webpack-dev-server`
- `{framework}-build` script to build in the `dist/` folder

## Notes

**Dependencies**

Windows users may encounter problems with `node-sass` v4.7.x. Version `4.11.0` is working.

FontAwesome:
Added by `<link ... />`. NPM install encountered problems:

```scss
@import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
```

- https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers
- https://remotedevdaily.com/how-to-use-font-awesome-5-with-react/
- https://medium.com/@chanonroy/webpack-2-and-font-awesome-icon-importing-59df3364f35c

**Bootstrap**

https://getbootstrap.com/docs/4.2/getting-started/webpack/
