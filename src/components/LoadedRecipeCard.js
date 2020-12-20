import React from 'react'

const LoadedRecipeCard = (props) => {
console.log('🚀 ~ file: loadedRecipeCard.js ~ line 4 ~ LoadedRecipeCard ~ props', props);

    //? this component will take in an array of objects and return a loadedRecipeCard for each of the spoomn api results.

    return (
        <> {
                    <>
                    <h1>
                    Now Rendering the Api Search Results
                    <br></br>
                    </h1>
                    
                    <h4>Title:
                    <br></br>
                    {props.loadedRecipes.title}
                    </h4>
                    

                    <h4> Spoon ID number:
                    <br></br>
                    {props.loadedRecipes.id}
                    </h4>

                    <h4>Cook Time:
                    <br></br>
                    {props.loadedRecipes.readyInMinutes}
                    </h4>

                    <h4>servings:
                    <br></br>
                    {props.loadedRecipes.servings}
                    </h4>

                    {/* <h4>Step 4:
                    <br></br>
                    {props.loadedRecipes.analyzedInstructions[0].steps[0].step}
                    </h4> */}
                    
                    <h4>Ingredients:
                    <br></br>
                    {props.loadedRecipes.ingredients}
                    </h4>
                    
                    <h4> Missed Ingredients:
                    <br></br>
                    {props.loadedRecipes.usedIngredientCount}
                    </h4>
                    
                    <h4> Used Ingredient Count:
                    <br></br>
                    {props.loadedRecipes.usedIngredientCount}
                    </h4>
                    
                    
                    <h4> Weight Watcher Smart Points:
                    <br></br>
                    {props.loadedRecipes.weightWatcherSmartPoints}
                    </h4>
                    {/* {props.loadedRecipes.loadedRecipes.extendedIngredients} */}
                    
                    
                    </>
                    }
                </>
    )
}

export default LoadedRecipeCard
