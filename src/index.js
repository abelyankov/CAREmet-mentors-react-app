import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from './App';
import firebase from 'firebase';
// setup fake backend
import { configureFakeBackend } from './helpers';
import {config} from "./firebase/FireBaseConnectr";
configureFakeBackend();

firebase.initializeApp(config);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);