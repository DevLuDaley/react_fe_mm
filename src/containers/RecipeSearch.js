import React, {Fragment , useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {loadRecipes} from '../actions/loadRecipes'
import LoadedRecipeCard from '../components/LoadedRecipeCard'

const RecipeSearch = props => {
    const [loadedRecipes, setLoadedRecipes] = useState([])

    useEffect(() => {
        props.loadRecipes()
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        //props.loadRecipes()
    }
    
    const handleChange = (e) => {
    }

    return (
        <Fragment>
    <h1>

    Search Spoonacular's Recipe Api
    </h1>
    <p>
        enter recipe name or main ingredient
    </p>
        {/* <MealsList/> */}

            {/* NewMealForm */}
            <form id='new-meal-form' onSubmit={handleSearchSubmit}>

                <label> Meal Name:</label> 
                    <input type="text" placeholder='enter meal name...' value={1} name="name" onChange={handleChange}/>
                {/* <label> Meal Category:</label> 
                    <input type="text" placeholder='enter category...' value={1} name="category" onChange={handleChange}/>
                <label> Meal Url:</label> 
                    <input type="text" placeholder='enter url...' value={1} name="url" onChange={handleChange}/> */}
                <button type="submit">Find Recipes</button>
                {/* {props.state.loadRecipes ? <p> WOAH </p> : props.state.loadRecipes } */}
              
            <br>
            </br>

            </form>
              {
                  props.loadedRecipes ?
                  props.loadedRecipes.map(lr =>
                    <LoadedRecipeCard loadedResults={lr}/>)
                  :
                    <h3> Click the button above to load recipes </h3>}
{console.log('🚀 ~ file: RecipeSearch.js ~ line 51 ~ props.loadedRecipes', props.loadedRecipes)}
{console.log('🚀 ~ file: RecipeSearch.js ~ line 53 ~ props.loadedRecipes.loadedRecipes', props.loadedRecipes)}


        </Fragment>
    )
}

const mapStateToProps = state => {
    console.log('state.loadRecipesReducer 1', state.loadRecipesReducer);
    console.log('state.loadRecipesReducer.loadedRecipes 2', state.loadRecipesReducer.loadedRecipes);
    // const loadResults = state.loadRecipesReducer.loadedRecipes

    // loadResults.map(load => load.title)
    return(
        {
            // meals: state.loadRecipesReducer.meals,
            loadedRecipes: state.loadRecipesReducer.loadedRecipes
        }
    )
}

// const mapDispatchToProps = (dispatch) => {

// }
// RecipeSearch.propTypes = {

// }

// export default RecipeSearch
export default connect(mapStateToProps, {loadRecipes}) (RecipeSearch);
