import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { connect , useSelector } from 'react-redux'
import UpdateMealForm from '../forms/UpdateMealForm'

const Meal = (props) => {
    if (props.meals){
    const filtered = () => props.meals.filter((meal) => {
        return meal.id == 2 
    }
    )
            // console.log('🚀 ~ file: Meal.js ~ line 35 ~ Meal ~ filtered', filtered);
    
    console.log('🚀 ~ file: Meal.js ~ line 14 ~ filtered ~ filtered', filtered);
}
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
        MEAL:
        {
            props.meals.map(meal => 
        meal.id == props.match.params.id ? 
        <p>name: {meal.name} id: {meal.id} url: {meal.url}</p> 
        : null )
        }
        </p> 
        :
        'no meal here bub'
    }
    {/* <p>{filtered.name}</p> */}
    <UpdateMealForm/>
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