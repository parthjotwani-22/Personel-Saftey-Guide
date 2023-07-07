import {combineReducers} from 'redux';
import UserReducer from './UserDescription/reducer';
import contactReducer from './ConactDescription/reducer';
const rootReducer = combineReducers({
  UserReducer: UserReducer,
  contactReducer: contactReducer,
});
export default rootReducer;
