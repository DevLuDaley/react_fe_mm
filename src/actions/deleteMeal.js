export const deleteMeal = (data) => {
    const baseUrl = 'http://localhost:3000/api/v1/meals/'
    console.log('🚀 ~ file: deleteMeal.js ~ line 3 ~ deleteMeal ~ baseUrl', baseUrl);
    const mealUrl = (baseUrl + data.id)
    console.log('🚀 ~ file: deleteMeal.js ~ line 4 ~ deleteMeal ~ mealUrl', mealUrl);

    console.log('🚀 ~ file: deleteMeal.js ~ line 8 ~ deleteMeal ~ data.id', data.id);
    console.log('🚀 ~ file: deleteMeal.js ~ line 10 ~ return ~ data', data);
    return (dispatch) => {

        return fetch(mealUrl, {
        method: 'DELETE'
        })
        .then(response => response.json())
        .then(meal => dispatch({type: 'DELETE_MEAL', payload: meal}))
    }
};
// console.log('deleteMeal -> dispatch', dispatch);

export default deleteMeal;

// console.log('deleteMeal  is WORKING');
// debugger
// ! return dispatch so that we have access to dispatch function, thanks to thunk.
// ! thunk is allowing us to pass in dispatch to the thunk function that we have inside of our action creator