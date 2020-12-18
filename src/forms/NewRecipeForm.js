import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {addRecipe} from '../actions/addRecipe'
// import RecipesList from '../components/RecipesList'


class NewRecipeForm extends Component {
    state = {
        name:'',
        category:'',
        url:'',
        image_url:'',
        cooking_time:''
    }
    
    handleChange = (e) => {
        // e.target.value
        // console.log('NewRecipeForm -> e.target.value', e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.category]: e.target.value,
            [e.target.url]: e.target.value,
            [e.target.image_url]: e.target.value,
            [e.target.cooking_time]: e.target.value
        })
        // console.log('NewRecipeForm -> e.target.image_url', e.target.image_url);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        this.props.addRecipe(this.state)
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
        {/* <RecipesList/> */}

            {/* NewRecipeForm */}
            <form id='new-recipe-form' onSubmit={this.handleSubmit}>

                <label> Recipe Name:</label> 
                    <input type="text" placeholder='enter recipe name...' value={this.state.name} name="name" onChange={this.handleChange}/>
                <label> Recipe Category:</label> 
                    <input type="text" placeholder='enter category...' value={this.state.category} name="category" onChange={this.handleChange}/>
                <label> Recipe Url:</label> 
                    <input type="text" placeholder='enter url...' value={this.state.url} name="url" onChange={this.handleChange}/>
                <label> Recipe Image Url:</label> 
                    <input type="text" placeholder='enter image url...' value={this.state.image_url} name="image_url" onChange={this.handleChange}/>
                <label> Recipe Cooking Time:</label> 
                    <input type="text" placeholder='enter cooking time...' value={this.state.cooking_time} name="cooking_time" onChange={this.handleChange}/>
                        <button type="submit">Create Recipe</button>
                    {/* {console.log('NewRecipeForm -> render -> this.state.image_url', this.state.image_url)}
                    {console.log('NewRecipeForm -> render -> this.state.category', this.state.category)} */}
            </form>  
            {/* <DrillsContainer/>       */}
            {/* <Route exact path='/recipes' render={(routerProps) => <RecipesList {...routerProps} recipes={this.props.recipes}/>}/> */}
            {/* <RecipesList/> */}
            {/* <RecipesList props={this.props}/> */}
        </Fragment>  
        );
    }
}


export default connect(null, {addRecipe})(NewRecipeForm);
// ! doesn't need mapStateToProps
// ! doesn't need access to prop
//  ! doesn;t need to know what is currently in store...only responsible for adding new recipe and updating

// ! instead of mapDispatchToProps we're calling {addRutine} and use the connect component