import React, { Fragment, useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import UpdateMealForm from '../forms/UpdateMealForm'

// import NewMealRecipeForm from '../components/NewMealRecipeForm'

const Meal = (props) => {

    var [name, setName] = useState()
    var [id, setId] = useState(props.id)
    var [category, setCategory] = useState()
    var [url, setUrl] = useState()

    useEffect(() => {
                setName(props.name);
            }, [props.name]);
            

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
        const handleEdit = () => {
            // `/meals/${id}/edit`
        }
        // console.log('Meal -> meal.id', meal.id);
        var mealInfo =( 
                        <div>
                    <h1> {meal.name} 
                    </h1>
                        <ul key={meal.id} style={{listStyleType: 'none' }} contentEditable="false">
                                ID: <li contentEditable="false">{meal.id}</li>
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
            )

        var mealInfo2 =( 
                        <div>
                    <h1> {meal.name} 
                    </h1>
                        <form key={meal.id}>
                                ID: <p>{meal.id}</p>
                                Category: <p>{meal.category}</p>
                                Url: <p>{meal.url}</p>
                                Image Url:<p>{meal.image_url}</p>
                                Cooking Time<p>{meal.cooking_time} minutes </p>
                        </form>
                        <button onClick={handleEdit}>Edit</button>

                    <h3 className='recipes-list'>Recipes List
                    {/* <button>
                        {meal.recipes ? meal.recipes.length : null}
                    </button> */}
                    </h3>
                </div>
            )

        var mealInfo1 =( 
                <div>
                    <h1> 
                        {meal.name} 
                        <button a href={`http://localhost:3001/meals/${id}/edit`}>Edit Meal</button>
                    </h1>
                    <ul id='update-meal-form' onSubmit={console.log("SUBMITTED")}>
                        ID: <p>{meal.id}</p>
                        Category: <p>{meal.category}</p>
                        Url: <p>{meal.url}</p>
                        Image Url:<p>{meal.image_url}</p>
                        Cooking Time<p>{meal.cooking_time} minutes </p>
                    </ul>
                    <h3 className='recipes-list'>Recipes List
                    {/* <button>
                        {meal.recipes ? meal.recipes.length : null}
                    </button> */}
                    </h3>
                </div>
            )
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
                {
                    meal ? mealInfo1 : <h1>No Meal Loaded. Check api connection.</h1>
                }
            </li>
        </Fragment>
    )
}
export default Meal