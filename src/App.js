import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import 'react-toastify/dist/ReactToastify.css';
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
import ShopingCart from './Components/ShopingCart';
import Checkout from './Components/Checkout';
import Test from './Deshboard/Components/Test';
import Notfound from './Components/Notfound';
import UpdateProduct from './Deshboard/Components/UpdateProduct';
import UpdateCatagory from './Deshboard/Components/UpdateCatagory';
import Copen from '../src/Components/Copen';
import UpdateCopen from './Deshboard/Components/UpdateCopen';
import RequireAuth from './Authentication/RequireAuth';
import auth from './firebase.init';
import Orders from './Deshboard/Components/Orders';
import SingleItemorder from './Deshboard/Components/SingleItemorder';
import OrderStatusUpdate from './Deshboard/OrderStatusUpdate';
import UserSlefOrderInfo from './Deshboard/Components/UserSelfInfo/UserSlefOrderInfo';
import { ToastContainer } from 'react-toastify';
import Users from './Deshboard/Components/Users';
import RequireAdmin from './Authentication/RequireAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseAdmin from './Deshboard/Hooks/UseAdmin';
import { useState } from 'react';
import DarkMode from './Deshboard/Hooks/DarkMode';
import InfiniteScroll from 'react-infinite-scroll-component';
import ForgetPassword from './Authentication/ForgetPassword';
import UserContactinfo from './Deshboard/UserContactinfo';
import ContactDetailsInformation from './Deshboard/Components/ContactDetailsInformation';
import AllProducts from './Components/AllProducts';
import RequireWorker from './Authentication/RequireWorker';

function App() {
      const [user]=useAuthState(auth);
      const [admin]=UseAdmin(user);
//    const {dark,setDark}=DarkMode()
  return (
   <div className='md:px-6 bg-gray-100'>
     {/* <input onClick={()=>setDark(!dark)}  type="checkbox"/> */}
   <Navbar/>
<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/forget-password' element={<ForgetPassword/>}/>
  <Route path='update/:id' element={<RequireAuth>
      <RequireAdmin><UpdateProduct/></RequireAdmin></RequireAuth>}/>
  <Route path='readmore/:id' element={<RequireAuth>
      <RequireWorker><ContactDetailsInformation/></RequireWorker></RequireAuth>}/>
  <Route path='itemorderdelete/:id' element={<RequireAuth>
      <RequireWorker><OrderStatusUpdate/></RequireWorker></RequireAuth>}/>
  <Route path='itemorder/:id' element={<RequireAuth>
      <SingleItemorder/></RequireAuth>}/>
  <Route path='updatecatagory/:id' element={<RequireAuth><RequireAdmin><UpdateCatagory/></RequireAdmin></RequireAuth>}/>
  <Route path='/updatecopen/:id' element={<RequireAuth><RequireAdmin><UpdateCopen/></RequireAdmin></RequireAuth>}/>
  <Route path='/deshboard' element={
  <RequireAuth>
 <Deshboard/>
  </RequireAuth>
  }>
  {admin? <Route index  element={
  <RequireAuth>
<RequireAdmin> <BasicInfo/></RequireAdmin>
   </RequireAuth>
  }/>: <Route index element={<RequireAuth><UserSlefOrderInfo/></RequireAuth>}/>}
         
          <Route path='basic-info' element={<RequireAuth><RequireAdmin><BasicInfo/></RequireAdmin></RequireAuth>}/>
          <Route path='users' element={<RequireAuth>{<RequireAdmin><Users/></RequireAdmin>}</RequireAuth>}/>
          <Route path='products' element={<RequireAuth>
                <RequireWorker><LoadProducts/></RequireWorker>
          </RequireAuth>}/>
          <Route path='add-product' element={<RequireAuth>
              <RequireWorker>  <AddProducts/></RequireWorker>
          </RequireAuth>}/>
          <Route path='catagory' element={<RequireWorker><CreateCatagory/></RequireWorker>}/>
          <Route path='copne' element={<RequireAuth>
         <RequireAdmin>  <Copen/></RequireAdmin>
          </RequireAuth>}/>
          <Route path='orders' element={<RequireAuth>
               <RequireWorker> <Orders/></RequireWorker>
          </RequireAuth>}/>
          <Route path='contact' element={<RequireAuth>
               <RequireWorker> <UserContactinfo/></RequireWorker>
          </RequireAuth>}/>
          {/* <Route path='contact' element={<RequireAuth>
               <RequireAdmin> <UserContactinfo/></RequireAdmin>
          </RequireAuth>}/> */}

  </Route>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/product-details' element={<ProductDetails/>}/>
  <Route path='/view-cart' element={
  <RequireAuth>
  <ShopingCart/>
  </RequireAuth>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/test' element={<Test/>}/>


  <Route path='/' element={<Home/>}/>


  <Route path='/home/trams-and-condition' element={<TramsAndCondition/>}/>
          <Route path='/home/about' element={<AboutUs/>}/>
          <Route path='/home/faq' element={<Faq/>}/>
          <Route path='/home/contact' element={<ContactUs/>}/>
          <Route path='/home/all-products' element={<AllProducts/>}/>
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
<ToastContainer />
   </div>
  );
}

export default App;
