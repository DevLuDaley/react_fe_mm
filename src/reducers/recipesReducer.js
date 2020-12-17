const intialState = {recipes: []}

export default function recipesReducer(state = intialState, action) {
// debugger
    switch (action.type) {
        case 'FETCH_RECIPES':
            return {recipes: action.payload}

        case 'ADD_RECIPE':
            let newRecipe = action.payload
            return {...state.recipes, recipes: state.recipes.concat(newRecipe)}

        case 'UPDATE_RECIPE':
            const payloadId = action.payload.id
            return {recipes: state.recipes.map(recipe => recipe.id == payloadId ? action.payload : recipe)}
                // return Object.assign({}, state, {recipes: currentRecipes, recipe: currentRecipe})
        case 'DELETE_RECIPE':
            const filteredRecipes = state.recipes.filter(recipe => recipe.id !== action.payload);
            return {...state, recipes: filteredRecipes}

        // case 'ADD_RECIPE_RECIPE':
            
        //     let recipeRecipes =  state.recipes.map(recipe => { 
        //         if (recipe.id == action.payload.id) {
        //             return action.payload
        //             } else {
        //                 return recipe
        //             }
        //           }
        //         )
        //     return {...state, recipes: recipeRecipes}

        default:
            // return {...state}
            return state
    }

}
