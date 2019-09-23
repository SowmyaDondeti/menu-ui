import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';

const menuStyle = {fontWeight:'bold',
 fontSize:'20px'
}
class AddMenuItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description:'',
            price:'',
            pictureUrl:'',
            category:'',
            itemType:'',
            spiceLevel:''};
    }
    handleChange = ({target:{name, value}})=>{
        this.setState({ [name] : value});
    }

    
    handleSubmit=(event)=> {
      event.preventDefault();
      const{name,description,price,pictureUrl,category,type,spiceLevel} = this.state;
      const item = {
        name, description, price, pictureUrl, category, type,spiceLevel
      };
      axios.post(`http://localhost:8080/items`,
      item)
      .then((res) => {
        console.log(res);})
    }

    
    render(){
        return(
    <Router>
      <form onSubmit={this.handleSubmit} style={menuStyle}>
        <label> 
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>  
        <br/>
        <label>
          Description:
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Price:
          <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Picture_Url:
          <input type="text" name="pictureUrl" value={this.state.pictureUrl} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Category:
          <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Type:
          <input type="text" name="type" value={this.state.type} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Spice_Level:
          <input type="text" name="spiceLevel"value={this.state.spiceLevel} onChange={this.handleChange} />
        </label>
        <br/>
         <input type="submit" value="Add"  style={menuStyle}/>  
      </form>
    </Router>
        );
      }
}
export default AddMenuItem;