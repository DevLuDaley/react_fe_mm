import React, { Fragment, useState, useEffect } from 'react';
import UpdateMealForm from '../forms/UpdateMealForm'
import Meal from './Meal'

const UpdateMealPage = (props) => {
    var [state, setState] = useState([])
    // var [name, setName] = useState()
        useEffect(() => {
                setState(props.meals);
            }, [props.meals]);

    if (props.meals) {
    // const [state, setState] = useState([])
        // useEffect(() => {
                // setState(props.meals);
            // }, [props.meals]);

    var mealId = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
    // var mealId = props.match.params.id

    // var meal = props.meals.filter(meal => meal.id == mealId
    var meal = props.meals.find(meal => meal.id == mealId)
    // var meal = props.meals.filter(meal => meal.id == props.match.params.id)[0]
        // [0]

    // const [meal, setMeal] = useState(state.meals[mealId])
    // var [name, setName] = useState()
    // var [category, setCategory] = useState()
    // var [url, setUrl] = useState()
    // const meals = props.meals

    var mealInfo = (        
    <div>
    </div>
    

    )

    // useEffect(() => {
                // setMeal(state.meals.find(meal => meal.id == mealId));
            // }, [props.meals]);

    // console.log('🚀 ~ file: MealEdit.js ~ line 9 ~ MealEdit ~ id', mealId);

    // console.log('🚀 ~ file: MealEdit.js ~ line 12 ~ MealEdit ~ props.meals', props.meals);
    // var meal = props.meals.find(meal => meal.id == mealId)
    // console.log('🚀 ~ file: MealEdit.js ~ line 8 ~ MealEdit ~ meal', meal);
    // console.log('🚀 ~ file: MealEdit.js ~ line 18 ~ MealEdit ~ meals', meals);
    // console.log('🚀 ~ file: MealEdit.js ~ line 18 ~ MealEdit ~ state', state);
    }
    var handleEdit = () => {

    }
return(
    <Fragment>
    <h3>
    UpdateMealPage
    </h3>

        <UpdateMealForm meals={props.meals} meal={meal}/>
        {/* {state ? <section>{mealInfo}</section> : <h1>No Meal Loaded. Check context.</h1>} */}
        {/* <Meal meals={props.meals} meal={meal}/> */}
    </Fragment>
)
}

export default UpdateMealPage;