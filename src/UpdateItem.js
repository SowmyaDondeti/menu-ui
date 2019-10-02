import React from "react";
import Popup from "reactjs-popup";
import axios from "axios";

const updateStyle = { display: "inline-block", width: "13%", padding: 5 };

class UpdateItem extends React.Component {
	state = { item: this.props.item };
	handleChange = ({ target: { name, value } }) => {
		console.log(name, value);
		const item = this.state.item;
		this.setState({ item: { ...item, [name]: value } });
	};
	handleSubmit = () => {
		const { item } = this.state;
		axios
			.put(`https://restaurant--menu.herokuapp.com/items/${item.id}`, item, {
				headers: { "Content-Type": "application/json" },
			})
			.then(res => {
				this.setState({ open: false });
				this.props.onUpdate(item);
			});
	};
	render() {
		const {
			item: {
				name,
				description,
				price,
				pictureUrl,
				category,
				type,
				spiceLevel,
			},
		} = this.state;

		return (
			<Popup
				trigger={open => {
					return <button style={{ backgroundColor: "#106141" }}>Update</button>;
				}}
				modal
				closeOnDocumentClick={false}
			>
				{close => (
					<div
						style={{
							padding: 10,
							backgroundColor: "#d1e97d",
							fontWeight: "bold",
						}}
					>
						<label style={updateStyle}>Name:</label>
						<input
							type='text'
							name='name'
							value={name}
							onChange={this.handleChange}
						/>
						<br />
						<label style={updateStyle}>Description:</label>
						<input
							type='text'
							name='description'
							value={description}
							onChange={this.handleChange}
						/>
						<br />
						<label style={updateStyle}>Price:</label>
						<input
							type='text'
							name='price'
							value={price}
							onChange={this.handleChange}
						/>
						<br />
						<label style={updateStyle}>Picture_Url:</label>
						<input
							type='text'
							name='pictureUrl'
							value={pictureUrl}
							onChange={this.handleChange}
						/>
						<br />
						<label style={updateStyle}>Category:</label>
						<input
							type='text'
							name='category'
							value={category}
							onChange={this.handleChange}
						/>
						<br />
						<label style={updateStyle}>Type:</label>
						<input
							type='text'
							name='type'
							value={type}
							onChange={this.handleChange}
						/>
						<br />
						<label style={updateStyle}>SpiceLevel:</label>
						<input
							type='text'
							name='spiceLevel'
							value={spiceLevel}
							onChange={this.handleChange}
						/>
						<br />
						<input
							style={{ fontWeight: "bold", marginRight: "20px" }}
							type='button'
							value='Submit'
							onClick={() => {
								this.handleSubmit();
								close();
							}}
						/>
						<input
							style={{ fontWeight: "bold" }}
							type='button'
							value='Cancel'
							onClick={() => {
								close();
							}}
						/>
					</div>
				)}
			</Popup>
		);
	}
}
export default UpdateItem;
