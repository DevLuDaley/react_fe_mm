import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchMeals} from '../actions/fetchMeals'
import MealsPage from './MealsPage';
import Meal from '../components/Meal'
import MealEdit from '../components/MealEdit'
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
        this.props.fetchMeals()
        console.log('THIS.PROPS', this.props)
        // this.fetchMeals()
    }
    render() { 
        return (
            <Fragment>
            <p> Meals Container</p>
            {/* <MealsPage/> */}
             {console.log('THIS.PROPS',this.props)}
            <Switch>
            {/* <Route path='/home' component={Home}/> */}

            <Route exact path='/meals' render={(routerProps) => <MealsPage {...routerProps} meals={this.props.meals}/>}/>

            {/* <Route exact path='/meals/new' render={(routerProps) => <NewMealsContainer {...routerProps} meals={this.props.meals}/>}/> */}
            
            <Route exact path='/meals/:id' render={(routerProps) => <Meal {...routerProps} meals={this.props.meals} 
            // meal={this.props.meals[`:id`]-1}
             />}/>

            <Route exact path='/meals/:id/edit' render={(routerProps) => <MealEdit {...routerProps} meals={this.props.meals}
             />}/>
            
            </Switch>
        </Fragment> );
            
            
            console.log('MealsContainer -> render -> this.props.meals', this.props.meals);
    }
}
 
//! redux store
const mapStateToProps = state => {
    // console.log('state.meals', state.meals);
    return(
        {
            meals: state.meals
        }
    )
}

 
export default connect(mapStateToProps, {fetchMeals})(MealsContainer);

