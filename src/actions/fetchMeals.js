export function fetchMeals() {
    // ! thunk allows us to use dispatch here
    // ! bring in dispatch so that we can async if not the connect will handle synchronously
    return(dispatch) => { 
        fetch('http://localhost:3000/api/v1/meals'
        // fetch('https://be-hoop-drills.herokuapp.com/api/v1/meals'
        , {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        // fetch('http://localhost:8080/herokuapp.com/https://hoop-drills.herokuapp.com/api/v1/meals')
        // fetch('https://cors-anywhere.herokuapp.com/https://hoop-drills.herokuapp.com/api/v1/meals')
        // fetch('https://cors-anywhere.hoop-drills.herokuapp.com/api/v1/meals')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_MEALS', payload: data}
        ))
    }
        
// .then(jsonResponse =>
//   console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}

// return action.payload
// export fetchMeals