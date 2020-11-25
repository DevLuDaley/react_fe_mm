import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {addMeal} from '../actions/addMeal'
// import MealsList from '../components/MealsList'


class NewMealForm extends Component {
    state = {
        name:'',
        category:'',
        url:'',
        image_url:'',
        cooking_time:''
    }
    
    handleChange = (e) => {
        // e.target.value
        // console.log('NewMealForm -> e.target.value', e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.category]: e.target.value,
            [e.target.url]: e.target.value,
            [e.target.image_url]: e.target.value,
            [e.target.cooking_time]: e.target.value
        })
        // console.log('NewMealForm -> e.target.image_url', e.target.image_url);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        debugger
        this.props.addMeal(this.state)
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
        return (
        <Fragment>
        {/* <MealsList/> */}

            {/* NewMealForm */}
            <form id='new-meal-form' onSubmit={this.handleSubmit}>

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
                        <button type="submit">Create Meal</button>
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


export default connect(null, {addMeal})(NewMealForm);
// ! doesn't need mapStateToProps
// ! doesn't need access to prop
//  ! doesn;t need to know what is currently in store...only responsible for adding new meal and updating

// ! instead of mapDispatchToProps we're calling {addRutine} and use the connect component