import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchMeals} from '../actions/fetchMeals'
import MealsPage from './MealsPage';
import Meal from '../components/Meal'
// import UpdateMealPage from '../components/UpdateMealPage'
import HomePage from '../components/HomePage'
import MealsContainer from './MealsContainer'
import RecipesContainer from './RecipesContainer'
// import Home from '../components/Home'

// import {fetchMeals} from '../actions/fetchMeals'
// import NewMealForm from '../components/NewMealForm'
// import MealsList from '../components/MealsList'
// import NewMainContainer from '../containers/NewMainContainer'


class MainContainer extends Component {
    constructor(props) {
        super(props);
        // this.fetchMeals = fetchMeals
        // this.state = {meals: []}
    }
    componentDidMount(){
        // this.props.fetchMeals()
        // console.log('THIS.PROPS 1', this.props)
        // console.log('THIS.STATE', this.state)
        // this.fetchMeals()
    }
    render() { 
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                </Switch>

                <RecipesContainer/>
                <MealsContainer/>
            </Fragment> );
            
            
            // console.log('MainContainer -> render -> this.props.meals', this.props.meals);
    }
}
 
//! redux store
const mapStateToProps = state => {
    console.log('state.meals', state.meals);
    return(
        {
            meals: state.meals
        }
    )
}

 
export default connect(mapStateToProps, {fetchMeals})(MainContainer);

