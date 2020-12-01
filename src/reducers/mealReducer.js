export default function mealReducer(
      state={}, action) {
    //  state = {meals: []}, action) {
// debugger;
    switch (action.type) {
        case 'FETCH_MEALS':
            // return state
            console.log('action.payload', action.payload);
            return {meals: action.payload}
        case 'ADD_MEAL':
            let mealId = action.payload.id
            // console.log('mealReducer -> mealId', mealId);
            
            let newMeal = action.payload
            
            // console.log('mealReducer -> newMeal', newMeal);
            // console.log('mealReducer -> state.meals 1', state.meals);
            // ! add new meal to list of meals
            // console.log('mealReducer -> state.meals 2', state.meals);

                return {...state.meals, meals: state.meals.concat(newMeal)}
        case 'UPDATE_MEAL':
        // console.log('file: mealReducer.js ~ line 23 ~ UPDATE_MEAL');
            var editMealId = action.payload.id
            var newData = action.payload.id
            var mealToEdit = state.meals.find(meal => meal.id == editMealId)
            console.log('🚀 ~ file: mealReducer.js ~ line 31 ~ mealToEdit', mealToEdit);
            console.log('🚀 ~ file: mealReducer.js ~ line 31 ~ state.meals', state.meals);
            // if (mealToEdit !== newData) {
            // setState({ meals: state.meals });
            console.log('🚀 ~ file: mealReducer.js ~ line 24 ~ action.payload', action.payload);
            // console.log('mealReducer -> EDITmealId', editMealId);
            return {...state.meals, meals: state.meals}
            // return {...state.meals, meals: state.meals.push(mealToEdit)}
            console.log('🚀 ~ file: mealReducer.js ~ line 25 ~ state.meals', state.meals);
            console.log('🚀 ~ file: mealReducer.js ~ line 25 ~ state', state);

        case 'ADD_MEAL_RECIPE':
            
            let mealDrills =  state.meals.map(meal => {
                if (meal.id === action.payload.id) {
                    return action.payload
                    } else {
                        return meal
                    }
                  }
                )
            return {...state, meals: mealDrills}

        default:
            console.log('accountReducer -> state', state);
            return state
    }

                    // console.log('accountReducer -> ...state', [...state]);
                // console.log('accountReducer -> state', state);
                // console.log('accountReducer -> state.meal', state.meals[action.payload.id -1]);
                // console.log('accountReducer -> state.meals[mealId]', state.meals[mealId]);
                // console.log('accountReducer -> state.meals[mealId].drills', state.meals[mealId].drills);
                // console.log('accountReducer -> action.payload', action.payload);
                // return {...state, meal: [state.meals[mealId]].drills} //, action.payload]}
                // } else {
                    // return action.payload //meal
        // }

    //Meal.all.length || Meal.all.count
// return state

}

// dispatch(actionObje) 