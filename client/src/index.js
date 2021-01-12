import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CartReducer from './components/CartRedux/CartReducer'
import WishlistReducer from './components/WishlistRedux/WishlistReducer'
import Playlistreducer from './components/PlaylistRedux/PlaylistReducer' 
import { Provider } from 'react-redux'
import { computeHeadingLevel } from '@testing-library/react';


// const routing = (  
//   <Router>

//     {/* If user is not logged in or logout */}
    
//     {/* <TopNavWL></TopNavWL>
//       <Switch>
//           <Route exact path="/" component={App} />
//           <Route path="/login" component={LoginN} />
//           <Route path="/signup" component={Signup} />
//           <Route path="/ContactUs" component={ContactUs} />
//           <Route component={NotFound}/>
//         </Switch>
//       <Footer></Footer>  */}

//       {/* If user logged in */}
//     <TopNav></TopNav>
//     <div id="layoutSidenav">
//       <SideNav></SideNav>
//       <Switch>
//         <Route exact path="/" component={MainBody} />
//         <Route path="/login" component={LoginN} />
//         <Route path="/signup" component={Signup} />
//         <Route path="/CategoryDetails" component={CategoryDetails} />
//         <Route path="/ContactUs" component={ContactUs} />
//         <Route path="/Cart" component={Cart} />
//         <Route path="/Wishlist" component={Wishlist} />
//         <Route path="/songlistasjson" component={SongListAsJSON} />
//         <Route component={NotFound}/>
//       </Switch>
//     </div>

//   </Router>
// )

// ReactDOM.render(routing, document.getElementById('root'));
const rootReducer = combineReducers({
   // login: loginReducer,
    cart: CartReducer,
    wishlist:WishlistReducer,
    playlist:Playlistreducer
   })
   
 const store = createStore(rootReducer, applyMiddleware(thunk))
 
 ReactDOM.render(<Provider store={store}>  <App /></Provider>, document.getElementById('root'));



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
