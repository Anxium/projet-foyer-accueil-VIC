import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import './App.scss'

// Import components globaux
import Header from './components/Header'
import Footer from './components/Footer'
import ContainerRoute from './components/ContainerRoute'

class App extends Component {

  componentDidMount() {
    // Here is where you need to put the logic for your auth system to check if the user is authenticated or not
    const isUserAuth = localStorage.getItem('isAuth') ? localStorage.getItem('isAuth') : localStorage.setItem('isAuth', false); 
    console.log(isUserAuth ? 'The user is connected.' : 'The user is not connected.')
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <div className="container-fluid wrapper-content">
            <ContainerRoute />
          </div>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App
