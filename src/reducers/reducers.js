import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './mealsReducer'
import recipesReducer from './recipesReducer'

// export default configureStore({
//     reducer:{
//     mealsReducer,
//     recipesReducer}
// });

export default combineReducers({
    mealsReducer,
    recipesReducer
});