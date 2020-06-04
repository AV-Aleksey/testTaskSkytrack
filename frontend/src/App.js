import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
//Components
import Nav from './Components/Common/Nav.jsx'
import Home from './Components/Pages/Home.jsx'
import History from './Components/Pages/History.jsx'

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App
