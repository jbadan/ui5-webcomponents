# Get Started with UI5 Web Components & VueJS

In this tutorial you will learn how to add UI5 Web Components to your application. The UI5 Web Components can be added both to new VueJS applications, as well as already existing ones.

## Step 1. Install Vue CLI:
```
npm install -g @vue/cli
```

## Step 2. Init New App:
```
vue create ui5-web-components-application
cd ui5-web-components-application
```

## Step 3. Add UI5 Web Components:
```
npm install @ui5/webcomponents --save
```

## Step 4. Add UI5 Web Components to Vue ignoredElement
Add the following line to your ```main.js``` file:

```js
Vue.config.ignoredElements = [/^ui5-/];
```

## Step 5. Import the Components That You Are Going to Use:
```js
import "@ui5/webcomponents/dist/Button";
```

## Step 6. Use the Imported Elements in Your Application:
```html
<ui5-button>Hello world!</ui5-button>
```

## Step 7: Launch the Application:
```
yarn serve
```