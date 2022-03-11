import { createStore } from 'redux';
import rootReducer from '../reducer/combineReducer';

export const store = createStore(rootReducer);