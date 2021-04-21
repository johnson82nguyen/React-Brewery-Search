import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Beer from './components/pages/Beer';
import SearchBeers from './components/SearchBeers';
import Footer from './components/Footer';

{/* Renders all the applications */}
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
