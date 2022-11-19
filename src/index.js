import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './App';

const storeVar = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeVar}>
      <App />
    </Provider>
  </React.StrictMode>,
);
