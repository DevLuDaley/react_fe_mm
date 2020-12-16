import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { connect , useSelector } from 'react-redux'
// import UpdateRecipeForm from '../forms/UpdateRecipeForm'

const Recipe = (props) => {
    return(
        <Fragment>
        {
            props.recipes
            ?
                <p>
                    Current Recipe Info:
                    {
                        props.recipes.map(
                            recipe => 
                                recipe.id == props.match.params.id
                                ?
                                    <p>
                                        <br></br>
                                            id: {recipe.id}
                                        <br></br>
                                            category: {recipe.category} 
                                        <br></br>
                                            name: {recipe.name} 
                                        <br></br>
                                            url: {recipe.url}
                                        <br></br>
                                            image_url: {recipe.image_url} 
                                        <br></br>
                                            cooking_time: {recipe.cooking_time} minutes
                                        <br></br>
                                        <br></br>
                                    </p>
                                : null
                        )
                    }
                </p>
            : 'no recipe here bub' 
            }
        </Fragment>
    )
}
    // export default connect(mapStateToProps)(Recipe);
    export default Recipe;