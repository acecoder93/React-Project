import famousReducer from './famousReducer';
import watsonReducer from './watsonReducer';
import { combineReducers } from 'redux';



export default combineReducers({
  watsonReducer,
  famousReducer
})