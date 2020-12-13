import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
//import {Route, Switch, useLocation, withRouter} from 'react-router-dom'
// import { createBrowserHistory } from "history";
import {updateMeal} from '../actions/updateMeal'
// import Meal from '../components/Meal'
// import MealList from '../components/MealList'
// import {addMeal} from '../actions/addMeal'
// import MealsList from '../components/MealsList'


class UpdateMealForm extends Component {
    constructor(props) {
    super(props)
    // this.meals = this.props.meals
    this.id = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))

    this.state = {
        // meal:this.meal
        // id: parseInt(window.location.href.replace("http://localhost:3001/meals/", "")),
        id: this.id,
        name:'',
        category:'',
        url:'',
        image_url:'',
        cooking_time:''
        }
        // this.loadMealInfo = this.loadMealInfo.bind(this)
    }

        componentDidMount(){
            this.loadMealInfo()
        }
    loadMealInfo(){
        console.log('HARLEM SON1')
        if (this.props.meals){
            
            console.log('🚀 ~ file: UpdateMealForm.js ~ line 55 ~ UpdateMealForm ~ componentDidMount ~ this.props.meals', this.props.meals);

            console.log('HARLEM SON2')
            // var mealId = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))

            // var meal = this.props.meals.filter(meal => meal.id == mealId)
            this.meal = this.props.meals.find(meal => meal.id == this.id);

            this.mealInfo = (
                <div>
                    <form id='update-meal-form' onSubmit={console.log("SUBMITTED")}>
                        <label> Meal Name:</label>
                            <input type="text" placeholder={this.meal.name} value={this.props.name} name="name" onChange={console.log("CHANGED")}/>
                        <label> Meal Category:</label> 
                            <input type="text" placeholder={this.meal.category} value={this.props.category} name="category" onChange={console.log("CHANGED")}/>
                        <label> Meal Url:</label> 
                            <input type="text" placeholder={this.meal.url} value={this.props.url} name="url" onChange={console.log("CHANGED")}/>
                        <label> Meal Image Url:</label> 
                            <input type="text" placeholder={this.meal.image_url} value={this.props.image_url} name="image_url" onChange={console.log("CHANGED")}/>
                        <label> Meal Cooking Time:</label> 
                            <input type="text" placeholder={this.meal.cooking_time} value={this.props.cooking_time} name="cooking_time" onChange={console.log("CHANGED")}/>
                                <button type="submit">Update Meal</button>
                            {/* {console.log('NewMealForm -> render -> this.state.image_url', this.state.image_url)}
            console.log('🚀 ~ file: UpdateMealForm.js ~ line 72 ~ UpdateMealForm ~ assignAndUpdateFields ~ this.meal', this.meal);
                            {console.log('NewMealForm -> render -> this.state.category', this.state.category)} */}
                    </form>  
                    </div>
                    )

        }
    }

    // this.id = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
    // this.mealsList = this.props.meals
    // this.meal = [this.props.meals].find(meal => meal.id == this.id)
    
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

// export default connect(mapStateToProps)(App);
    render() {
        // this.loadMeals
        return (
        <Fragment>
            {
                this.props.meals ?
                    <section>{this.mealInfo}</section> 
                    : 
                    <p>NOTHING TO SEE HERE</p> 
                }
        {/* <MealsList/> */}

            {/* NewMealForm */}
           
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