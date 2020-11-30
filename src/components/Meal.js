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
        // var mealID = {meal.id}
        // console.log('Meal -> props.match.params.id', props.match.params.id);
        
        // console.log('Meal -> meal.id', meal.id);
        // var mealInfo =( 
        //         <ul contentEditable="true" style={{listStyleType: 'none'}}>
        //             ID: <li>{meal.id}</li>
        //             Category: <li>{meal.category}</li>
        //             Url: <li>{meal.url}</li>
        //             Image Url:<li>{meal.image_url}</li>
        //             Cooking Time<li>{meal.cooking_time} minutes </li>
        //         <button onClick={handleEdit}>Edit</button>
        //         </ul>
        //     )
    }

var handleEdit = () => {
    console.log("HANDLING THE EDIT LU")
    // console.log('🚀 ~ file: Meal.js ~ line 73 ~ Meal ~ mealInfo.props', mealInfo.props.children);
}



    // console.log(`CONSOLED PROPS from MEAL.JS`, props.meals);
    return(
        <Fragment>
        Meal Component
        Meal
        <li className='meal-component' key={props.meal} style={{listStyleType: 'none'}}>
        {/* {meal ? null : <Redirect to='/meals'/>} */}
            {meal ?
                <div>
                    <h1> {meal.name} 
                    </h1>
                        <ul style={{listStyleType: 'none' }} contentEditable="true">
                                ID: <li>{meal.id}</li>
                                Category: <li>{meal.category}</li>
                                Url: <li>{meal.url}</li>
                                Image Url:<li>{meal.image_url}</li>
                                Cooking Time<li>{meal.cooking_time} minutes </li>
                        </ul>
                        <button onClick={handleEdit}>Edit</button>
            
                    <h3 className='recipes-list'>Recipes List
                    {/* <button>
                        {meal.recipes ? meal.recipes.length : null}
                    </button> */}
                    </h3>
                </div>
            : null
                }
        </li>
        </Fragment>
    )
}
export default Meal