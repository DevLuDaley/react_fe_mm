export default function mealReducer(
      state={}, action) {
    //  state = {meals: []}, action) {
// debugger;
    switch (action.type) {
        case 'FETCH_MEALS':
            // return state
            return {meals: action.payload}
        case 'ADD_MEAL':
            let mealId = action.payload.id // + 1
            // console.log('mealReducer -> action.payload', action.payload);
            // console.log('mealReducer -> action.payload.id', action.payload.id);
            console.log('mealReducer -> mealId', mealId);
            // let newMeal = state.meals[mealId]
            let newMeal = action.payload
            // let newMeal = state.meals[9]
            console.log('mealReducer -> newMeal', newMeal);
            console.log('mealReducer -> state.meals 1', state.meals);
            
            // console.log('mealReducer -> state.meals[8]', state.meals[8]);
            // ! add new meal to list of meals
            // state.meals.concat(newMeal)
            // state.meals.push(newMeal)
            // console.log('mealReducer -> state.meals[10]', state.meals[10]);
            
            // state.meals.push(action.payload)
            // console.log('mealReducer -> newMeal AFTER PUSH', newMeal);
            console.log('mealReducer -> state.meals 2', state.meals);
            // let newLoad =  state.meals.map(meal => {
                // meal.id === action.payload.id //{
                    // return newMeal.payload
                // } else {
                    // debugger
                    // return newMeal
                // }
                // console.log('mealReducer -> meal', meal);
            // }
                // )

                // return {...state.meals, meals: state.meals}
                return {...state.meals, meals: state.meals.concat(newMeal)}
                // return {...state, meals: action.payload}
                // return {...state, meals:[...state.meals, action.payload]}
                // debugger
// console.log(action.payload);


        case 'ADD_MEAL_DRILL':
            // let mealId = [action.payload.id -1]
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