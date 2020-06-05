import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css'
import './variable.scss'
//Components
import Nav from './Components/Common/Nav/Nav.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import History from './Components/Pages/History/History.jsx'
import Footer from './Components/Common/Footer/Footer.jsx'
import Alert from './Components/Common/Alert/Alert.jsx'

function App() {

  const { errorMessage, } = useSelector((state) => state.commonReducer)

  
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
      <Footer />

      <Alert errorMessage={errorMessage} />
    </div>
  );
}

export default App
