export const updateMeal = (data) => {
// debugger
// ! return dispatch so that we have access to dispatch function, thanks to thunk.
// ! thunk is allowing us to pass in dispatch to the thunk function that we have inside of our action creator

    return(dispatch) => {
fetch('http://localhost:3000/api/v1/meals', {
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
})
.then(res => res.json())
.then(meal => dispatch({
    type: 'ADD_MEAL', 
    payload: meal
}))
    }
};