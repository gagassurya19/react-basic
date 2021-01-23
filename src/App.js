import React, { Component } from 'react'
import '../src/assets/css/style.css'
import 'materialize-css/dist/css/materialize.min.css'

import Router from '../src/Router'
import Navbar from '../src/parts/Navbar'
import Footer from '../src/parts/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Router/>
        <Footer/>
      </div>
    )
  }
}
