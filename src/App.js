import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import './App.css';
import Home from './Components/Home'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
