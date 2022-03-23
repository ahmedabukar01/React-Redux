import isLogged from './isLogged';
import counter from './counterReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    signIn: isLogged,
    counter,
});

export default allReducers;