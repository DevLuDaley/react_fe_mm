// import logo from './logo.svg';
import './App.css';

import MainContainer from './containers/MainContainer'
// import MealsContainer from './containers/MealsContainer'
// import RecipesContainer from './containers/RecipesContainer'
import Navbar from './components/Navbar'
// import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        <Navbar/>
        <MainContainer/>
        {/* <MealsContainer/> */}
        {/* <RecipesContainer/> */}
        <Footer/>
    </div>
  );
}

export default App;
