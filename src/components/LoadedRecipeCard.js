import React from 'react'

const loadedResultCard = (props) => {
console.log('🚀 ~ file: loadedResultCard.js ~ line 4 ~ loadedResultCard ~ props', props);

    //? this component will take in an array of objects and return a loadedResultCard for each of the spoomn api results.

    return (
        <> {
                    <>
                    <h1>
                    {props.loadedResults.title}
                    <br></br>
                    </h1>
                    
                    <h4>Title:
                    <br></br>
                    {props.loadedResults.title}
                    </h4>
                    

                    <h4> Spoon ID number:
                    <br></br>
                    {props.loadedResults.id}
                    </h4>

                    <h4>Cook Time:
                    <br></br>
                    {props.loadedResults.readyInMinutes}
                    </h4>

                    <h4>servings:
                    <br></br>
                    {props.loadedResults.servings}
                    </h4>

                    {/* <h4>Step 4:
                    <br></br>
                    {props.loadedResults.analyzedInstructions[0].steps[0].step}
                    </h4> */}
                    
                    <h4>Ingredients:
                    <br></br>
                    {props.loadedResults.ingredients}
                    </h4>
                    
                    <h4> Missed Ingredients:
                    <br></br>
                    {props.loadedResults.usedIngredientCount}
                    </h4>
                    
                    <h4> Used Ingredient Count:
                    <br></br>
                    {props.loadedResults.usedIngredientCount}
                    </h4>
                    
                    
                    <h4> Weight Watcher Smart Points:
                    <br></br>
                    {props.loadedResults.weightWatcherSmartPoints}
                    </h4>
                    {/* {props.loadedResults.loadedResults.extendedIngredients} */}
                    
                    
                    </>
                    }
                </>
    )
}

export default loadedResultCard
