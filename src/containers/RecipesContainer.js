import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchRecipes} from '../actions/fetchRecipes'
import RecipesPage from './RecipesPage';
import Recipe from '../components/Recipe'
import UpdateRecipePage from '../components/UpdateRecipePage'

class RecipesContainer extends Component {
    constructor(props) {
        super(props);
        this.fetchRecipes = fetchRecipes
        this.state = {recipes: []}
    }
    componentDidMount(){
        this.props.fetchRecipes()
    }
    render() {
        return (
            <Fragment>
            {/* <p> Recipes Container</p> */}
            {/* <RecipesPage/> */}
            <Switch>
            <Route exact path='/recipes' render={(routerProps) => <RecipesPage {...routerProps} recipes={this.props.recipes}/>}/>

            <Route exact path='/recipes/:id' render={(routerProps) => <Recipe {...routerProps} recipes={this.props.recipes}  
             />}/>

            {/* <Route exact path='/recipes/:id/edit' render={(routerProps) => <UpdateRecipePage {...routerProps} recipes={this.props.recipes}
             />}/> */}
            
            </Switch>
        </Fragment> );
    }
}
 
//! redux store
const mapStateToProps = state => {
    // console.log('state.meals', state.meals);
    return(
        {
            // meals: state.mealsReducer.meals,
            recipes: state.recipesReducer.recipes
        }
    )
}

 
export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer);

