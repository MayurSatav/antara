import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginN from './components/LoginN';
import Signup from './components/Signup';
import TopNav from './components/TopNav';
import CategoryDetails from './components/CategoryDetails';
import NotFound from './components/NotFound';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist'
import SongListAsJSON from './shared/SongListAsJSON'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Category from './components/Category';
import Home from './components/Home';
import Settings from './components/Settings'
import Orders from './components/Orders'
import Payment from './components/Payment'
import MyAntaras from './components/MyAntaras'

function App() {
  return (
    <div>
    <Router>
    <TopNav></TopNav>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/Home" component={Home} />
        <Route path="/login" component={LoginN} />
        <Route path="/signup" component={Signup} />
        <Route path="/CategoryDetails" component={CategoryDetails} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Wishlist" component={Wishlist} />
        <Route path="/Category" component={Category} />
        <Route path="/Settings" component={Settings} />
        <Route path="/Orders" component={Orders} />
        <Route path="/Payment" component={Payment} />
        <Route path="/MyAntaras" component={MyAntaras} />

        <Route path="/songlistasjson" component={SongListAsJSON} />
        <Route component={NotFound}/>
      </Switch>
      <hr></hr>
    <Footer></Footer>
</Router>

    </div>


  );
}

export default App;
