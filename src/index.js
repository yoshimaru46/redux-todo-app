import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConnectedRouter from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import TodoApp from './components/TodoApp';
import Error from './components/Error';
import createStore from './store';
import { creteStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const history = createBrowserHistory();
const store = createStore(
    reducer,
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={TodoApp} />
                <Route exact path="/" component={Error} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
