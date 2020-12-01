import React, { Fragment, useState, useEffect } from 'react';

const MealEdit = (props) => {
    var [name, setName] = useState()
    var [category, setCategory] = useState()
    var [url, setUrl] = useState()
    const meals = props.meals

    var mealId = parseInt(window.location.href.replace("http://localhost:3001/meals/", ""))
    console.log('🚀 ~ file: MealEdit.js ~ line 9 ~ MealEdit ~ id', mealId);

    console.log('🚀 ~ file: MealEdit.js ~ line 12 ~ MealEdit ~ props.meals', props.meals);
    var meal = meals.find(meal => meal.id == mealId)
    console.log('🚀 ~ file: MealEdit.js ~ line 8 ~ MealEdit ~ meal', meal);

    var handleEdit = () => {

    }
return(
    <Fragment>
        <form id='update-meal-form' onSubmit={console.log("SUBMITTED")}>
                <label> Meal Name:</label>
                    {/* <input type="text" placeholder={meal.name} value={props.name} name="name" onChange={console.log("CHANGED")}/> */}
                <label> Meal Category:</label> 
                    {/* <input type="text" placeholder='enter category...' value={meal.category} name="category" onChange={console.log("CHANGED")}/> */}
                <label> Meal Url:</label> 
                    {/* <input type="text" placeholder='enter url...' value={meal.url} name="url" onChange={console.log("CHANGED")}/> */}
                <label> Meal Image Url:</label> 
                    {/* <input type="text" placeholder='enter image url...' value={meal.image_url} name="image_url" onChange={console.log("CHANGED")}/> */}
                <label> Meal Cooking Time:</label> 
                    {/* <input type="text" placeholder='enter cooking time...' value={meal.cooking_time} name="cooking_time" onChange={console.log("CHANGED")}/> */}
                        <button type="submit">Update Meal</button>
                    {/* {console.log('NewMealForm -> render -> this.state.image_url', this.state.image_url)}
                    {console.log('NewMealForm -> render -> this.state.category', this.state.category)} */}
            </form>  
                        <button onClick={handleEdit}>Edit</button>
    </Fragment>
)
}

export default MealEdit;