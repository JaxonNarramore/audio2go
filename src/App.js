import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import './App.css';
import Home from './Components/Home'
import Estimate from './Components/Estimate'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/estimate' component={Estimate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
