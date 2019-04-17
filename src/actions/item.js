import * as types from './types';

/**
 * Add an item to the items list
 */
export function onAddItem(item) {
    return(dispatch, getState) => {
        dispatch({
            type: types.ADD_ITEM,
            item: item
        });
    }
}

/**
 * Remove an item from the items list
 */
export function onRemoveItem(id) {
    return(dispatch, getState) => {
        dispatch({
            type: types.REMOVE_ITEM,
            id: id
        });
    }
}