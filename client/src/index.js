import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CartReducer from './components/CartRedux/CartReducer'
import WishlistReducer from './components/WishlistRedux/WishlistReducer'
import { Provider } from 'react-redux'
import { computeHeadingLevel } from '@testing-library/react';



const rootReducer = combineReducers({

    cart: CartReducer,
    wishlist:WishlistReducer,
   
   })
   
 const store = createStore(rootReducer, applyMiddleware(thunk))
 
 ReactDOM.render(<Provider store={store}>  <App /></Provider>, document.getElementById('root'));



reportWebVitals();
