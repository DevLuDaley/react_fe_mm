import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer'
import recipesReducer from './recipesReducer'


export default combineReducers({
    mealsReducer,
    recipesReducer
});
export const initialRootState = {meals:[], recipes:[]};