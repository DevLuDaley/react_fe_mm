export function loadRecipes() {
    // ! thunk allows us to use dispatch here
    // ! bring in dispatch so that we can async if not the connect will handle synchronously
    // fetch('https://be-hoop-drills.herokuapp.com/api/v1/recipes'
    const baseUrl = 'https://api.spoonacular.com/'
    const spoonApiKey = 'apiKey=7348ed883fef4febbd04a7cf6e85abdd'
    const loadUrl = baseUrl + 'complexSearch?' + spoonApiKey + '&query=pasta&fillIngredients=true&addRecipeInformation=true&instructionsRequired=true&number=1&offset=5'
    const bareUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7348ed883fef4febbd04a7cf6e85abdd&query=pasta&fillIngredients=true&addRecipeInformation=true&instructionsRequired=true&number=1&offset=5'

    const spoonSearchUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7348ed883fef4febbd04a7cf6e85abdd&query=pasta&fillIngredients=true&addRecipeInformation=true&instructionsRequired=true&number=5&offset=8'

    return(dispatch) => { 
        // fetch(loadUrl,
        fetch(spoonSearchUrl,
        // {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        // }
        )
        .then(resp => resp.json())
        // .then(recipes => 
        //     console.log('🚀 ~ file: loadRecipes.js ~ line 20 ~ return ~ recipes', recipes))
            .then(data => dispatch({
            type: 'LOAD_RECIPES', payload: data
        }))
    }
        
// .then(jsonResponse =>
//   console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}

// return action.payload
// export loadRecipes