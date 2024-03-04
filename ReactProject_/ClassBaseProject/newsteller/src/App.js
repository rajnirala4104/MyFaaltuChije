import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsContainer from './components/NewsContainer';

//this is class which is extened by React class "component"
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <NewsContainer/>
      </>
    )
  }
}

