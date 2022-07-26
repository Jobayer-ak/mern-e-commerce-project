import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

/**
 * reducer is a pure function.
 * reducer is a pure function.
 * it accepts two arguments state and actionl
 * it handles all logic based on the action type.
 *  */ 
// How redux works
/**
 * 1. state
 * 2. dispatch action (we normally perform action)
 * 3. reducer (reducer will work based on action type)
 * 4. store update - getState(), dispatch(), subscrib
 */
/**
 *  store holds app state. It accepts reducer and middleware store methods:
 * 1. getState() --> using this method we can see its situation
 * 2. dispatch() --> using this method we can dispatch our action
 * 3. subscribe() --> using this method we can connect store with view
 */
/**
 * creatStore accepts two arguments reducer and middleware
 */
 
const reducer = combineReducers({
    getProducts: getProductsReducer
})

// thunk middleware
const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(...middleware));


export default store;