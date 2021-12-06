import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { LightThemeProvider } from './common/style/ThemeProvider';
import App from './App';
import configureStore from './redux/store';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <LightThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LightThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
