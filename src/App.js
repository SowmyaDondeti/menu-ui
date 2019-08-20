import React, { Component} from "react";
import Menu from './Menu';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';

const linkStyle = { display: 'inline-block',
  color: 'white',
  padding: '25px',
  textDecoration: 'none'}
const linkStyleHover = {display: 'inline-block',
color: 'white',
padding: '25px',
textDecoration: 'none',
backgroundColor:'#777'} 
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {homeHoverd: false, menuHoverd: false};
  }

  toggleHomeHover = () =>{
    this.setState({homeHoverd: !this.state.homeHoverd})
  }

  toggleMenuHover = () =>{
    this.setState({menuHoverd: !this.state.menuHoverd})
  }

  render(){

  const homeLinkStyle = this.state.homeHoverd? linkStyleHover: linkStyle;
  const menuLinkStyle = this.state.menuHoverd? linkStyleHover: linkStyle;


    return(
<div>
<Router >
  <div  style={{ backgroundColor: '#106141',
    overflow: 'auto',
    whiteSpace: 'nowrap',
    alignContent: 'flex-end'}}>
  <Link style = {homeLinkStyle} onMouseEnter={this.toggleHomeHover} onMouseLeave={this.toggleHomeHover} to="/">Home</Link>
  <Link style = {menuLinkStyle} onMouseEnter={this.toggleMenuHover} onMouseLeave={this.toggleMenuHover}to="/menu">Menu</Link>
  <input type="text" placeholder="Search.." ></input> 
  </div>
  <div>
  <Route path = "/" exact component={Home}/>
  <Route path = "/menu" component= {Menu}/>
  </div>
</Router>

</div>
    );
  }
}

export default App;