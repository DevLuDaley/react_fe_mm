import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchRecipes} from '../actions/fetchRecipes'
import RecipesPage from './RecipesPage';
import Recipe from '../components/Recipe'
import UpdateRecipePage from '../components/UpdateRecipePage'
// import HomePage from '../components/HomePage'
// import Home from '../components/Home'

// import {fetchRecipes} from '../actions/fetchRecipes'
// import NewRecipeForm from '../components/NewRecipeForm'
// import RecipesList from '../components/RecipesList'
// import NewRecipesContainer from '../containers/NewRecipesContainer'


class RecipesContainer extends Component {
    constructor(props) {
        super(props);
        this.fetchRecipes = fetchRecipes
        this.state = {recipes: []}
    }
    componentDidMount(){
        this.props.fetchRecipes()
        console.log('THIS.PROPS', this.props)
        // this.fetchRecipes()
    }
    render() {
        return (
            <Fragment>
            {/* <p> Recipes Container</p> */}
            {/* <RecipesPage/> */}
             {console.log('THIS.PROPS',this.props)}
            <Switch>
            {/* <Route exact path='/' component={HomePage}/> */}

            <Route exact path='/recipes' render={(routerProps) => <RecipesPage {...routerProps} recipes={this.props.recipes}/>}/>

            {/* <Route exact path='/recipes/new' render={(routerProps) => <NewRecipesContainer {...routerProps} recipes={this.props.recipes}/>}/> */}
            
            <Route exact path='/recipes/:id' render={(routerProps) => <Recipe {...routerProps} recipes={this.props.recipes}  
            // recipe={this.props.recipes.find((recipe) => { return recipe.id == this.props.match.params.id})}
            // recipe={this.props.recipes[this.props.match.params.id]-1}
            // recipe={ this.props.recipes ? this.props.recipes[2] : null}
            // recipe={this.props.recipes[`:id`]-1}
             />}/>

            {/* <Route exact path='/recipes/:id/edit' render={(routerProps) => <UpdateRecipePage {...routerProps} recipes={this.props.recipes}
             />}/> */}
            
            </Switch>
        </Fragment> );
            
            
            // console.log('RecipesContainer -> render -> this.props.recipes', this.props.recipes);
    }
}
 
//! redux store
const mapStateToProps = state => {
    console.log('state.meals', state.meals);
    return(
        {
            meals: state.mealsReducer.meals,
            recipes: state.recipesReducer.recipes
        }
    )
}

 
export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer);

