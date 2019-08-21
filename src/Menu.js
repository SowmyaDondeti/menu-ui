import React from 'react';
import axios from 'axios';
import Item from './Item';


 class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {menuItems: []};
      }
  
  
    componentDidMount() {
      axios.get(`https://restaurant--menu.herokuapp.com/items/get`)
        .then(res => {
          const menuItems =this.props.searchText !==''? res.data.filter(item =>item.name.toLowerCase().includes(this.props.searchText.toLowerCase())) : res.data;
          this.setState({ menuItems });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.menuItems.map((item, idx)=> <Item key={idx} item = {item}/>)}
        </ul>
      )
    }
  }

  export default Menu;