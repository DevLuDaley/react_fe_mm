import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Meal from '../components/Meal'
//import {Route, Switch, useLocation, withRouter} from 'react-router-dom'
// import { createBrowserHistory } from "history";

import {updateMeal} from '../actions/updateMeal'
// import {addMeal} from '../actions/addMeal'
// import MealsList from '../components/MealsList'


class UpdateMealForm extends Component {
    constructor(props) {
    super(props)
    // this.props.meals = this.props.meals.bind(this)

    // this.id = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
    // // this.mealsList = this.props.meals
    // this.meal = [this.props.meals].find(meal => meal.id == this.id)
    // console.log('THIS.PROPS.MEALS',this.props)
    // console.log('THIS.PROPS',this.props.meals)
    // console.log('🚀 ~ file: UpdateMealForm.js ~ line 21 ~ UpdateMealForm ~ constructor ~ this.meal', this.meal)
    this.state = {
        // meal:this.meal
        id: parseInt(window.location.href.replace("http://localhost:3001/meals/", "")),
        name:'',
        category:'',
        url:'',
        image_url:'',
        cooking_time:''
        }
        // this.assignAndUpdateFields() 
    }

    assignAndUpdateFields(){
        var EditMealId = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
        this.meal = this.meals.find(meal => meal.id == EditMealId)

    }
    
    handleChange = (e) => {
        this.setState({

            [e.target.id]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.category]: e.target.value,
            [e.target.url]: e.target.value,
            [e.target.image_url]: e.target.value,
            [e.target.cooking_time]: e.target.value
        })
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        this.props.updateMeal(this.state)
        // alert(`${[this.state.name]} created!`)
        this.setState({
            name: '',
            category: '',
            url: '',
            image_url: '',
            cooking_time: ''
        })
    }

    // const fillFormPlaceholders = () => {}
// export default connect(mapStateToProps)(App);
    render() {
        // this.loadMeals
        return (
        <Fragment>
        <h3>
        UpdateMealForm
        </h3>
            {
                this.props.meals ?
                this.props.meals.find(meal => 
                    meal.id == this.props.match.params.id ? 
                    meal.name : null) 
                                : "null"}
        
        {/* <MealsList/> */}

            {/* NewMealForm */}
            <form id='update-meal-form' onSubmit={this.handleSubmit}>

                <label> Meal Name:</label> 
                    <input type="text" placeholder="hold-on" value={this.state.name} name="name" onChange={this.handleChange}/>
                <label> Meal Category:</label> 
                    <input type="text" placeholder='enter category...' value={this.state.category} name="category" onChange={this.handleChange}/>
                <label> Meal Url:</label> 
                    <input type="text" placeholder='enter url...' value={this.state.url} name="url" onChange={this.handleChange}/>
                <label> Meal Image Url:</label> 
                    <input type="text" placeholder='enter image url...' value={this.state.image_url} name="image_url" onChange={this.handleChange}/>
                <label> Meal Cooking Time:</label> 
                    <input type="text" placeholder='enter cooking time...' value={this.state.cooking_time} name="cooking_time" onChange={this.handleChange}/>
                        <button type="submit">Update Meal</button>
                    {/* {console.log('NewMealForm -> render -> this.state.image_url', this.state.image_url)}
                    {console.log('NewMealForm -> render -> this.state.category', this.state.category)} */}
            </form>  
            {/* <DrillsContainer/>       */}
            {/* <Route exact path='/meals' render={(routerProps) => <MealsList {...routerProps} meals={this.props.meals}/>}/> */}
            {/* <MealsList/> */}
            {/* <MealsList props={this.props}/> */}
        </Fragment>  
        );
    }
}


export default connect(null, {updateMeal})(UpdateMealForm);
// ! doesn't need mapStateToProps
// ! doesn't need access to prop
//  ! doesn;t need to know what is currently in store...only responsible for adding new meal and updating

// ! instead of mapDispatchToProps we're calling {addRutine} and use the connect component