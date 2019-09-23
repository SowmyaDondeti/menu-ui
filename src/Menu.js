import React,{Component} from 'react';
import axios from 'axios';
import Item from './Item';

const itemStyle = {fontWeight:'bold',
paddingLeft:'15px',
fontSize:'15px'
}
 class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
          allItems:[],
          menuItems:[],
           searchText:'',
           veg:false,
           non_veg:false,
           vegan: false,
           high:false,
           medium:false,
           low:false};
      }
    
      handleChange = (event)=>{
        const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }, ()=>{
      const searchItems = this.state.searchText !== '' ? this.state.allItems.filter(item =>item.name.toLowerCase().includes(this.state.searchText.toLowerCase())): this.state.allItems;
      this.setState({menuItems:searchItems});

      if(name==='veg' && value){
        
        const vegItems = this.state.menuItems.filter(item=>item.type==='Veg');
        this.setState({menuItems:vegItems});
      
    }
    if(name==='non_veg' && value){
              const nonVegItems = this.state.menuItems.filter(item=>item.type==='Non-Veg');
        this.setState({menuItems:nonVegItems});
            }
     if(name==='high' && value){
       const highSpiceItems=this.state.menuItems.filter(item=>item.spiceLevel==='High');
       this.setState({menuItems:highSpiceItems});
     }   
     if(name==='medium'&& value){
       if(this.state.high)    {
          const mediumSpiceItems=this.state.menuItems.filter(item=>item.spiceLevel==='Medium');
          const spiceItems= [...this.state.menuItems, ...mediumSpiceItems];
          this.setState({menuItems:spiceItems});
       }
    }

    });
    
      
    }
      
  
    componentDidMount() {
      axios.get(`https://restaurant--menu.herokuapp.com/items/get`)
        .then((res) => {
          const allItems = res.data;
          this.setState({ allItems, menuItems:allItems });
        })
    }
  
    render() {

      return (
        <div>
        <input type="text" name= "searchText" placeholder="Search.." onChange={this.handleChange} />
        <label style={itemStyle}>
          Type: 
          <input type="checkbox" name="veg" checked={this.state.veg} onChange={this.handleChange} />
          Veg
        </label>
        <label style={itemStyle}>  
          <input type="checkbox" name="non_veg" checked={this.state.non_veg} onChange={this.handleChange} />
          Non-Veg
        </label>
        {/* <label style={itemStyle}>
          SpiceLevel: 
          <input type="checkbox" name="high" checked={this.state.high} onChange={this.handleChange} />
          High
        </label>
        <label style={itemStyle}>  
          <input type="checkbox" name="medium" checked={this.state.medium} onChange={this.handleChange} />
          Medium
        </label>
        <label style={itemStyle}>  
          <input type="checkbox" name="low" checked={this.state.low} onChange={this.handleChange} />
          Low
        </label> */}
        <br/>
        <div style={{columns: '',  padding: 50}}>
      <div style= {{flex:1}}>{ this.state.menuItems.map((item, idx)=><Item key={idx} item = {item} /> )}</div>
        </div>
        </div>
      )
    }
  }

  export default Menu;