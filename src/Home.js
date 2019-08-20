import React, { Component} from "react";
import mainPageImage from "./images/mainPageImage.jpg";
import { BrowserRouter as Router} from 'react-router-dom';

class Home extends Component{

  render(){
    return(
<Router>
  <div>
  <p style = {{fontStyle: 'italic', fontWeight: 'bold', fontSize:''}}>In this website
     you can find different varieties of Indian dishes.</p>
    <img style={{alignContent:'center', width: '100%'}}src={mainPageImage}/>
     </div>
</Router>
    );
  }
}

export default Home;