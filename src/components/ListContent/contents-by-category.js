import React from 'react';
import './contents-by-category.scss';

/**
 * View component to display all items in a category
 */
const ContentsByCategory = ({category, items, total, onRemoveItem}) => {
    return (
        <div className="contents-by-category">
            {/**
              * Category title and total
              */}
            <div className="contents-by-category__header">
                <div>{category}</div>
                <div>Total: ${total}</div>
            </div>

            {/**
              * Items in the category
              */}
            <ul>
                {items.map((item, i) => {
                    return (
                        <li className="contents-by-category__item" key={item.id}>
                            <div className="contents-by-category__item__name">
                                {item.name}
                            </div>
                            <div className="contents-by-category__item__value">
                                ${item.value}
                            </div>
                            <span className="contents-by-category__item__remove" onClick={() => onRemoveItem(item.id)}>
                                <i className="fa fa-times"></i>
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ContentsByCategory;