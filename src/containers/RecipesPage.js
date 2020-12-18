import React, { Component } from 'react'
// import './RecipesPage.css'
// import '../App.css'
// import fetchRecipes from '../actions/fetchRecipes'
import RecipesList from '../components/RecipesList';
import NewRecipeForm from '../forms/NewRecipeForm';


class RecipesPage extends Component {
    constructor(props) {
        super(props);
        this.state = []
    }


    //   componentDidMount(){
    //     // this.props.fetchRecipes()
    // }
    render() { 
        return (<>
        <p> Recipes Page</p>
        <NewRecipeForm recipes={this.props.recipes}/>
        <RecipesList recipes={this.props.recipes}/>
        {/* {console.log('🚀 ~ file: RecipesPage.js ~ line 22 ~ RecipesPage ~ render ~ this.props.recipes', this.props.recipes)} */}
         </>  );
    }
}
 
export default RecipesPage;