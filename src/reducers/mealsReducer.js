const intialState = {meals: []}

export default function mealsReducer(state = intialState, action) {
// debugger;
    switch (action.type) {
        case 'FETCH_MEALS':        // debugger;
            return {meals: action.payload}

        case 'ADD_MEAL':
            let newMeal = action.payload
            return {...state.meals, meals: state.meals.concat(newMeal)}

        case 'UPDATE_MEAL':
            const payloadId = action.payload.id
            return {meals: state.meals.map(meal => meal.id == payloadId ? action.payload : meal)}
                // return Object.assign({}, state, {meals: currentMeals, meal: currentMeal})
        case 'DELETE_MEAL':
            const filteredMeals = state.meals.filter(meal => meal.id !== action.payload);
            return {...state, meals: filteredMeals}

        // case 'ADD_MEAL_RECIPE':
            
        //     let mealRecipes =  state.meals.map(meal => {
        //         if (meal.id == action.payload.id) {
        //             return action.payload
        //             } else {
        //                 return meal
        //             }
        //           }
        //         )
        //     return {...state, meals: mealRecipes}

        default:
            // return {...state}
            return state
    }

}
