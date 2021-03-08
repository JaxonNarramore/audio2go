import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import './App.css';
import Home from './Components/Home'
import Quote from './Components/Quote'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/quote' component={Quote} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
