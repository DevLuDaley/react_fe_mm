export const deleteRecipe = (recipeData) => {
console.log('🚀 ~ file: deleteRecipe.js ~ line 2 ~ deleteRecipe ~ recipeData', recipeData);
    const baseUrl = 'http://localhost:3000/api/v1/recipes/'
    const deleteRecipeUrl = (baseUrl + recipeData.id)
    // console.log('🚀 ~ file: deleteRecipe.js ~ line 3 ~ deleteRecipe ~ baseUrl', baseUrl);
    // console.log('🚀 ~ file: deleteRecipe.js ~ line 5 ~ deleteRecipe ~ recipeUrl', recipeUrl);
    // console.log('🚀 ~ file: deleteRecipe.js ~ line 7 ~ deleteRecipe ~ data.id', recipeData.id);
    // console.log('🚀 ~ file: deleteRecipe.js ~ line 8 ~ return ~ data', recipeData);
    return (dispatch) => {
        fetch(deleteRecipeUrl, { 
                method: 'DELETE'
    })
        .then(response => response.json())
        .then(recipeId => dispatch({type: 'DELETE_RECIPE', payload: recipeId}))
    }
};

export default deleteRecipe;