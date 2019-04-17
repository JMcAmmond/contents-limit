import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import './scss/index.scss';


const middleware = [thunkMiddleware];

/**
 * Only apply logger middleware if not in production
 */
if(process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger();
    middleware.push(loggerMiddleware);
}

/**
 * Configure redux store
 */
function configureStore(initialState) {
    const enhancer = compose( applyMiddleware( ...middleware ) );

    return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
