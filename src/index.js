import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {Route,Switch} from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

const history = createBrowserHistory();
const store = createStore(
  reducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history),thunk))
);
ReactDOM.render(
  <Provider store ={store}>
     <ConnectedRouter history={history}>
       <Switch>
        <Route path="/" exact component={App} />
       </Switch>
     </ConnectedRouter>
   </Provider>,
   document.getElementById('root')
);
serviceWorker.unregister();
