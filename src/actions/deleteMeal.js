export const deleteMeal = (mealData) => {
    const baseUrl = 'http://localhost:3000/api/v1/meals/'
    const deleteMealUrl = (baseUrl + mealData.id)
    // console.log('🚀 ~ file: deleteMeal.js ~ line 3 ~ deleteMeal ~ baseUrl', baseUrl);
    // console.log('🚀 ~ file: deleteMeal.js ~ line 5 ~ deleteMeal ~ mealUrl', mealUrl);
    // console.log('🚀 ~ file: deleteMeal.js ~ line 7 ~ deleteMeal ~ data.id', mealData.id);
    // console.log('🚀 ~ file: deleteMeal.js ~ line 8 ~ return ~ data', mealData);
    return (dispatch) => {
        fetch(deleteMealUrl, { 
                method: 'DELETE'
    })
        .then(response => response.json())
        .then(mealId => dispatch({type: 'DELETE_MEAL', payload: mealId}))
    }
};

export default deleteMeal;