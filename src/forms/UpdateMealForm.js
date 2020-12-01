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
    // this.MealList = MealList
    // this.MealList = this.MealList.bind(this)
    // this.props.meals = this.props.meals.bind(this)
    this.meals = this.props.meals
    this.id = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
    // // this.mealsList = this.props.meals
    // this.meal = this.mealList.find(meal => meal.id == this.id)
    // console.log('THIS.PROPS',this.props)
    console.log('THIS.MEALS',this.meals)
    // console.log('THIS.PROPS.MEALS',this.props.meals)
    // console.log('THIS.MealLIST',this.MealList)
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
        this.assignAndUpdateFields = this.assignAndUpdateFields.bind(this)
        this.assignAndUpdateFields()
    }

    assignAndUpdateFields(){
        console.log('🚀 ~ file: UpdateMealForm.js ~ line 51 ~ UpdateMealForm ~ assignAndUpdateFields ~ this.props.meals', this.props.meals);
        
        var EditMealId = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))

        console.log('🚀 ~ file: UpdateMealForm.js ~ line 37 ~ UpdateMealForm ~ assignAndUpdateFields ~ EditMealId', EditMealId);
    // this.mealsList = this.props.meals
        // this.meal = this.props.meals.find(meal => meal.id == EditMealId)
        
        // console.log('🚀 ~ file: UpdateMealForm.js ~ line 56 ~ UpdateMealForm ~ assignAndUpdateFields ~ this.meal', this.meal);

        console.log('🚀 ~ file: UpdateMealForm.js ~ line 59 ~ UpdateMealForm ~ assignAndUpdateFields ~ this.meals', this.meals);
    }

    // this.id = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
    // this.mealsList = this.props.meals
    // this.meal = [this.props.meals].find(meal => meal.id == this.id)
    
    handleChange = (e) => {
        // console.log('🚀 ~ file: UpdateMealForm.js ~ line 51 ~ UpdateMealForm ~ assignAndUpdateFields ~ this.props.meals', this.props.meals);

        // this.meal
        // console.log('UpdateMealForm -> this.meal', this.meal);
        //     if (this.props){
        // this.idFromPath = window.location.href.replace("http://localhost:3001/meals/", "")
        // console.log('UpdateMealForm -> this.path', this.idFromPath);
        // this.meal = this.props.meals.find(meal => meal.id == [this.idFromPath])
        // // this.routeParam = props.match.params.id
        // // this.props.meals
        // console.log('UpdateMealForm ->  -> this.props.meals', this.props.meals);
        // console.log('UpdateMealForm ->  -> this.meal', this.meal);
        // }
        // // e.target.value
        // console.log('NewMealForm -> e.target.value', e.target.value);
        this.setState({

            [e.target.id]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.category]: e.target.value,
            [e.target.url]: e.target.value,
            [e.target.image_url]: e.target.value,
            [e.target.cooking_time]: e.target.value
        })


        // const location = useLocation();
        // console.log(location.pathname);
        // console.log('UpdateMealForm -> location.pathname', location.pathname);
        // console.log('SHOWING THIS.ID', this.id)
        // console.log('SHOWING THIS.ID', this.props)
        // console.log('NewMealForm -> e.target.image_url', e.target.image_url);
        // this.props.location.pathname

        // const history = createBrowserHistory()
        // console.log('UpdateMealForm -> this.props', this.props);
        // console.log('UpdateMealForm -> this.props, SPECIFIC MEAL', this.props.meals[3]);

        // console.log('UpdateMealForm -> this.props, MEAL ID', this.props.meals[3].id);

        // console.log('UpdateMealForm -> this.props, THIS.MEAL', this.meal);

        // window.location.href
        // console.log('UpdateMealForm -> window.location.href', window.location.href);

        // this.props.match.params.id
        // console.log('UpdateMealForm -> this.props.match.params.id', props.match.params.id);
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
        {/* <MealsList/> */}

            {/* NewMealForm */}
            <form id='update-meal-form' onSubmit={this.handleSubmit}>

                <label> Meal Name:</label> 
                    <input type="text" placeholder='enter meal name...' value={this.state.name} name="name" onChange={this.handleChange}/>
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