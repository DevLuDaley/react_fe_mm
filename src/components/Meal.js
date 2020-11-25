import React, { Fragment } from 'react'
import {Redirect} from 'react-router-dom'
// import NewMealRecipeForm from '../components/NewMealRecipeForm'

const Meal = (props) => {
    // console.log('props here =>',props.meal.id);
    // console.log(`props`, props.id);
    // let meal = props.meals[props.match.params.id -1]
    if (props.meals) {

        var meal = props.meals.filter(meal => meal.id == props.match.params.id)[0]
    }

    // console.log(`CONSOLED PROPS from MEAL.JS`, props.meals);
    return( 
        <Fragment>
        <li className='meal-li' key={props.meal} style={{listStyleType: 'none'}}>
        {/* {meal ? null : <Redirect to='/meals'/>} */}

            <h1>
            {/* {meal.name} */}
            {meal ? meal.name : null}

            </h1>
            <p>
            {meal.category}
            {meal.url}
            {meal.image_url}
            {meal.cooking_time}
            </p>
            <h3 className='recipes-list'>Recipes List
            {/* <button>
                {meal.recipes ? meal.recipes.length : null}
            </button> */}
            </h3>
            
            {/* {meal ? meal.recipes.map(recipe => <h5 key={recipe.id}>{recipe.name} Category: {recipe.category} Url: {recipe.url}      </h5>) : null
            } */}
        </li>
        
   {/* <NewMealRecipeForm meal={meal} /> */}
   {/* id={props.meals[props.match.params.id -1]} */}
    </Fragment>

    )
}
export default Meal