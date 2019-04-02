import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

const history = createHistory({
  basename: process.env.PUBLIC_URL,
});
const store = createStore(
  reducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history),thunk))
);
ReactDOM.render(
  <Provider store ={store}>
     <ConnectedRouter history={history}>
        <App />
     </ConnectedRouter>
   </Provider>,
   document.getElementById('root')
);
serviceWorker.unregister();
