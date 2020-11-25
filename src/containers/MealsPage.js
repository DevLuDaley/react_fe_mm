import React, { Component } from 'react'
import fetchMeals from '../actions/fetchMeals'
import MealsList from '../components/MealList';
import NewMealForm from '../components/NewMealForm';


class MealsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    //   componentDidMount(){
    //     // this.props.fetchMeals()
    // }
    render() { 
        return (<>
        <p> Meals Page</p>
        <NewMealForm meals={this.props.meals}/>
        <MealsList meals={this.props.meals}/>
         </>  );
    }
}
 
export default MealsPage;