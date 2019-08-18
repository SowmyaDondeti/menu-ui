import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Menu from './Menu'
import "./Scrollmenu.css"

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="scrollmenu">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
        <Menu/>
      </div>
    );
  }
}

export default App;