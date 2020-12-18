export const updateRecipe = (data) => {
// console.log('updateRecipe -> data', data);
// console.log('updateRecipe -> data.id', data.id);
// debugger
// ! return dispatch so that we have access to dispatch function, thanks to thunk.
// ! thunk is allowing us to pass in dispatch to the thunk function that we have inside of our action creator
// ${id}
    return(dispatch) => {
fetch(`http://localhost:3000/api/v1/recipes/${data.id}`, {
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(data)
})
.then(resp => resp.json())

// .then(recipe => console.log('🚀 ~ file: updateRecipe.js ~ line 22 ~ return ~ recipe', recipe))
.then(recipe => dispatch({
    type: 'UPDATE_RECIPE',
    payload: recipe
}))
// debugger
    }
};
