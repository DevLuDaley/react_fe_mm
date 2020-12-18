import { combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './mealsReducer'
import recipesReducer from './recipesReducer'

// export default configureStore({
    //     reducer:{
        //     mealsReducer,
        //     recipesReducer}
        // });

// const reducer = {meals: mealsReducer,
//     recipes: recipesReducer}
// const rootReducer = combineReducers(reducer);

        // export default combineReducers({
        //     mealsReducer,
        //     recipesReducer
        // })

        // export const preloadedState = ({
        //     meals:[],
        //     recipes:[]
        // });


const rootReducer = combineReducers({
    mealsReducer,
    recipesReducer
})

export default rootReducer

