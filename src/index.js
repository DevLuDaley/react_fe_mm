import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mealsReducer from './reducers/mealsReducer'
import recipesReducer from './reducers/recipesReducer'
import allReducers from './reducers/allReducers'

// const rootReducer = combineReducers({
//     mealsReducer,
//     recipesReducer
// })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(allReducers, composeEnhancrers(applyMiddleware(thunk)))
let store = createStore(mealsReducer, composeEnhancers(applyMiddleware(thunk)))
const store2 = createStore(recipesReducer, composeEnhancers(applyMiddleware(thunk)))
// let store2 = createStore([mealsReducer, recipesReducer], composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

console.log('🚀 ~ file: index.js ~ line 21 ~ store.getState()', store.getState());



ReactDOM.render(
  <Router>
  <React.StrictMode>
  <Provider store={store} store2={store2}>
    <App />
  </Provider>
  </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export App = () => {
    // ONLY NOW does it make sense to try to access the store/dispatch actions
// }