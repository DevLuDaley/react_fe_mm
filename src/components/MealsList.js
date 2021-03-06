import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
// import Meal from '../components/Meal'
import deleteMeal from '../actions/deleteMeal'


const MealsList = (props)  => {
    // const getCurrentMeal = () => {
    //     props && props.meals.filter(meal => 
    //     {
    //         // var currentMeal
    //         if (meal.id == props.match.params.id);
    //         const currentMeal = meal
    //         console.log('🚀 ~ file: Meal.js ~ line 100 ~ getMealByID ~ meal', meal);
    //         console.log('🚀 ~ file: Meal.js ~ line 106 ~ getMealByID ~ currentMeal', currentMeal);
    //         return( 
    //         <p>
    //             currentMeal
    //             {/* {currentMeal} */}
    //         </p>
    //         )
    //     }
    //     )
    // }
            // handleDelete = clicked => deleteMeal(clicked.target.id)
        // debugger 
        //  e.preventDefault()
        // ! why does this make the api go haywire?
        //  {deleteMeal(clickedId)}
        // ! direct connect to action creator
        //  deleteMeal(clickedMeal)
        //  ! previous method call =>>> props.delete(clickedMeal)
        //  this.props.delete(clickedMeal)
        //  this.props.deleteMeal(clickedId)
        //  this.props.delete(clickedId)
    // }



    const handleDeleteMeal = (e) => {
        if (props.meals){
        const targetId = e.target.id.replace("btn-delete-meal-", "")
        const clickedMeal = props.meals.find(meal => meal.id == targetId)
        props.deleteMeal(clickedMeal)
//      this.props.delete(clickedMeal)
        }
    }
        return (
        <Fragment>
        {/* {console.log('MealsList -> props.meals', props.meals)} */}
            {props.meals && props.meals.map(meal =>
            <ul key={meal.id} className='meals-list' style={{listStyleType: 'none'}}>
                  <li key={meal.id}>
                      <Link to={`/meals/${meal.id}`}>
                            {meal.name}
                            <button>
                                {meal.recipes ? meal.recipes.length : null}
                            </button>
                      </Link>
                  </li>
                            <button onClick={handleDeleteMeal} id={`btn-delete-meal-${meal.id}`} className='btn-delete-meal'>
                            {/* <button onClick={deleteMeal} id={meal.id} className='btn-delete-meal'> */}
                                Delete
                            </button>
            </ul>
            )
            }
        </Fragment>
        );
}

export default connect(null, {deleteMeal}) (MealsList);
