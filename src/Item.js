import React from 'react';
const itemStyle = {fontFamily: 'Comic Sans MS', fontSize: 15};
const imageStyle = {width:200, height: 100, margin:10, border: '2px solid red'};

class Item extends React.Component {

    render() {
        const{item:{name, description, price, pictureUrl}} = this.props;
      return (
          
        <div style={{display: 'flex', flexDirection:'row', alignContent : 'center', width: 450, paddingTop: 10, border: '2px solid #106141'}}>
        <div style={{display: 'flex', flex:1}}>
        <img style = {imageStyle} src={pictureUrl} alt="new"/>
        </div>
        <div style={{display: 'flex', flex:1, flexDirection:'column',}}>
        <div style = {itemStyle} > {name} ${price}</div> 
        <div style = {itemStyle} > {description}</div>
        </div>
        </div>
      );
    }
  }

export default Item;