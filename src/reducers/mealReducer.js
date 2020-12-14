export default function mealReducer(
      state={}, action) {
// debugger;
    switch (action.type) {
        case 'FETCH_MEALS':
            // return state
            console.log('action.payload', action.payload);
            return {meals: action.payload}

        case 'ADD_MEAL':
            let mealId = action.payload.id
            let newMeal = action.payload
            // ! add new meal to list of meals
            // console.log('mealReducer -> state.meals 2', state.meals);
                return {...state.meals, meals: state.meals.concat(newMeal)}

        case 'UPDATE_MEAL':
            const payload = action.payload
            const payloadId = action.payload.id
            var currentMeal = state.meals.find(meal => meal.id == payloadId)
            currentMeal = payload
            const currentMeals = [...state.meals]
            const updatedMeals = currentMeals[payloadId] = currentMeal
            console.log('🚀 ~ file: mealReducer.js ~ line 30 ~ currentMeal', currentMeal);
            console.log('🚀 ~ file: mealReducer.js ~ line 28 ~ state.meals  PART 1', state.meals);
            console.log('🚀 ~ file: mealReducer.js ~ line 31 ~ action.payload', action.payload);
            console.log('🚀 ~ file: mealReducer.js ~ line 33 ~ state.meals PART 2', state.meals);

                return Object.assign({}, state, {meals: [currentMeals, updatedMeals]}
      )

        case 'DELETE_MEAL':
            const filteredMeals = state.meals.filter(meal => meal.id !== action.payload.id);
            console.log('🚀 ~ file: mealReducer.js ~ line 34 ~ filteredMeals', filteredMeals);
            return {...state, meals: filteredMeals}

        case 'ADD_MEAL_RECIPE':
            
            let mealDrills =  state.meals.map(meal => {
                if (meal.id == action.payload.id) {
                    return action.payload
                    } else {
                        return meal
                    }
                  }
                )
            return {...state, meals: mealDrills}

        default:
            // console.log('accountReducer -> state', state);
            return state
    }

}
