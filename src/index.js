import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux"
import initStore from './store/reducers/initStore'
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app'
import firebaseConfig from './config/firebase'

const store = initStore()

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}></ReactReduxFirebaseProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
