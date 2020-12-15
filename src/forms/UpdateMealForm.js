import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import {Route, Switch} from 'react-router-dom'

import {updateMeal} from '../actions/updateMeal'
// import Meal from '../components/Meal'
// import currentMeal from '../components/Meal'
//import {Route, Switch, useLocation, withRouter} from 'react-router-dom'
// import { createBrowserHistory } from "history";

// import {addMeal} from '../actions/addMeal'
// import MealsList from '../components/MealsList'


class UpdateMealForm extends Component {
    constructor(props) {
    super(props)
    this.state = {
        // id: parseInt(window.location.href.replace("http://localhost:3001/meals/", "")),
        // id: props.match.params.id,
        id: this.props.mealToUpdate.id,
        name: this.props.mealToUpdate.name,
        category: this.props.mealToUpdate.category,
        url: this.props.mealToUpdate.url,
        image_url: this.props.mealToUpdate.image_url,
        cooking_time: this.props.mealToUpdate.cooking_time
        }
        // this.assignAndUpdateFields() 
            console.log('🚀 ~ file: UpdateMealForm.js ~ line 25 ~ UpdateMealForm ~ constructor ~ props', this.props);
    }

    // assignAndUpdateFields(){
    //     var EditMealId = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
    //     this.meal = this.meals.find(meal => meal.id == EditMealId)

    // }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})

        // console.log('🚀 ~ file: UpdateMealForm.js ~ line 49 ~ UpdateMealForm ~ e.target.name', e.target.name);
        
        // console.log('🚀 ~ file: UpdateMealForm.js ~ line 49 ~ UpdateMealForm ~ e.target.value', e.target.value);
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        this.props.updateMeal(this.state)
    }

    render() {
        return (
        <Fragment>
            <h3>
                UpdateMealForm
            </h3>
            <form onSubmit={this.handleSubmit} id='update-meal-form'>

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
            </form>
        </Fragment>  
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         cashMoney: state.meals.find(meal => meal.id === props.match.params.id)
//     }
// }


export default connect(null, {updateMeal})(UpdateMealForm);
// export default connect(mapStateToProps, {updateMeal})(UpdateMealForm);