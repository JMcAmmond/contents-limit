import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions/index';
import './style.scss';

const INITAL_STATE = {
	name: '',
	value: '',
	category: ''
};

const CATEGORIES = [
	'Electronics', 'Clothing', 'Kitchen', 'Bathroom', 'Bedroom'
];

class AddContent extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITAL_STATE }
	}

	/**
	 * When an input or select box is changed update the state
	 */
	onItemChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	/**
	 * When the user clicks the 'Add item' button, pass information to redux action and reset component state
	 */
	onAddItem = () => {
		this.props.onAddItem({
			name: this.state.name,
			value: parseFloat(this.state.value).toFixed(2),
			category: this.state.category
		});
		
		this.setState({ ...INITAL_STATE });
	}

	render() {
		/**
		 * Check is form is valid
		 */
		const isInvalid = 
			this.state.name === '' ||
			this.state.value === '' || 
			this.state.category === '';

		return (
			<form className="add-content">
				<h3>Add an item to the contents limit list</h3>

				{/**
				  * Name input
				  */}
				<label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={this.state.name} onChange={this.onItemChange}/>

				{/**
				  * Value input
				  */}
				<label htmlFor="value">Value</label>
				<input id="value" type="number" name="value" value={this.state.value} onChange={this.onItemChange}/>

				{/**
				  * Category select
				  */}
				<label htmlFor="category">Category</label>
				<select id="category" value={this.state.category} name="category" onChange={this.onItemChange}>
					<option value="" disabled>Select a category</option>
					{CATEGORIES.map((cat, i) => {
						return (
							<option key={i} value={cat}>{cat}</option>
						)
					})}
				</select>

				{/**
				  * Add item button
				  */}
				<button type="button" onClick={this.onAddItem} disabled={isInvalid}>
					Add Item
				</button>
			</form>
		)
	}
}

/**
 * Map dispatch to props
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(AddContent);
