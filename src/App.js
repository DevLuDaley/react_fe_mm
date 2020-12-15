// import logo from './logo.svg';
import './App.css';

import MealsContainer from './containers/MealsContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MealsContainer/>
    </div>
  );
}

export default App;
