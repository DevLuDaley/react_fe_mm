import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchMeals} from '../actions/fetchMeals'
import MealsPage from './MealsPage';
import Meal from '../components/Meal'
import UpdateMealPage from '../components/UpdateMealPage'
import UpdateMealForm from '../forms/UpdateMealForm'
import HomePage from '../components/HomePage'
// import Home from '../components/Home'

// import {fetchMeals} from '../actions/fetchMeals'
// import NewMealForm from '../components/NewMealForm'
// import MealsList from '../components/MealsList'
// import NewMealsContainer from '../containers/NewMealsContainer'


class MealsContainer extends Component {
    constructor(props) {
        super(props);
        this.fetchMeals = fetchMeals
        this.state = {meals: []}
    }
    componentDidMount(){
        // console.log('THIS.PROPS 1', this.props)
        this.props.fetchMeals()
        // console.log('THIS.STATE', this.state)
        // this.fetchMeals()
    }
    render() { 
        return (
            <Fragment>
            {/* <p> Meals Container</p> */}
            {/* <MealsPage/> */}
             {/* {console.log('THIS.PROPS 2',this.props)} */}
            <Switch>
            <Route exact path='/' component={HomePage}/>

            <Route exact path='/meals' render={(routerProps) => <MealsPage {...routerProps} meals={this.props.meals}/>}/>

            {/* <Route exact path='/meals/new' render={(routerProps) => <NewMealsContainer {...routerProps} meals={this.props.meals}/>}/> */}
            
            <Route exact path='/meals/:id' render={(routerProps) => <Meal {...routerProps} meals={this.props.meals}  
            // meal={this.props.meals.find((meal) => { return meal.id == this.props.match.params.id})}
            // meal={this.props.meals[this.props.match.params.id]-1}
            // meal={ this.props.meals ? this.props.meals[2] : null}
            // meal={this.props.meals[`:id`]-1}
             />}/>
            {/* <Route exact path='/mealy' render={(routerProps) => <UpdateMealForm {...routerProps} meals={this.props.meals}
             />}/> */}

            {/* <Route exact path='/meals/:id/edit' render={(routerProps) => <UpdateMealPage {...routerProps} meals={this.props.meals}
             />}/> */}
            
            </Switch>
        </Fragment> );
            
            
            // console.log('MealsContainer -> render -> this.props.meals', this.props.meals);
    }
}
 
//! redux store
const mapStateToProps = state => {
    return(
        {
            meals: state.mealsReducer.meals,
            recipes: state.recipesReducer.recipes
        }
    )
}
 
export default connect(mapStateToProps, {fetchMeals})(MealsContainer);

