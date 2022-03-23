import isLogged from './isLogged';
import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    signIn: isLogged,
    counter: counterReducer,
});

export default allReducers;