import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import MealPage from './MealPage';

// import {fetchMeals} from '../actions/fetchMeals'
// import NewMealForm from '../components/NewMealForm'
// import Meal from '../components/Meal'
// import MealsList from '../components/MealsList'
// import Home from '../components/Home'
// import NewMealsContainer from '../containers/NewMealsContainer'


class MealsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<MealPage/>);
    }
}
 
export default MealsContainer;