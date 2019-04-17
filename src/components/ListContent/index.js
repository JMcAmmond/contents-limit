import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions/index';
import ContentsByCategory from './contents-by-category';
import './style.scss';

/**
 * ListContent checks redux store for items and then renders them into categories
 */
class ListContent extends Component {

    /**
     * Seperate categories and call the 'ContentsByCategory' component
     */
    renderCategories = (items) => {
        //Stores a list of components
        let lists = [];

        for(let key in items) {
            lists.push(
                <ContentsByCategory
                    key={key}
                    category={key}
                    total={items[key].total}
                    items={items[key].items}
                    onRemoveItem={this.props.onRemoveItem}
                />
            )
        }

        return lists;
    }

	render() {
		let sortedItems = {};
        let listTotal = 0;

        /**
         * Sort the items into a new object using the category as the key
         */
        this.props.items.forEach((item) => {
            if(sortedItems.hasOwnProperty(item.category)) {
                // Category exists in object. Push new item and calculate total
                sortedItems[item.category].items.push(item);
                sortedItems[item.category].total = sortedItems[item.category].total + parseFloat(item.value);
            } else {
                // New category in object. Add key, item, and total
                sortedItems[item.category] = {
                    items: [item],
                    total: parseFloat(item.value)
                };
            }

            //Keep track of the total value of all the items
            listTotal = listTotal + parseFloat(item.value);
		});
		
		return (
			<div className="list-content">
                {/**
                  * There are items to display
                  */}
				{this.props.items.length > 0 && (
					<div className="box">
						<span className="list-content__items-total">All Items Total: ${listTotal}</span>
						{this.renderCategories(sortedItems)}
					</div>
				)}

                {/**
                  * There are no items to display
                  */}
				{this.props.items.length === 0 && (
					<div className="list-content__no-items">
						<h1>No items available</h1>
						<p>Start adding some items and they will appear here :)</p>
					</div>
				)}
			</div>
		)
	}
}

/**
 * Map dispatch to props
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {
    items: state.items
}}, mapDispatchToProps)(ListContent);