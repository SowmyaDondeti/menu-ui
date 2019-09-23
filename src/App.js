import React, { Component} from "react";
import Menu from './Menu';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import AddMenuItem from "./AddMenuItem";

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
    this.state = {homeHoverd: false, menuHoverd: false,addHoverd: false};
  }

  toggleHomeHover = () =>{
    this.setState({homeHoverd: !this.state.homeHoverd})
  }

  toggleMenuHover = () =>{
    this.setState({menuHoverd: !this.state.menuHoverd})
  }

  toggleAddHover = () =>{
    this.setState({addHoverd: !this.state.addHoverd})
  }

  handleInputChange = (event) => {
    const {target:{value}} = event;
    this.setState({searchText:value});
    
    }

  render(){
  const homeLinkStyle = this.state.homeHoverd? linkStyleHover: linkStyle;
  const menuLinkStyle = this.state.menuHoverd? linkStyleHover: linkStyle;
  const addLinkStyle = this.state.addHoverd? linkStyleHover: linkStyle;


    return(
<div>
<Router >
  <div  style={{ backgroundColor: '#106141',
    overflow: 'auto',
    whiteSpace: 'nowrap',
    alignContent: 'flex-end'}}>
  <Link style = {homeLinkStyle} onMouseEnter={this.toggleHomeHover} onMouseLeave={this.toggleHomeHover} to="/">Home</Link>
  <Link style = {menuLinkStyle} onMouseEnter={this.toggleMenuHover} onMouseLeave={this.toggleMenuHover}to="/menu">Menu</Link>
  <Link style = {addLinkStyle} onMouseEnter={this.toggleAddHover} onMouseLeave={this.toggleAddHover}to="/addItem">AddMenuItem</Link>

  </div>
  <div>
  <Route path = "/" exact component={Home}/>
  <Route path = "/menu" exact render = {(props)=> <Menu {...props}/>}/>
  <Route path = "/addItem" exact component={AddMenuItem}/>

  </div>
</Router>

</div>
    );
  }
}

export default App;