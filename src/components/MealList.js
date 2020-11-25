import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
// import Meal from '../components/Meal'


const MealsList = (props)  => {
        return (
        <Fragment>
        {console.log('MealsList -> props.meals', props.meals)}
            {props.meals && props.meals.map(meal => 
            <ul key={meal.id} className='meals-list'>
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
