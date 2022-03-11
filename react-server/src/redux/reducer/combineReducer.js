import { combineReducers } from 'redux';
import { shoppingReducer } from './shoppingReducer';

const rootReducer = combineReducers({
    shoppingCart: shoppingReducer
});

export default rootReducer;