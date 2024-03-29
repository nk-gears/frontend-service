# React Cool Starter 😎

[![Build Status](https://travis-ci.org/wellyshen/react-cool-starter.svg?branch=master)](https://travis-ci.org/wellyshen/react-cool-starter)
[![dependencies Status](https://david-dm.org/wellyshen/react-cool-starter/status.svg)](https://david-dm.org/wellyshen/react-cool-starter)
[![devDependencies Status](https://david-dm.org/wellyshen/react-cool-starter/dev-status.svg)](https://david-dm.org/wellyshen/react-cool-starter?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/wellyshen/react-cool-starter/badge.svg?branch=master)](https://coveralls.io/github/wellyshen/react-cool-starter?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wellyshen/react-cool-starter/master/LICENSE)
[![Twitter URL](https://img.shields.io/twitter/url/https/github.com/erikras/redux-form.svg?style=social)](https://twitter.com/intent/tweet?text=With%20@React-Cool-Starter,%20I%20can%20build%20my%20universal%20web%20app%20easily.%20Thanks,%20@Welly%20Shen!)

A simple but feature rich starter boilerplate for creating your own [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) app. It built on the top of [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux) and [React Router v4](https://reacttraining.com/react-router/). Includes all the hot stuff and modern web development tools such as [Webpack 4](https://webpack.js.org/), [Babel](https://babeljs.io/), [PostCSS](https://github.com/postcss/postcss-loader), [React Hot Loader 4](https://github.com/gaearon/react-hot-loader), [Jest](https://facebook.github.io/jest/), [Flow](https://flowtype.org/) and [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension). See the [**“Features”**](#features) section for other awesome features you can expect.

## Features

Really cool starter boilerplate with the most popular technologies:

- [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering with async data fetching.
- [React](https://facebook.github.io/react/) as the view.
- [React Router v4](https://reacttraining.com/react-router/) as the router.
- [Connected React Router](https://github.com/supasate/connected-react-router) to bind Redux with React Router. Refer to [doc](https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action) to see how it works.
- [Redux](https://github.com/reactjs/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation.
- [Express](https://expressjs.com/) server.
- [Webpack 4](https://webpack.js.org/) for app bundling.
- [Babel](https://babeljs.io/) for ES6 and ES7 transpiling.
- [React Hot Loader 4](https://github.com/gaearon/react-hot-loader) to tweak React components in real time.
- [nodemon](https://nodemon.io/) to monitor for any changes in your node.js application and automatically restart the server.
- [axios](https://github.com/mzabriskie/axios) for universal data fetching/rehydration on the client.
- [redux-thunk](https://github.com/gaearon/redux-thunk) as the middleware to deal with asynchronous action.
- [react-helmet](https://github.com/nfl/react-helmet) to manage title, meta, styles and scripts tags on both server and client.
- [loadable-component](https://github.com/smooth-code/loadable-components) to lazy load component when needed in app. Reduce your bundle size without stress.
- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) serves the files emitted from webpack over the Express server.
- [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) allows you to add hot reloading into the Express server.
- [css-modules-require-hook](https://github.com/css-modules/css-modules-require-hook) compiles CSS Modules in runtime for SSR.
- [asset-require-hook](https://github.com/aribouius/asset-require-hook) allows your assets files required during runtime for SSR.
- [assets-webpack-plugin](https://github.com/kossnocorp/assets-webpack-plugin#why-is-this-useful) generates assets with hash so you can use them for SSR.
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) creates a visualize size of webpack output files with an interactive zoomable treemap.
- [morgan](https://github.com/expressjs/morgan) the HTTP request logger for server side debugging.
- [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for next generation developer experience.
- [ESLint](http://eslint.org/) to maintain a consistent javascript code style (With Airbnb configuration).
- [StyleLint](http://stylelint.io/) to maintain a consistent css/scss code style.
- [Prettier](https://prettier.io/) to format javascript and css/scss code.
- CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer, cssnext etc.). [CSS modules](https://github.com/css-Modules/css-Modules) enabled.
- Image (with [imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin) for compressing images with imagemin) and Font support.
- Split vendor's libraries from client bundle.
- No other view engines, just javascript based HTML rendering component.
- Shared app config between development and production.
- 404 error page and redirect handling.
- Integrate [Jest](https://facebook.github.io/jest/) with [enzyme](https://github.com/airbnb/enzyme) as the solution for writing unit tests with code coverage support.
- [Yarn](https://yarnpkg.com/lang/en/) as the package manager.

## Requirements

- [node](https://nodejs.org/en/) >= 10.0
- [npm](https://www.npmjs.com/) >= 6.0

## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```bash
git clone https://github.com/wellyshen/react-cool-starter.git
cd react-cool-starter
```

**2. Install all of the dependencies:**

```bash
yarn install
```

**3. To start the development server:**

```bash
yarn install
yarn dev
```
Now the app should be running at [http://localhost:3000/](http://localhost:3000/)

**4. To run production build:**

```bash
yarn build  # Building bundle
yarn start  # Running production server
```

Now the app should be running at [http://localhost:8080/](http://localhost:8080/)

> Note: You can change the port that you want from `./package.json`.

## NPM Script Commands

I use [better-npm-run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of cross-platform. All of the scripts are listed as following:

| `yarn <script>`        | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| `dev`                  | Run your app on the development server at `localhost:3000`. HMR will be enabled. |
| `start`                | Run your app on the production server only at `localhost:8080`.                  |
| `build`                | Remove the previous bundled files and bundle it to `./public/assets`.            |
| `analyze`              | Visualize the contents of all your bundles.                                      |
| `lint`                 | Lint all `.js` and `.scss` files.                                                |
| `lint:js`              | Lint all `.js` files (With `--fix` to auto fix eslint errors).                   |
| `lint:style`           | Lint all `.scss` files (With `--fix` to auto fix stylelint errors).              |
| `test`                 | Run testing once (with code coverage reports).                                   |
| `test:watch`           | Run testing on every test file change.                                           |
| `test:update-snapshot` | Update jest snapshot.                                                            |
| `clean`                | Remove the client/server bundled stuff and the coverage report.                  |
| `clean:build`          | Remove the `./public/assets` folder to clean the client bundled files.           |
| `clean:test`           | Remove the `./coverage` folder to clean the code coverage report.                |
| `docker`               | Build then run docker.                                                           |
| `docker:build`         | Build docker.                                                                    |
| `docker:start`         | Run docker.                                                                      |

## App Structure

Here is the structure of the app, which serves as generally accepted guidelines and patterns for building scalable apps.

```
.
├── public                          # Express server static path/Webpack bundled output
│   └── favicon.ico                 # Favicon is placed in the same path with the main HTML page
├── src                             # App source code
│   ├── config                      # App configuration settings
│   │   ├── default.js              # Default settings
│   │   ├── index.js                # Configuration entry point
│   │   └── prod.js                 # Production settings (overrides the default settings)
│   ├── components                  # Reusable components (including scss/testing files)
│   ├── pages                       # Page components (including scss/testing files)
│   ├── app                         # App root component (including scss/testing files)
│   ├── actions                     # Redux actions (including testing files)
│   ├── reducers                    # Redux reducers (including testing files)
│   ├── utils                       # App-wide utils (e.g. configure Redux store, HTML template etc.)
│   ├── theme                       # App-wide style and vendor CSS framework
│   ├── types                       # Flow types for reducer, action, state, store
│   ├── client.js                   # App bootstrap and rendering (webpack entry)
│   ├── routes.js                   # Routes configuration for both client and server side
│   └── server.js                   # Express server (with webpack dev/hot middlewares)
├── tools                           # Project related configurations (testing/build etc.)
│   ├── jest                        # Jest CSS modules and assets mocks settings
│   ├── webpack                     # Webpack settings
│   │   ├── config.babel.js         # Webpack configuration
│   │   └── hooks.js                # Assets require hooks
├── index.js                        # App entry point
└── postcss.config.js               # PostCSS configuration
```

## Server-Side Security and Performance

Concerning the security and performance of Express in production, I already setup some middleware for you:

- [helmet](https://github.com/helmetjs/helmet) - Helps secure Express server with various HTTP headers.
- [hpp](https://github.com/analog-nico/hpp) - Express middleware to protect against HTTP Parameter Pollution attacks.
- [compression](https://github.com/expressjs/compression) - Gzip compression support for speeding up Express server responses.

> Note: It's just a basic protected mechanism for your app, you can see the [security best practices](https://expressjs.com/en/advanced/best-practice-security.html) for more advanced configuration.

## Setup Redux DevTools Extension

The [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) let us wire up our Redux app to a time-traveling debugger. It's enabled in development only. You can follow these installation guides to use it:

**For Chrome**

- from [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd);
- or build it with `npm i && npm run build:extension` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./build/extension`;
- or run it in dev mode with `npm i && npm start` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./dev`.

**For Firefox**

- from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/remotedev/);
- or build it with `npm i && npm run build:firefox` and [load the extension's folder](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) `./build/firefox` (just select a file from inside the dir).

**For Electron**

- just specify `REDUX_DEVTOOLS` in [`electron-devtools-installer`](https://github.com/GPMDP/electron-devtools-installer).

**For other browsers and non-browser environment**

- use [`remote-redux-devtools`](https://github.com/zalmoxisus/remote-redux-devtools).

## Overview

### Stateless Functional Components

[React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) introduced a simpler way to define components called [stateless functional components](https://facebook.github.io/react/docs/components-and-props.html). These components are written in plain javascript functions. In the starter boilerplate I use it wherever possible.

### Adding Routes

This starter use [React Router v4](https://reacttraining.com/react-router/) library to manage our routes. For the purpose of SSR with data pre-fetched, I put the routes in a centralized [Route Config](https://reacttraining.com/react-router/web/example/route-config). You can setup your routes in `./src/routes.js`. For example:

```js
import RouteComponent from "./pages/RouteComponent";

// ...

export default [
  {
    // Define your route path
    path: "/TopPath",
    // If the route matches the location.pathname exactly or not (used for index route usually)
    exact: true,
    // Add your route component here
    component: RouteComponent,
    // Add your sub route component here
    routes: [
      {
        path: "/TopPath/SubPath",
        component: SubRouteComponent
      }
    ]
    // ...
  }
  // Setup other route components...
];
```

### Data Fetching from Server-side

Just write Redux actions and stores as normal (read the [Redux](https://redux.js.org/) docs if you are new). The starter using [axios](https://github.com/mzabriskie/axios) as the data fetcher, it's quite simple and easy to use. If the action creator is asynchronous then it will return a Promise (or a Promise.all) in the inner function.

Register the action(s) in `./src/routes.js`, which have to be called from server-sdie:

```js
// ...

export default [
  {
    path: "/TopPath",
    exact: true,
    component: RouteComponent,
    // Actions in the loadData function will be fetched from server-side
    loadData: () => [
      myReduxAction()
      // Add other pre-fetched actions here
    ]
  }
  // ...
];
```

The action(s) will be dispatched through `./src/server.js` on server-side:

```js
// ...

app.get("*", (req, res) => {
  // ...

  // Here's the method for loading data from server-side
  const loadBranchData = (): Promise<any> => {
    const branch = matchRoutes(routes, req.path);

    const promises = branch.map(({ route, match }) => {
      if (route.loadData) {
        return Promise.all(
          route
            .loadData({ params: match.params, getState: store.getState })
            .map(item => store.dispatch(item))
        );
      }

      return Promise.resolve(null);
    });

    return Promise.all(promises);
  };

  // ...
});

// ...
```

On client-side, don't forget to invoke the action(s) in `componentDidMount`. This ensures that if the component is reached on the client, then the same actions will be invoked. It's up to the action(s) to figure out if fetches for data need to be made or not:

```js
componentDidMount() {
  // Invoke your redux action(s) for client rendering
  this.props.myReduxAction();
}
```

### Code Splitting

One great feature of the web is that you don’t have to make your visitors download the entire app before they can use it. You can think of code splitting as incrementally downloading the app. It divides your code into small pieces called “chunks” to reduce the size of bundle loaded by user. Reducing the size of a chunk makes it load and run faster.

To accomplish this, I integrate [loadable-components](https://github.com/smooth-code/loadable-components) into this starter. The reason I choose the library is because of its design philosophy of SSR. It works seamless with the starter rather than others. Let’s see how we split our app by route:

I use the following folder/file structure:

```
 |- pages
    |- AsyncRouteComponent
       |- index.js            // Wrap the route component as async component
       |- RouteComponent.js   // The route component
```

The `index.js` will be:

```js
import loadable from "loadable-components";

import { Error, Loading } from "../../components";

export default loadable(
  () => import("./AsyncRouteComponent"), // Import your async route component here
  {
    ErrorComponent: Error, // Error component for displaying error message
    LoadingComponent: Loading // Loading component will be displayed when the component is being loaded
  }
);
```

Then you can [setup](#adding-routes) the route as usual.

> Note: I just show a general case route-based splitting, however you can even split your app by component-based depends on your need. For more advanced configuration you can refer to the [docs](https://github.com/smooth-code/loadable-components) of loadable-components.

### Managing Title, Meta, Styles and Scripts

The `./src/app/index.js` (app root component) defines the base title and meta in a `<Helmet {...config.app} />` component. Any sub-component can override/add properties (supports meta, link, script, style tags and html attributes). See the [react-helmet](https://github.com/nfl/react-helmet) documents for more info.

### App config

You can store app settings under `./src/config`. By default the `default.js` will be loaded. If the `process.env.NODE_ENV` matches to production, the `prod.js` will be used instead, and it inherits the data info from `default.js`.

You can access the correct config with:

```js
import config from "./config";
```

### Styles

The starter supports CSS, SASS and [CSS modules](https://github.com/css-Modules/css-Modules) is enabled by default. I use [PostCSS](https://github.com/postcss/postcss-loader) plugin to parse CSS and add autoprefixer to your stylesheet. You can access your stylesheet with two ways.

With CSS modules:

```js
import styles from './styles.scss';

// ...

render() {
  return (
    <div className={styles.myClass}>   // The className matches one of CSS classes in your SCSS file
      <Helmet title="Home" />
      {this.renderUserList()}
    </div>
  );
}
```

Without CSS modules (you need to turn off CSS modules from `./tools/webpack/config.babel.js`):

```js
import './styles.scss';

// ...

render() {
  return (
    <div className="myClass">    // Use the CSS class as normal
      <Helmet title="Home" />
      {this.renderUserList()}
    </div>
  );
}
```

By the way, if you want to use vendor CSS frameworks or global styles, just import it through the `./src/app/index.js` file (app root component). For example:

```js
import "../../theme/normalize.css"; // Import a vendor stylesheet here
import styles from "./styles.scss"; // Import your based stylesheet here

// ...

export default routes => {
  // ...
};
```

### Image and Font

It's super easy to render the image and font both on client and server, the usage would be like below.

Using image:

```js
// Require an image
<img src={require("./assets/logo.svg")} alt="Logo" role="presentation" />
```

Using font-awesome:

```js
// With CSS modules
import styles from "./styles.scss";

// ...

return (
  <div>
    <div>
      <i className={styles.iconUser} /> Welly
    </div>
  </div>
);

// Without CSS modules
import "./font-awesome.css";

// ...

return (
  <div>
    <div>
      <i className="fa fa-user" /> Welly
    </div>
  </div>
);
```

For using CSS modules, you have to set the proper font path in your scss/sass file:

```
$fa-font-path:"../node_modules/font-awesome/fonts";
@import "../node_modules/font-awesome/scss/font-awesome";
.icon-user {
  @extend .fa;
  @extend .fa-user;
}
```

### Boost App Performance by Shallow Compare

If your React component's render() function renders the same result given the same props and state, you can use [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) for a performance boost.

React.PureComponent is exactly like React.Component but implements `shouldComponentUpdate()` with a shallow prop and state comparison. See the [Optimizing Performance](https://facebook.github.io/react/docs/optimizing-performance.html#examples) topic for more info.

How we implemented the optimizing:

```js
import React, { PureComponent } from "react";

// ...

class Home extends PureComponent {
  // Use PureComponent instead of Component
  // ...
}
```

### JavaScript and Style Lint

[ESLint](http://eslint.org/) (With Airbnb configuration), [StyleLint](http://stylelint.io/), [Prettier](https://prettier.io/) and [lint-staged](https://github.com/okonet/lint-staged) are integrated into this starter to maintain a consistent javascript and style code style and give you a elegant code formatting. You can configure your lint rules through `./package.json` file.

### Unit Tests

This starter use [Jest](https://facebook.github.io/jest/) as the testing engine. It runs in a Node environment, so you won't have access to the DOM. In addition, Jest support the feature of [snapshot testing](http://facebook.github.io/jest/docs/snapshot-testing.html#content), which is very powerful for testing React component. Give it a try, you'll be impressed.

I also use [enzyme](https://github.com/airbnb/enzyme) as the testing utility for React, which makes it easier to assert, manipulate, and traverse your React Components' output. The unit tests focus on three parts as below:

- React Components
- Actions
- Reducers

By the way, Jest built-in code coverage reports, the report files are generated in `./coverage` folder. You can configure `./package.json` to define which files that you want to cover. For example:

```
{
  // ...

  "jest": {
    "collectCoverageFrom": [
      "src/pages/**/*.js",        // Define the files, which want to be covered
      "src/components/**/*.js",
      "!src/pages/index.js"       // The files will be ignored by code coverage
    ],
    // Other configurations
  },

  // ...
}
```

You can also use [istanbul's ignore hints](https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes) to specify specific lines of code in a javascript file to skip code coverage.

## Troubleshooting

- If you encounter the markup mismatches error (it's a react universal issue, which usually occurs due to the non-synchronized rendering result between client and server), you can do:

  - Restart the server to solve it.
  - Or for v16.1.0 up, you can use `suppressHydrationWarning` attribute for intentional client/server text mismatches ([#11126](https://github.com/facebook/react/pull/11126)).

- If you run the starter through a cloud computing service such as AWS EC2 instance etc. and you encounter an `UnhandledPromiseRejectionWarning` like this [issue](https://github.com/wellyshen/react-cool-starter/issues/76). It might caused by the "openBrowser" tool. You can solve the issue like following.

In the `./package.json` script:

```
// ...

"start:prod": {
  "command": "node ./index.js",
  "env": {
    "NODE_PATH": "./src",
    "NODE_ENV": "production",
    "PORT": 8080,
    "BROWSER": "none"   // Add this node variable to turn off the function of open browser automatically
  }
},

// ...
```

- If you are on windows and encounter the following error: Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style. The following rule must be added to `./package.json`.

```
"linebreak-style": 0
```

So it will look like:

```
// ...
 "rules": {
      "linebreak-style": 0,
      "global-require": 0,
// ...
```

## To Do...

There's a features (updates) which will be included in this starter in the near future:

- [ ] Code splitting for reducers.
