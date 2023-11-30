# What is WebElement?
WebElement is website creator web tool in which each section developers can insert their specific part of the web component Code like Navigation section, Hero Section, Footer Section etc. to create a complete website. 

# Steps to run WebElement
1. Download the both backend and the Frontend Code.
2. npm Install
3. npm Start
4. Hit `[http://localhost:3000]/uploadCode` to upload code
5. Start Testing The Design Section `[http://localhost:3000]/design`
6. Draw Section is still need lots of maintainence Do not Open

# Code OverThrough
Creating documentation for your code involves explaining how to use and understand your codebase. You can include sections such as installation, usage, API reference, examples, and more. Below is a template for documenting your React component:

```markdown
# Designs Component Documentation

The `Designs` component is a React component that provides a user interface for choosing and displaying web design elements. It integrates with Redux for state management and includes features such as code editing, design selection, and hosting identification.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Redux State](#redux-state)
- [Component Structure](#component-structure)
- [Dependencies](#dependencies)

## Installation

To use the `Designs` component in your React project, follow these steps:

1. Install the required packages:

   ```bash
   npm install react react-dom react-icons redux react-redux
   ```

2. Import the `Designs` component in your file:

   ```jsx
   import Designs from './path/to/Designs';
   ```

3. Use the `Designs` component in your JSX:

   ```jsx
   <Designs />
   ```

## Usage

The `Designs` component provides a user interface for choosing and displaying web design elements. It integrates with Redux for state management and includes the following features:

- Web element selection
- Design section selection (e.g., Navigation, Hero, Body, Footer, Complete Website)
- Design page selection (e.g., Home, About, Contact, Login)
- Code extraction and display
- Code editing and saving
- Hosting identification

Here is an example of how to use the component in your React application:

```jsx
import React from 'react';
import Designs from './path/to/Designs';

function App() {
  return (
    <div>
      <h1>Your App Title</h1>
      <Designs />
    </div>
  );
}

export default App;
```

## Redux State

The `Designs` component uses Redux for state management. It interacts with the following slices of the Redux store:

- `setNamePannel`: Manages the display state of the name panel.
- `pages`: Manages the selected pages.
- `codes`: Manages the selected codes.

Ensure that your Redux store is properly configured with these slices.

## Component Structure

The `Designs` component is structured as follows:

- Web element selection panel
- Design section panel
- Design page selection
- Code extraction and display section
- Redux state management
- Event handling for code editing and saving
- Popup element functionality

Feel free to explore the component file for more details.

## Dependencies

The `Designs` component relies on the following external dependencies:

- `react`: React library for building user interfaces.
- `redux`: State management library for React applications.
- `react-redux`: Official React bindings for Redux.
- `react-icons`: Icon library for React components.

Make sure to install and configure these dependencies in your project.

---

Feel free to customize and expand this documentation based on the specific details of your `Designs` component and its functionalities.
<!-- `[http://localhost:3000]/design`
1. when an user click on the use button to overview those design those content will be directly store in the `react-redux` for the central state management.

2. We use dynamic `inline styling` eg:- when clicked on `font-size: 32px` then inline scripting will be applied.

3. Complete Website:
We also have a feature of complete website to when user upload code with `<img />` in html it will automatically detect the all the html element and replace those tag with `<input type="file">` tag

4. Link wont apply on the text customization section.  -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
