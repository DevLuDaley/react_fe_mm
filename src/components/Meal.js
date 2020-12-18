import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { connect , useSelector } from 'react-redux'
import UpdateMealForm from '../forms/UpdateMealForm'

const Meal = (props) => {
//     if (props.meals){
//     const filtered = props.meals.find((meal) => {
//         return meal.id == props.match.params.id 
//     }
//     )
//             // console.log('🚀 ~ file: Meal.js ~ line 35 ~ Meal ~ filtered', filtered);
    
//     // console.log('🚀 ~ file: Meal.js ~ line 14 ~ filtered ~ filtered', filtered);
// }
    // filtered
    return(
    <Fragment>
    {
        props.meals ?
        <p>
        {/* name: {props.meals[props.match.params.id-1].name}
        <br></br>
        id: {props.meals[props.match.params.id-2].id}
        <br></br> */}
        Current Meal Info:
        {
            props.meals.map(meal => 
        meal.id == props.match.params.id ? 
        <p>
        <br></br>
            id: {meal.id}
        <br></br>
            category: {meal.category} 
        <br></br>
            name: {meal.name} 
        <br></br>
            url: {meal.url}
        <br></br>
            image_url: {meal.image_url} 
        <br></br>
            cooking_time: {meal.cooking_time} minutes
        <br></br>
        <br></br>
            <h3>Recipes:</h3> { 
                meal.recipes.length > 0 ?
                    meal.recipes.map(recipe =>
                        <p>
                            id: {recipe.id}
                            <br></br>
                            category: {recipe.category}
                            <br></br>
                            url: {recipe.url}
                            name: {recipe.name}
                            <br></br>
                            cooking_time: {recipe.cooking_time} minutes
                            <br></br>
                            image_url: {recipe.image_url}
                            <br></br>
                        </p>
                    ) : <p> No Recipes Created Yet </p>
                    }
                </p>
                : null )
        }
        
        </p>
        :
        'no meal here bub'
    }
    {/* <p>{filtered.name}</p> */}
    {props.meals ?
    <UpdateMealForm />
    //mealToUpdate={props.meals.find(meal => 
    //     meal.id == props.match.params.id)}

    : null }
        </Fragment>
    )
}
    // const mapStateToProps = (state, ownProps) => {
    //     const { meals1 } = state
    //     const { meals } = ownProps
    //     return {
    //         mealsArr: meals
    //     }
    // }
    // export default connect(mapStateToProps)(Meal);
    export default Meal;