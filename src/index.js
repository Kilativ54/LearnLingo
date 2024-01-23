import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from '../src/redux/store';
import 'modern-normalize/modern-normalize.css';
import '../src/components/styles/loader.css';
import '../src/components/styles/variables.css';
import './styles/fonts.css';
import './index.css';
import '../src/components/styles/scroll.css';
// import './helpers/scroll';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/LearnLingo">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);