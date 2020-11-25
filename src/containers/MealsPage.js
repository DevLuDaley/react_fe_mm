import React, { Component } from 'react'
import fetchMeals from '../actions/fetchMeals'
import MealsList from '../components/MealList';
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
        <MealsList meals={this.props.meals}/>
         </>  );
    }
}
 
export default MealsPage;