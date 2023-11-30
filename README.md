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

The `Designs` component provides a user interface for choosing and displaying
web design elements. It integrates with Redux for state management and includes
the following features:

- Web element selection
- Design section selection Contains major web page items like (e.g., Navigation, Hero, Body, Footer, Complete Website)
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


## Dependencies

The `Designs` component relies on the following external dependencies:

- `react`: React library for building user interfaces.
- `redux`: State management library for React applications.
- `react-redux`: Official React bindings for Redux.
- `react-icons`: Icon library for React components.

## Components
- `<HostingIdendity />` : This shows when clicked on `<button> save </button>` when designer can insert their hosting indendity (Web Site Name).
- `dangerouslySetInnerHTML={{ __html: code.codeParams.html }` : It Gives the permission to insert the insert the html code which will be comming from the backend. 
- `<PopupElement clicked={clickedHTMLElement} />` : This Gives The Popup dialog for changing the the styles like `font-family`, `font-size`, `font-width`, `font-style`.
-  `popupPositining(event, true)` : It indicated in which position the popup element should be placed when clicked on certain item

Make sure to install and configure these dependencies in your project.
- `npm install`: Install all the react library.
---

### ./hooks
- useFetch.js : currently it is capable on only using `GET` request
- POST request method is needed

### ./hooks
- useFetch.js : currently it is capable on only using `GET` request

### ./pages
- contains all the pages codes like `[http:localhost:3000/uploadCode]` 

### ./reduxFunction
- NEED TO REWORK on this page

### ./store
- contains the initialization code for redux.