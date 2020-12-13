import React, { Fragment } from 'react';
import { Switch, Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <Fragment>
                <h1> Welcome to Meals Manager </h1>
                <p> Click below to improve your meal prep experience! </p>
            <Switch>
                {/* HomePage Here */}
                {/* <Route path='/meals' component={MealList}/> */}
                 <Link to={'/meals'}><button>View Meals</button>
                </Link>
 {/* <Link to={'/routines/new'}><button>New Routine</button> */}
 {/* </Link> */}
            </Switch>
        </Fragment>
        
      );
}
 
export default HomePage;