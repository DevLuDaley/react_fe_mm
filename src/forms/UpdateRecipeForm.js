import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import {Route, Switch} from 'react-router-dom'

import {updateRecipe} from '../actions/updateRecipe'
// import Recipe from '../components/Recipe'
// import currentRecipe from '../components/Recipe'
//import {Route, Switch, useLocation, withRouter} from 'react-router-dom'
// import { createBrowserHistory } from "history";

// import {addRecipe} from '../actions/addRecipe'
// import RecipesList from '../components/RecipesList'


class UpdateRecipeForm extends Component {
    constructor(props) {
    super(props)
    // console.log('🚀 ~ file: UpdateRecipeForm.js ~ line 19 ~ UpdateRecipeForm ~ constructor ~ props', props);
    // console.log('🚀 ~ file: UpdateRecipeForm.js ~ line 19 ~ UpdateRecipeForm ~ constructor ~ props', props.recipeToUpdate);
    this.state = {
        // id: parseInt(window.location.href.replace("http://localhost:3001/recipes/", "")),
        // id: props.match.params.id,
        id: props.recipeToUpdate.id,
        name: props.recipeToUpdate.name,
        category: props.recipeToUpdate.category,
        url: props.recipeToUpdate.url,
        image_url: props.recipeToUpdate.image_url,
        cooking_time: props.recipeToUpdate.cooking_time
        // , recipeToUpdate:
        }
        // this.assignAndUpdateFields() 
            // console.log('🚀 ~ file: UpdateRecipeForm.js ~ line 25 ~ UpdateRecipeForm ~ constructor ~ props', this.props);
    }

    // assignAndUpdateFields(){
    //     var EditRecipeId = parseInt(window.location.href.replace("http://localhost:3001/recipes/", ""))
    //     this.recipe = this.recipes.find(recipe => recipe.id == EditRecipeId)
//    componentDidMount(){
//         // this.props.fetchRecipes()
//         // console.log('THIS. RECIPE --- PROPS', this.props)
//         const assignRecipe = () =>{
//         var p = this.props.recipeToUpdate.name
//         // this.fetchRecipes()
//     }
//     assignRecipe()
//     }
    // }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        this.props.updateRecipe(this.state)
    }

    render() {
        return (
        <Fragment>
        
            <h3>
                UpdateRecipeForm
            </h3>
            {/* {p} */}
            <form onSubmit={this.handleSubmit} id='update-recipe-form'>

                <label> Recipe Name: </label> 
                    <input type="text" placeholder="hold-on" value={this.state.name} name="name" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                <label> Recipe Category: </label> 
                    <input type="text" placeholder='enter category...' value={this.state.category} name="category" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                <label> Recipe Url: </label> 
                    <input type="text" placeholder='enter url...' value={this.state.url} name="url" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                <label> Recipe Image Url: </label> 
                    <input type="text" placeholder='enter image url...' value={this.state.image_url} name="image_url" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                <label> Recipe Cooking Time: </label> 
                    <input type="text" placeholder='enter cooking time...' value={this.state.cooking_time} name="cooking_time" onChange={this.handleChange}/>
                <br></br>
                <br></br>

                        <button type="submit">Update Recipe</button>
            </form>
        </Fragment>  
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const EditRecipeId = parseInt(window.location.href.replace("http://localhost:3001/recipes/", ""))
    // console.log('🚀 ~ file: UpdateRecipeForm.js ~ line 93 ~ mapStateToProps ~ EditRecipeId', EditRecipeId);
    return {
        recipes: state.recipesReducer.recipes,
        recipeToUpdate: state.recipesReducer.recipes.find(recipe => recipe.id == EditRecipeId)
    }
}


export default connect(mapStateToProps, {updateRecipe})(UpdateRecipeForm);
// export default connect(mapStateToProps, {updateRecipe})(UpdateRecipeForm);