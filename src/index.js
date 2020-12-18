import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import MealList from './components/MealsList'
import reportWebVitals from './reportWebVitals';
import mealsReducer from './reducers/mealsReducer'
import recipesReducer from './reducers/recipesReducer'
import rootReducer from './reducers/reducers'
import initialRootState from './reducers/reducers'
import MainContainer from './containers/MainContainer'
import MealsContainer from './containers/MealsContainer'
import RecipesContainer from './containers/RecipesContainer'

// const rootReducer = combineReducers({
//     mealsReducer,
//     recipesReducer
// })


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const myLogger = (store) => (next) => (action) => {
// console.log('🚀 ~ file: index.js ~ line 25 ~ myLogger ~ Logged Action: ', action);
  
// }
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(combineReducers({mealsReducer, recipesReducer}), {},(applyMiddleware(thunk)))

store.subscribe(() => console.log("store updated", store.getState()))

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     )
// );



// initialRootState = {meals:[], recipes:[]};
// const store = createStore(rootReducer, initialRootState, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)))
// let store = createStore(mealsReducer, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(recipesReducer, composeEnhancer(applyMiddleware(thunk)))
// let store2 = createStore([mealsReducer, recipesReducer], composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

console.log('🚀 ~ file: index.js ~ line 56 ~ store.getState()', store.getState());



// ReactDOM.render(
//   <Router><React.StrictMode><App /></React.StrictMode></Router>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Provider store={store}>
  <Router><React.StrictMode>
  <App/>
  </React.StrictMode></Router>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// store.dispatch({
//   type: 'FETCH_RECIPES',
//   text: 'Use Redux'
// })
// console.log(store.getState())

// export App = () => {
    // ONLY NOW does it make sense to try to access the store/dispatch actions
// }
// export default store;