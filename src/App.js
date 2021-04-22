import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Beer from './pages/Beer';
import SearchBreweries from './components/SearchBreweries/SearchBreweries';
import Footer from './components/Footer/Footer';

{/* Renders all the components
    The heart of this application
*/}
function App() {
  return (
  <>
  <Router>
    <Navbar/>
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path='/Beer' component={Beer} />
      </Switch>
  </Router>
  </>
  );
}

export default App;
