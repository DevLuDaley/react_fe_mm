// import logo from './logo.svg';
import './App.css';

import MealsContainer from './containers/MealsContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Navbar/>
      <MealsContainer/>
    </div>
  );
}

export default App;
