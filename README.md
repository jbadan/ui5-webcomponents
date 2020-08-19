![UI5 icon](/docs/images/UI5_logo_wide.png)

# UI5 Web Components

[![Travis CI Build Status](https://travis-ci.org/SAP/ui5-webcomponents.svg?branch=master)](https://travis-ci.org/SAP/ui5-webcomponents)
[![npm Package Version](https://badge.fury.io/js/%40ui5%2Fwebcomponents.svg)](https://www.npmjs.com/package/@ui5/webcomponents)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/ui5-webcomponents)](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents)

The UI5 Web Components are the new offering of [UI5](https://openui5.org/) to provide a set of reusable UI elements to you which can be used for your static web sites or for web application using any web framework of your choice with a minimalistic footprint. They allow you to create a consistent user experience aligned to the [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/) and incorporate the Fiori 3 design.

## What are Web Components?

Web Components are a set of features which allow to enhance the HTML vocabulary with custom HTML elements when the standard HTML elements are not sufficient (for example, a Button with an icon or a DatePicker). The custom HTML elements allow to share those features and qualities in a standard way. The complexity of HTML, CSS and components behavior is encapsulated behind a custom HTML element. The interaction with the custom HTML elements is done using the standard DOM API.

## What is UI5/OpenUI5?

[OpenUI5](https://openui5.org/) is a JS framework that lets you build enterprise-ready web applications, responsive to all devices, running on almost any browser of your choice. It's based on JavaScript, using jQuery as its foundation and follows web standards. It eases your development with a client-side HTML5 rendering library including a rich set of controls and supports data binding to different data models (JSON, XML and OData).

## Classification of UI5 Web Components

UI5 Web Components…
* …are **not built on top** of UI5, but rather lightweight and independent UI elements
* …are **not a successor** of UI5, but rather a complementary offering
* …bring the relevant **UI5 qualities and SAP Fiori UX to the HTML level**, usable with any web framework

UI5 Web Components are good for…
* …**static web sites** built without web frameworks, to just add a few interactive UI elements
* …web applications which **already use a different web framework**

UI5 remains what it is: the best choice for…
* …building complete **enterprise-ready and responsive web applications**

## Resources
- [UI5 Web Components](https://sap.github.io/ui5-webcomponents)
- [UI5 Web Components - Playground and API Reference](https://sap.github.io/ui5-webcomponents/playground/)

## Download and Installation
To consume UI5 Web Components, first you need to install the NPM module:

```sh
npm install @ui5/webcomponents
```

...and optionally:

```sh
npm install @ui5/webcomponents-fiori
```

for some more specific Fiori UX components such as `ui5-shellbar`.


Import the desired component(s) in your app to define the UI5 Web Component.

For example, to use ```ui5-button``` you need to import it:

```js
import "@ui5/webcomponents/dist/Button.js"; // loads ui5-button
```

...similarly to use ```ui5-shellbar```:

```js
import "@ui5/webcomponents-fiori/dist/ShellBar.js"; // loads ui5-shellbar
```

Then, you can use the custom element in an HTML page:

```html
<ui5-button>Hello world!</ui5-button>
```

*Note*: For a full list of the UI5 Web Components (and the respective NPM modules that ship them), click [here](https://github.com/SAP/ui5-webcomponents/blob/master/docs/Public%20Module%20Imports.md) 

## Browser support

Currently only Chrome, Safari and Firefox support Web Components natively.

If your application should run on browsers without native Web Components support (Edge and/or IE11), import one the following modules before your first Web Component import: 

### Edge only

```js
import "@ui5/webcomponents-base/dist/features/browsersupport/Edge.js";
```

### Edge and IE11

```js
import "@ui5/webcomponents-base/dist/features/browsersupport/IE11.js";
```

*Note:* Importing the module for IE11 support automatically enables Edge support as well, so there is no need to import them both explicitly.

Example:

```js
import "@ui5/webcomponents-base/dist/features/browsersupport/IE11.js"; // This will enable Edge and IE11 support for all Web Components below
import "@ui5/webcomponents/dist/Button.js"; // loads ui5-button
import "@ui5/webcomponents/dist/Label.js"; // loads ui5-label
```

## Configure
UI5 Web Components have built-in internationalization and globalization support. Language, compact/cozy switch, date/time settings and theme can be changed with parameters.

To provide configuration settings, create a ```script``` tag having ```data-ui5-config``` and ```type="application/json"```:

```html
<script data-ui5-config type="application/json">
{
  "theme": "sap_belize",
  "language": "EN"
}
</script>

```

### Configure RTL
UI5 Web Components support right-to-left text direction (RTL). To enable RTL globally, provide the option ```rtl: true``` in the configuration ```script``` tag:

```html
<script data-ui5-config type="application/json">
{
  "language": "en",
  "rtl": true
}
</script>
```

### Configure Compact/Cozy setting
UI5 Web Components supports ```Compact``` and ```Cozy``` mode. It is set to ```Cozy``` by default. To enable ```Compact```, provide the css class ```ui5-content-density-compact``` to any of your HTML elements and it apply compact size to all of its children.

```html
  <body class="ui5-content-density-compact">
    <ui5-button></ui5-button>
    <ui5-checkbox></ui5-checkbox>
  </body>
```

### Configure Calendar Type
UI5 Web Components support different calendar types (Gregorian, Islamic, Japanese, Buddhist and Persian). To change them, provide the option ```calendarType: "Islamic"``` in the configuration ```script``` tag:

```html
<script data-ui5-config type="application/json">
{
  "calendarType": "Islamic"
}
</script>
```

## Related Projects

### UI5 Web Components for React

[UI5 Web Components for React](https://github.com/SAP/ui5-webcomponents-react) is a wrapper implementation around 
UI5 Web Components which makes using them in React even more comfortable. The current version of React (`react 16`) has some
shortcomings when it comes to handling Custom Elements, namly the binding of `boolean` attributes as well as adding event listeners to custom event names like `selection-change`. With the help of UI5 Web Components for React, you can use the UI5 Web Components in React as if they were native React components. In addition to that, this library is also offering TypeScript definitions for all components, some complex layout components built on top of UI5 Web Components as well as Charting Components.

## Develop

### Requirements
- [Yarn](https://yarnpkg.com/en)
- [Node.js](https://nodejs.org/) (**version 8.5 or higher**)

You can explore components test pages on http://localhost:8080/test-resources/pages/ for the `main` package
and  http://localhost:8081/test-resources/pages/ for the `fiori` package.

```sh
yarn # to install all dependencies
yarn start # to serve the project
```

You can start the Playground app with the following commands:

```sh
# install palyground specific dependencies (one time only)
cd packages/playground
yarn install:dependencies

# start the playground from the project root
yarn start:playground

# open http://localhost:4000/
```

## Production Build
To build the UI5 Web Components, just run the following commands:

```sh
yarn # to install all dependecies
yarn build # to build the project
```

Afterwards, you can find the static **UI5 Web Components** in the `dist` folder of the corresponding package folder.
For example, to find the Button component (that belongs to the `main` package), look inside the `packages/main/dist` folder.

## FAQ
### What's the thing with Yarn?
In a couple of guides we refer to the [Yarn](https://yarnpkg.com/) node package manager. This is because it offers functionality that the otherwise preferred [npm](https://www.npmjs.com/) package manager is currently lacking. Namely, the [workspace](https://yarnpkg.com/lang/en/docs/workspaces/) setting which is currently used in the [OpenUI5 (mono-)repository](https://github.com/SAP/openui5). Note that npm [might add](https://github.com/npm/npm/pull/15900#issuecomment-315335381) this feature in the future.

Keep in mind that linking the same module with npm and Yarn may cause issues. Also, Yarn can't work with links created by npm and vice versa.

### Where are the npm packages?
- [UI5 Web Components](https://www.npmjs.com/package/@ui5/webcomponents)
- [UI5 Web Components Fiori](https://www.npmjs.com/package/@ui5/webcomponents-fiori)
- [UI5 Web Components Icons](https://www.npmjs.com/package/@ui5/webcomponents-icons)
- [UI5 Web Components Base](https://www.npmjs.com/package/@ui5/webcomponents-base)
- [UI5 Web Components Theme Base](https://www.npmjs.com/package/@ui5/webcomponents-theme-base)
- [UI5 Web Components Localization](https://www.npmjs.com/package/@ui5/webcomponents-localization)

## Limitations
None as of 1.0.0-rc.5 

## Known Issues
No major bugs known.

## Support
We welcome all comments, suggestions, questions, and bug reports. Please follow our [Support Guidelines](/SUPPORT.md#-content) on how to report an issue, or chat with us in the `#webcomponents` channel of the [OpenUI5 Community Slack](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/).

## Contribute
Please check our [Contribution Guidelines](/CONTRIBUTING.md).
