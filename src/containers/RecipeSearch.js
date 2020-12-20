import React, {Fragment , useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {loadRecipes} from '../actions/loadRecipes'

const RecipeSearch = props => {
    const [loadedRecipes, setLoadedRecipes] = useState([])

    useEffect(() => {
        props.loadRecipes()
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
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
                {props.loadedRecipes ? 
                <p> {
                    <>
                    <h1>Title:
                    <br></br>
                    {props.loadedRecipes.title}
                    </h1>
                    

                    <h1> Spoon ID number:
                    <br></br>
                    {props.loadedRecipes.id}
                    </h1>

                    <h1>Cook Time:
                    <br></br>
                    {props.loadedRecipes.readyInMinutes}
                    </h1>

                    <h1>servings:
                    <br></br>
                    {props.loadedRecipes.servings}

                    </h1>
                    <h1>Step 1:
                    <br></br>
                    {props.loadedRecipes.analyzedInstructions[0].steps[0].step}
                    </h1>
                    
                    <h1>Ingredients:
                    <br></br>
                    {props.loadedRecipes.ingredients}
                    </h1>
                    
                    <h1> Missed Ingredients:
                    <br></br>
                    {props.loadedRecipes.usedIngredientCount}
                    </h1>
                    
                    <h1> Used Ingredient Count:
                    <br></br>
                    {props.loadedRecipes.usedIngredientCount}
                    </h1>
                    
                    
                    <h1> Weight Watcher Smart Points:
                    <br></br>
                    {props.loadedRecipes.weightWatcherSmartPoints}
                    </h1>
                    {/* {props.loadedRecipes.loadedRecipes.extendedIngredients} */}
                    
                    
                    </>
                    }
                </p>
                    :
                    <p>"null"</p>}
                    {/* {console.log('NewMealForm -> render -> this.state.image_url', this.state.image_url)}
                    {console.log('NewMealForm -> render -> this.state.category', this.state.category)} */}
            </form>
{console.log('🚀 ~ file: RecipeSearch.js ~ line 51 ~ props.loadedRecipes', props.loadedRecipes)}
{console.log('🚀 ~ file: RecipeSearch.js ~ line 53 ~ props.loadedRecipes.loadedRecipes', props.loadedRecipes)}


        </Fragment>
    )
}

const mapStateToProps = state => {
    console.log('state.loadRecipes', state.loadRecipesReducer);
    console.log('state.loadRecipes', state.loadRecipesReducer.loadedRecipes);
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
