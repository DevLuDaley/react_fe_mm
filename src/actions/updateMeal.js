export const updateMeal = (data) => {
console.log('updateMeal -> data', data);
// console.log('updateMeal -> data.id', data.id);
// debugger
// ! return dispatch so that we have access to dispatch function, thanks to thunk.
// ! thunk is allowing us to pass in dispatch to the thunk function that we have inside of our action creator
// ${id}
    return(dispatch) => {
fetch(`http://localhost:3000/api/v1/meals/${data.id}`, {
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(data)
})
.then(resp => resp.json())

// .then(meal => console.log('🚀 ~ file: updateMeal.js ~ line 22 ~ return ~ meal', meal))
.then(meal => dispatch({
    type: 'UPDATE_MEAL',
    payload: meal
}))
// debugger
    }
};
// create index
// read index
// update index/id
// delete index/id