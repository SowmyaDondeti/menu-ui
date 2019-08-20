import React from 'react';
const itemStyle = {fontFamily: 'Comic Sans MS', fontSize: 15};
const imageStyle = {width:500, height: 300};

class Item extends React.Component {

  

    render() {
        const{item:{name, description, price, pictureUrl}} = this.props;
      return (
          
        <div >
        <li style = {itemStyle} > {name} {description} ${price}</li>
        <img style = {imageStyle} src={pictureUrl} alt="new"/>
        <div/>
        </div>
      );
    }
  }

export default Item;