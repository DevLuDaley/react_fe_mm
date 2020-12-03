export function fetchMeals() {
    // ! thunk allows us to use dispatch here
    // ! bring in dispatch so that we can async if not the connect will handle synchronously
    // fetch('https://be-hoop-drills.herokuapp.com/api/v1/meals'
    return(dispatch) => { 
        fetch('http://localhost:3000/api/v1/meals', 
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_MEALS', payload: data
        }))
    }
        
// .then(jsonResponse =>
//   console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}

// return action.payload
// export fetchMeals