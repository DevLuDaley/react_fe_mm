import React, { Fragment, useState, useEffect } from 'react';
// import UpdateRecipeForm from '../forms/UpdateRecipeForm'
import Recipe from './Recipe'

const UpdateRecipePage = (props) => {
    var [state, setState] = useState([])
    // var [name, setName] = useState()
        useEffect(() => {
                setState(props.recipes);
            }, [props.recipes]);

    if (props.recipes) {
    // const [state, setState] = useState([])
        // useEffect(() => {
                // setState(props.recipes);
            // }, [props.recipes]);

    var recipeId = parseInt(window.location.href.replace("http://localhost:3001/recipes/", ""))
    // var recipeId = props.match.params.id

    // var recipe = props.recipes.filter(recipe => recipe.id == recipeId
    var recipe = props.recipes.find(recipe => recipe.id == recipeId)
    // var recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]
        // [0]

    // const [recipe, setRecipe] = useState(state.recipes[recipeId])
    // var [name, setName] = useState()
    // var [category, setCategory] = useState()
    // var [url, setUrl] = useState()
    // const recipes = props.recipes

    var recipeInfo = (        
    <div>
    </div>
    

    )

    // useEffect(() => {
                // setRecipe(state.recipes.find(recipe => recipe.id == recipeId));
            // }, [props.recipes]);

    // console.log('🚀 ~ file: RecipeEdit.js ~ line 9 ~ RecipeEdit ~ id', recipeId);

    // console.log('🚀 ~ file: RecipeEdit.js ~ line 12 ~ RecipeEdit ~ props.recipes', props.recipes);
    // var recipe = props.recipes.find(recipe => recipe.id == recipeId)
    // console.log('🚀 ~ file: RecipeEdit.js ~ line 8 ~ RecipeEdit ~ recipe', recipe);
    // console.log('🚀 ~ file: RecipeEdit.js ~ line 18 ~ RecipeEdit ~ recipes', recipes);
    // console.log('🚀 ~ file: RecipeEdit.js ~ line 18 ~ RecipeEdit ~ state', state);
    }
    var handleEdit = () => {

    }
return(
    <Fragment>
    <h3>
    UpdateRecipePage
    </h3>

        {/* <UpdateRecipeForm recipes={props.recipes} recipe={recipe}/> */}
        {/* {state ? <section>{recipeInfo}</section> : <h1>No Recipe Loaded. Check context.</h1>} */}
        {/* <Recipe recipes={props.recipes} recipe={recipe}/> */}
    </Fragment>
)
}

export default UpdateRecipePage;