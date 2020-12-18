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
    // console.log('🚀 ~ file: UpdateMealForm.js ~ line 19 ~ UpdateMealForm ~ constructor ~ props', props);
    // console.log('🚀 ~ file: UpdateMealForm.js ~ line 19 ~ UpdateMealForm ~ constructor ~ props', props.mealToUpdate);
    this.state = {
        // id: parseInt(window.location.href.replace("http://localhost:3001/meals/", "")),
        // id: props.match.params.id,
        id: props.mealToUpdate.id,
        name: props.mealToUpdate.name,
        category: props.mealToUpdate.category,
        url: props.mealToUpdate.url,
        image_url: props.mealToUpdate.image_url,
        cooking_time: props.mealToUpdate.cooking_time
        // , mealToUpdate:
        }
        // this.assignAndUpdateFields() 
            // console.log('🚀 ~ file: UpdateMealForm.js ~ line 25 ~ UpdateMealForm ~ constructor ~ props', this.props);
    }

    // assignAndUpdateFields(){
    //     var EditMealId = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
    //     this.meal = this.meals.find(meal => meal.id == EditMealId)
//    componentDidMount(){
//         // this.props.fetchRecipes()
//         // console.log('THIS. MEAL --- PROPS', this.props)
//         const assignMeal = () =>{
//         var p = this.props.mealToUpdate.name
//         // this.fetchRecipes()
//     }
//     assignMeal()
//     }
    // }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
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
            {/* {p} */}
            <form onSubmit={this.handleSubmit} id='update-meal-form'>

                <label> Meal Name: </label> 
                    <input type="text" placeholder="hold-on" value={this.state.name} name="name" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                <label> Meal Category: </label> 
                    <input type="text" placeholder='enter category...' value={this.state.category} name="category" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                <label> Meal Url: </label> 
                    <input type="text" placeholder='enter url...' value={this.state.url} name="url" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                <label> Meal Image Url: </label> 
                    <input type="text" placeholder='enter image url...' value={this.state.image_url} name="image_url" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                <label> Meal Cooking Time: </label> 
                    <input type="text" placeholder='enter cooking time...' value={this.state.cooking_time} name="cooking_time" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                        <button type="submit">Update Meal</button>
            </form>
        </Fragment>  
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const EditMealId = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
    // console.log('🚀 ~ file: UpdateMealForm.js ~ line 93 ~ mapStateToProps ~ EditMealId', EditMealId);
    return {
        meals: state.mealsReducer.meals,
        mealToUpdate: state.mealsReducer.meals.find(meal => meal.id == EditMealId)
    }
}


export default connect(mapStateToProps, {updateMeal})(UpdateMealForm);
// export default connect(mapStateToProps, {updateMeal})(UpdateMealForm);