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

Each folder represents a given CSS framework. If a framework is tested under
multiple versions, folder name must include the version as well.

Each folder must contain:

- `app.js` as webpack entry point
- `index.html` as HTML entry point

For each framework or framework+version, create a NPM script in `package.json`:

- `{framework}` script with `webpack-dev-server`
- `{framework}-build` script to build in the `dist/` folder

## Notes

**Dependencies**

Windows users may encounter problems with `node-sass` v4.7.x. Version `4.11.0` is working.

**Bootstrap**

https://getbootstrap.com/docs/4.2/getting-started/webpack/
