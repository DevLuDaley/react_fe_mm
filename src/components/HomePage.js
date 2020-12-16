import React, { Fragment } from 'react';
import { Switch, Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <Fragment>
                <h1> Welcome to Meals Manager </h1>
                <p> Click below to improve your meal prep experience! </p>
            <Switch>
                <nav className='home-page'>
                    <ul style={{listStyleType: 'none'}}></ul>
                <Link to={'/recipes'}> <button> View Recipes </button> </Link>
                <Link to={'/meals'}> <button> View Meals </button> </Link>
                </nav>
            </Switch>
        </Fragment>
        
      );
}
 
export default HomePage;