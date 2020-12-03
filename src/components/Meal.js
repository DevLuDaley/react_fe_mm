import React, { Fragment, useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import { connect , useSelector } from 'react-redux'
import UpdateMealForm from '../forms/UpdateMealForm'

// import NewMealRecipeForm from '../components/NewMealRecipeForm'
// let id = props.match.params.id;
// const selectCurrentMeal = state => state.meals.find(meal => meal.id == id)
// const selectMeals = state => state.meals

const Meal = (props) => {
    // let id = props.match.params.id;
    // const mealsB = useSelector(selectMeals)
    // console.log('🚀 ~ file: Meal.js ~ line 14 ~ Meal ~ mealsB', mealsB);
    
    
    // const mealsArr = useSelector(state => {[state.meals].find(meal => meal.id == id)})
    // var mealsArr = useSelector(state => {state.meals.map(meal => meal.name)}) y
// const mealsArr = useSelector(state => state.meals.find(meal => meal.id == id))

    // const useMeals = useSelector(selectMeals) 
    // const bigMeal = useMeals.find(meal => meal.id == mealId)
    // if (props.meals) {
//     var mealId = props.match.params.id;
//     var meal = props.meals.find(meal => meal.id === mealId)
//     // var mealInfo = (<li>{meal.name}</li>)
//     console.log(props.meals)
    //  console.log('MEAL WORDS')
// var soloMeal
var id;
if (props.mealsArr) {
     var showMealCard = (
         <div>
       <p>  {id = props.match.params.id} </p>
       {/* <p>  { props.meals.length } </p> */}
       {/* <p>  22{ props.meal.name } </p> */}
         {/* { props.meals[id].name } */}
         {/* { props.meals[id]} */}
         {/* <p> { props.meals[id]} </p> */}
        {console.log('🚀 ~ file: Meal.js ~ line 50 ~ Meal ~ id', id)}
        {console.log('🚀 ~ file: Meal.js ~ line 47 ~ Meal ~ props.meals', props.meals)}
        {console.log('🚀 ~ file: Meal.js ~ line 47 ~ Meal ~ props.meals[id]', props.meals[id])}
        {/* {console.log('🚀 ~ file: Meal.js ~ line 47 ~ Meal ~ props.meal', props.meal)} */}
         
          <p>Show Meal Card here 1</p>
        {/* //  {soloMeal = mealsB.find(meal => meal.id == id)} */}
        {/* //  <p>{soloMeal.name}</p> */}
        
        </div>
        //  meal = props.meals.find(meal => meal.id == mealId)
     )
     }
//      console.log("MEAL BRO", meal);
// // var meal = props.meals.find(meal => meal.id == mealId)
// }
// var meal
// console.log(`CONSOLED PROPS from MEAL.JS`, props.meals);
// var mealId;
// var meal;
// var meals;
// var soloMeal;
    return(
    <Fragment>
          {props.mealsArr ? <div>{showMealCard}</div> : <p>NOT A CHANCE</p>}
          <div> 
          <p>Show Meal Card here 2</p>
         {/* {soloMeal = mealsB.find(meal => meal.id == id)} */}
         {/* <p>{soloMeal.name}</p> */}
         </div>
    {/* // var mealInfo = (<li>{meal.name}</li>)
    // console.log(props.meals)
    //  console.log("MEAL BRO", meal);
// var meal = props.meals.find(meal => meal.id == mealId)
        //   {let id = ownProps.match.params.id} */}
            <li className='meal-component' style={{listStyleType: 'none'}}>
            {/* {props.meals ? mealCard:(<p> NADA </p>)} */}
            </li>
            {console.log("MEAL PROPS", props)}
            {/* {console.log("MEAL PROPS", props.match.params.id)} */}
            {/* {console.log("MEAL from PROPS", props.meal)} */}
        </Fragment>
    )
}
// }
    const mapStateToProps = (state, ownProps) => {
    // const mapStateToProps = (state) => {
        const { meals } = state;
        let mealId = ownProps.match.params.id;
        return {
            mealId: mealId,
            // meal: state.meals,
            mealsArr: meals
            // meal: state.meals[mealId]
            // meal: mealsArr[mealId]
            // meal: meals.find(meal => meal.id == mealId)
        }
    }
    // const mapDispatchToProps = (dispatch) => {

    // }
        // const meals = state.meals
        // var mealId = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
        // const meal = meals.find(meal => meal.id == mealId)
            // meal: state.meals.find(meal => meal.id === id)
            // meal: meals.find(meal => meal.id == mealId)
    // export default Meal;
    export default connect(mapStateToProps)(Meal);