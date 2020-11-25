import React, { Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import UpdateMealForm from '../forms/UpdateMealForm'
// import NewMealRecipeForm from '../components/NewMealRecipeForm'

const Meal = (props) => {
    console.log('Meal -> props.meals1', props.meals);
    // console.log('props here =>',props.meal.id);
    // console.log(`props`, props.id);
    // let meal = props.meals[props.match.params.id -1]
    console.log('Meal -> props1', props);
    // console.log('Meal -> props1', meals)
    if (props.meals) {
    console.log('Meal -> props.meals2', props.meals);

        var meal = props.meals.filter(meal => meal.id == props.match.params.id)[0]
        // [0]
        
        // console.log('Meal -> props.match.params.id)[0]', props.match.params.id[0])
        
        // console.log('Meal -> props.match.params.id', props.match.params.id);
        
        // console.log('Meal -> meal.id', meal.id);
        var mealInfo =( 
                <ul style={{listStyleType: 'none'}}>
                    Category: <li>{meal.category}</li>
                    Url: <li>{meal.url}</li>
                    Image Url:<li>{meal.image_url}</li>
                    Cooking Time<li>{meal.cooking_time} minutes </li>
                </ul>
            )
    }




    // console.log(`CONSOLED PROPS from MEAL.JS`, props.meals);
    return(
        <Fragment>
        <UpdateMealForm/>
        <li className='meal-component' key={props.meal} style={{listStyleType: 'none'}}>
        {/* {meal ? null : <Redirect to='/meals'/>} */}

            <h1>
            {meal ? meal.name : null}
            </h1>
            {mealInfo ? mealInfo : null} 
            {/* {meal.name} */}
            
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