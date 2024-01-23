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

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAdMzoc_06eIOCskvrd7KOPdCdnxH_65lY",
//   authDomain: "learnlingo-15f6e.firebaseapp.com",
//   databaseURL: "https://learnlingo-15f6e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "learnlingo-15f6e",
//   storageBucket: "learnlingo-15f6e.appspot.com",
//   messagingSenderId: "2642631436",
//   appId: "1:2642631436:web:fbfe5a992c2497eab2c729",
//   measurementId: "G-L4S0Q5Z8CE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/LearnLingo">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);