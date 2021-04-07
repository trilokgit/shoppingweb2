import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

const App = () => {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/product/:id' component={ProductScreen}/>
          <Route exact path='/cart' component={CartScreen}/>
        </Switch>
      </main>
         
      
    </Router>
  )
};

export default App;