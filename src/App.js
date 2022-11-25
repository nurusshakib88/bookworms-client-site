import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Deals from './Components/Deals/Deals';
import Search from './Components/Header/Search';
import About from './Components/About/About';
import Orders from './Components/Orders/Orders'
import ProductDetails from './Components/Home/ProductDetails/ProductDetails';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import Checkout from './Components/Checkout/Checkout/Checkout';
import RequiredAuth from './Components/Login/RequiredAuth/RequiredAuth';
import AddService from './Components/AddService/AddService';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <></>
     
    
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/product/:productId' element={<ProductDetails></ProductDetails>} ></Route>
      <Route path='/orders' element={<Orders></Orders>} ></Route>
      <Route path='/deals' element={<Deals></Deals>} ></Route>
      <Route path='/about' element={<About></About>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/register' element={<Register></Register>} ></Route>
      <Route path='/checkout' element={
        <RequiredAuth>
          <Checkout></Checkout>
        </RequiredAuth>
      } ></Route>
      <Route path='/addservice' element={
        <RequiredAuth>
          <AddService></AddService>
        </RequiredAuth>
      } ></Route>
      <Route path='*' element={<NotFound></NotFound>} ></Route>
    
    </Routes>


     
    </div>
  );
}

export default App;