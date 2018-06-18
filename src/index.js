import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from './services/store'
import reducer from './model'

const init = () => {
    const store = createStore(reducer)
    store.dispatch({type: '@INIT'})
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    registerServiceWorker();
}

init()