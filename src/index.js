import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {console.log(`%cTRY HACKING IT YOU CAN'T`, 'font-size: 20px; font-weight: bold; color:orange;')}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);