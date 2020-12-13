import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
// import Meal from '../components/Meal'


const MealsList = (props)  => {
    const getCurrentMeal = () => {
        props && props.meals.filter(meal => 
        {
            // var currentMeal
            if (meal.id == props.match.params.id);
            const currentMeal = meal
            console.log('🚀 ~ file: Meal.js ~ line 100 ~ getMealByID ~ meal', meal);
            console.log('🚀 ~ file: Meal.js ~ line 106 ~ getMealByID ~ currentMeal', currentMeal);
            return( 
            <p>
                currentMeal
                {/* {currentMeal} */}
            </p>
            )
        }
        )
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
            </ul>
            )
            }
        </Fragment>
        );
}
 
export default MealsList;
