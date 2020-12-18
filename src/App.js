import React, { Component } from 'react';
import { connect } from 'react-redux'
// import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer'
import mealsReducer from './reducers/mealsReducer'
import recipesReducer from './reducers/recipesReducer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Header from './components/Header'
// import MealsContainer from './containers/MealsContainer'
// import RecipesContainer from './containers/RecipesContainer'
class App extends Component {
  constructor() {
    super();
    this.state = { meals:[], recipes:[] }
  }
  render() { 
    // return (  );
  // }
// }
// export default App;
// function App() {
  console.log('🚀 ~ file: App.js ~ line 29 ~ App ~ this.props.meals', this.props.meals)
  return (
    <div className="App">
        {/* <Header/> */}
        {/* <Navbar/> */}
        {/* <Navbar/> */}
        <MainContainer meals={this.props.meals} recipes={this.props.recipes} className='main-container'/>
        {/* <MealsContainer/> */}
        {/* <RecipesContainer/> */}
        {/* <Footer id="footer"/> */}
    </div>
  );
}
}

const mapStateToProps = (state) => {
console.log('🚀 ~ file: App.js ~ line 38 ~ mapStateToProps ~ state', state);
console.log('🚀 ~ file: App.js ~ line 38 ~ mapStateToProps ~ state.mealsReducer.meals', state.mealsReducer.meals);
  return {
    meals: state.mealsReducer.meals,
    recipes: state.recipesReducer.recipes
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     meals: state.mealsReducer,
//     recipes: state.recipesReducer
//   }
// }
export default connect(mapStateToProps,null)(App);
