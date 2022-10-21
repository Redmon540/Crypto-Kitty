import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { searchKitties, requestUsers } from './reducers.js';
import './index.css';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ searchKitties, requestUsers })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
// searchKitties is the reducer. You'll want to replace this with a rootReducer

ReactDOM.render(
	<Provider store={store}>
		<App store />
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
