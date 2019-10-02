import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

const menuStyle = { fontWeight: "bold", fontSize: "20px" };
const itemStyle = { display: "inline-block", width: "8%", padding: 5 };
class AddMenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			price: "",
			pictureUrl: "",
			category: "",
			itemType: "",
			spiceLevel: "",
		};
	}
	handleChange = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	};

	handleSubmit = () => {
		const {
			name,
			description,
			price,
			pictureUrl,
			category,
			type,
			spiceLevel,
		} = this.state;
		const item = {
			name,
			description,
			price,
			pictureUrl,
			category,
			type,
			spiceLevel,
		};
		axios
			.post(`https://restaurant--menu.herokuapp.com/items`, item)
			.then(res => {
				console.log(res);
			});
	};

	render() {
		return (
			<Router>
				<label style={itemStyle}> Name:</label>
				<input
					type='text'
					name='name'
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<br />
				<label style={itemStyle}>Description:</label>
				<input
					type='text'
					name='description'
					value={this.state.description}
					onChange={this.handleChange}
				/>
				<br />
				<label style={itemStyle}>Price:</label>
				<input
					type='text'
					name='price'
					value={this.state.price}
					onChange={this.handleChange}
				/>
				<br />
				<label style={itemStyle}>Picture_Url:</label>
				<input
					type='text'
					name='pictureUrl'
					value={this.state.pictureUrl}
					onChange={this.handleChange}
				/>
				<br />
				<label style={itemStyle}>Category:</label>
				<input
					type='text'
					name='category'
					value={this.state.category}
					onChange={this.handleChange}
				/>
				<br />
				<label style={itemStyle}>Type:</label>
				<input
					type='text'
					name='type'
					value={this.state.type}
					onChange={this.handleChange}
				/>
				<br />
				<label style={itemStyle}>Spice_Level:</label>
				<input
					type='text'
					name='spiceLevel'
					value={this.state.spiceLevel}
					onChange={this.handleChange}
				/>
				<br />
				<input
					type='button'
					value='Add'
					style={menuStyle}
					onClick={() => {
						this.handleSubmit();
						alert("Item added succesfully");
					}}
				/>
			</Router>
		);
	}
}
export default AddMenuItem;
