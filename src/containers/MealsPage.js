import React, { Component } from 'react'
import fetchMeals from '../actions/fetchMeals'
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
         </>  );
    }
}
 
export default MealsPage;