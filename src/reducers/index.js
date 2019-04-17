import { combineReducers } from 'redux';
import * as itemReducers from './item';

/**
 * Combine all reducers into the combineReducers object
 */
export default combineReducers(Object.assign(
    itemReducers
));