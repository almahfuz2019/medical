import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Faq from './Components/Faq';
import MainPage from './Components/MainPage';
import ProductDetails from './Components/ProductDetails';
import TramsAndCondition from './Components/TramsAndCondition';
import Home from './Pages/Home';
import Footer from './Shired/Footer';
import Navbar from './Shired/Navbar';
import "./css/style.css";
import Deshboard from './Deshboard/Deshboard';
import BasicInfo from './Deshboard/Components/BasicInfo';
import LoadProducts from './Deshboard/Components/LoadProducts';
import AddProducts from './Deshboard/Components/AddProducts';
import CreateCatagory from './Deshboard/Components/CreateCatagory';
import SingleProduct from './Components/SingleProduct';
import { FaShoppingBag } from 'react-icons/fa';
import ShopingCart from './Components/ShopingCart';
import Checkout from './Components/Checkout';
import Test from './Deshboard/Components/Test';
import AllProducts from './Components/AllProducts';
import Notfound from './Components/Notfound';
import UpdateProduct from './Deshboard/Components/UpdateProduct';
import UpdateCatagory from './Deshboard/Components/UpdateCatagory';
import Copen from '../src/Components/Copen';
import UpdateCopen from './Deshboard/Components/UpdateCopen';
import RequireAuth from './Authentication/RequireAuth';
import auth from './firebase.init';

function App() {
        
  return (
   <div className='md:px-6'>
   <Navbar/>
 
<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='update/:id' element={<RequireAuth><UpdateProduct/></RequireAuth>}/>
  <Route path='updatecatagory/:id' element={<RequireAuth><UpdateCatagory/></RequireAuth>}/>
  <Route path='/updatecopen/:id' element={<RequireAuth><UpdateCopen/></RequireAuth>}/>
  <Route path='/deshboard' element={
  <RequireAuth>
 <Deshboard/>
  </RequireAuth>
  }>
  <Route index  element={
  <RequireAuth>
 <BasicInfo/>
   </RequireAuth>
  }/>
          <Route path='basic-info' element={<RequireAuth><BasicInfo/></RequireAuth>}/>
          <Route path='products' element={<RequireAuth>
                <LoadProducts/>
          </RequireAuth>}/>
          <Route path='add-product' element={<RequireAuth>
                <AddProducts/>
          </RequireAuth>}/>
          <Route path='catagory' element={<RequireAuth><CreateCatagory/></RequireAuth>}/>
          <Route path='copne' element={<RequireAuth>
                <Copen/>
          </RequireAuth>}/>

  </Route>
  <Route path='/register' element={<Register/>}/>
  <Route path='/product-details' element={<ProductDetails/>}/>
  <Route path='/view-cart' element={
  <RequireAuth>
  <ShopingCart/>
  </RequireAuth>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/test' element={<Test/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/all-Products' element={<AllProducts/>}/>
  <Route path='/home/trams-and-condition' element={<TramsAndCondition/>}/>
          <Route path='/home/about' element={<AboutUs/>}/>
          <Route path='/home/faq' element={<Faq/>}/>
          <Route path='/home/contact' element={<ContactUs/>}/>
  <Route path='/single/:id' element={<ProductDetails/>}/>
  <Route path='/' element={<Home/>}>
          <Route index  element={<MainPage/>}/>
          <Route path='trams-and-condition' element={<TramsAndCondition/>}/>
          <Route path='faq' element={<Faq/>}/>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='contact' element={<ContactUs/>}/>
        </Route>
<Route path='*' element={<Notfound/>}/>
</Routes>
<Footer/>
   </div>
  );
}

export default App;
