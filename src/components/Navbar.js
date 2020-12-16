import React, { Fragment }from 'react'
// import { View, Text } from 'react-native'
import {Route, Switch, Link} from 'react-router-dom'

// import HomePage from './HomePage'

const Navbar = () => {
    return (
            <Fragment>
                {/* <p>I'm the NavBar! </p>  */}
            <Switch>
                {/* <Route path='/home' component={HomePage}/> */}
                <nav className='nav'>
                    <ul style={{listStyleType: 'none'}}>
                            <Link to={`/`}> <li> Home </li> </Link> 
                            <Link to={`/meals`}> <li> Meals </li> </Link> 
                            <Link to={`/recipes`}> <li> Recipes </li> </Link> 
                            {/* <Link to={`/meals/new`}> <li> New Routine </li> </Link>  */}
                    </ul>
                </nav>
                {/* <Route exact path='/meals/:id/edit' render={(routerProps) => <UpdateMealPage {...routerProps} meals={this.props.meals}
             />}/> */}
                {/* <Route exact path='/meals/:id/edit' render={(routerProps) => <UpdateMealPage {...routerProps} meals={this.props.meals}
             />}/> */}
            </Switch>
        </Fragment>
    )
}

export default Navbar
