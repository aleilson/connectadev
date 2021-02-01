import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import accountReducer from '../reducers/accoutReducer';

const store = createStore(accountReducer, applyMiddleware(thunk));

export default store;