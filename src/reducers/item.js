import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

let itemId = 0;

export const items = createReducer([], {
    [types.ADD_ITEM](state, action) {
        action.item.id = itemId++;
        return [...state, action.item];
    },

    [types.REMOVE_ITEM](state, action) {
        return state.filter((item) => {
            return item.id !== action.id ? item : null;
        });
    },
});