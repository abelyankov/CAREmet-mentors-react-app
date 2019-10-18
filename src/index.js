import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers'


ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
