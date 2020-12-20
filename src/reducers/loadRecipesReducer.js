const intialState = {loadRecipes: []}

export default function loadRecipesReducer(state = intialState, action) {
// debugger
    switch (action.type) {
        case 'LOAD_RECIPES':
            // const baseQuery = action.payload["results"][0]
            const baseQuery = action.payload["results"]

        // console.log('🚀 ~ file: recipesLoadReducer.js ~ line 9 ~ recipesReducer ~ action.payload["results"][0]', baseQuery.analyzedInstructions);

        console.log('🚀 ~ line 11 ~ recipesReducer ~ baseQuery', baseQuery);
        
        // console.log('🚀 ~ line 13 ~ recipesReducer ~ baseQuery.analyzedInstructions[0].step #1 object', baseQuery.analyzedInstructions[0].steps[0]);
        //! {number: 1, step: "Crumble sausage into a large skillet. Cook over me…heat, stirring often, until meat is well browned.", ingredients: Array(2), equipment: Array(1)}

        // console.log('🚀 ~ line 15 ~ recipesReducer ~ baseQuery.analyzedInstructions[0].step #1\'s stepInstructions', baseQuery.analyzedInstructions[0].steps[0].step);

        // console.log('🚀 step #1\'s ingredients array', baseQuery.analyzedInstructions[0].steps[0].ingredients);
        
        // console.log('🚀 step #1\'s equipment array', baseQuery.analyzedInstructions[0].steps[0].equipment);

        // console.log('🚀 ~ file: recipesLoadReducer.js ~ line 17 ~ recipesReducer ~ baseQuery.title',baseQuery.title);



            // return {loadRecipes: action.payload}
            // return {...state.loadRecipes, loadRecipes: baseQuery}
            return {loadedRecipes: baseQuery}

        case 'ADD_LOADED_RECIPE':
            let newRecipe = action.payload
            return {...state.loadRecipes, loadRecipes: state.recipes.concat(newRecipe)}

        // case 'UPDATE_RECIPE':
        //     const payloadId = action.payload.id
        //     return {recipes: state.recipes.map(recipe => recipe.id == payloadId ? action.payload : recipe)}
        //         // return Object.assign({}, state, {recipes: currentRecipes, recipe: currentRecipe})
        // case 'DELETE_RECIPE':
        //     const filteredRecipes = state.recipes.filter(recipe => recipe.id !== action.payload);
        //     return {...state, recipes: filteredRecipes}

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
