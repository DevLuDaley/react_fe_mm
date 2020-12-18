import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
// import Recipe from '../components/Recipe'
import deleteRecipe from '../actions/deleteRecipe'


const RecipesList = (props)  => {
    // const getCurrentRecipe = () => {
    //     props && props.recipes.filter(recipe => 
    //     {
    //         // var currentRecipe
    //         if (recipe.id == props.match.params.id);
    //         const currentRecipe = recipe
    //         console.log('🚀 ~ file: Recipe.js ~ line 100 ~ getRecipeByID ~ recipe', recipe);
    //         console.log('🚀 ~ file: Recipe.js ~ line 106 ~ getRecipeByID ~ currentRecipe', currentRecipe);
    //         return( 
    //         <p>
    //             currentRecipe
    //             {/* {currentRecipe} */}
    //         </p>
    //         )
    //     }
    //     )
    // }
            // handleDelete = clicked => deleteRecipe(clicked.target.id)
        // debugger 
        //  e.preventDefault()
        // ! why does this make the api go haywire?
        //  {deleteRecipe(clickedId)}
        // ! direct connect to action creator
        //  deleteRecipe(clickedRecipe)
        //  ! previous method call =>>> props.delete(clickedRecipe)
        //  this.props.delete(clickedRecipe)
        //  this.props.deleteRecipe(clickedId)
        //  this.props.delete(clickedId)
    // }



    const handleDeleteRecipe = (e) => {
        if (props.recipes){
        const targetId = e.target.id.replace("btn-delete-recipe-", "")
        const clickedRecipe = props.recipes.find(recipe => recipe.id == targetId)
        props.deleteRecipe(clickedRecipe)
        }
    }
        return (
        <Fragment>
        {/* {console.log('RecipesList -> props.recipes', props.recipes)} */}
            {props.recipes && props.recipes.map(recipe =>
            <ul key={recipe.id} className='recipes-list' style={{listStyleType: 'none'}}>
                  <li key={recipe.id}>
                      <Link to={`/recipes/${recipe.id}`}>
                            {recipe.name}
                            <button>
                                {recipe ? recipe.id : null}
                            </button>
                      </Link>
                  </li>
                            <button onClick={handleDeleteRecipe} id={`btn-delete-recipe-${recipe.id}`} className='btn-delete-recipe'>
                            {/* <button onClick={deleteRecipe} id={recipe.id} className='btn-delete-recipe'> */}
                                Delete
                            </button>
            </ul>
            )
            }
        </Fragment>
        );
}

export default connect(null, {deleteRecipe}) (RecipesList);
