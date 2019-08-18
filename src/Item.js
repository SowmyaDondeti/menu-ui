import React from 'react';

class Item extends React.Component {
    render() {
        const{item:{name, description, price, pictureUrl}} = this.props;
      return (
          
        <div >
        <li style = {{fontFamily: 'Comic Sans MS', fontSize: 15}} > {name} {description} ${price}</li>
        <img style = {{width:500, height: 300}} src={pictureUrl} alt="new"/>
        <div/>
        </div>
      );
    }
  }

export default Item;