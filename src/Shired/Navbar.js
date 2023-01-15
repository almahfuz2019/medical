import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import Loading from '../Components/Loading';
import UseProducts from '../Deshboard/Hooks/UseProducts';
import UseUserSpacifiqData from '../Deshboard/Hooks/UseUserSpacifiqData';

import auth from '../firebase.init';
const Navbar = () => {
  const {usdata}=UseUserSpacifiqData();
  let total=0;
  let subTotal=0;
  if(Array.isArray(usdata)){
    for(let products of usdata){

      subTotal+=parseInt(products.product.price)*(products.productQuentity);
      let shippingCharge=100;
      total=subTotal+shippingCharge;
      // console.log(total);
     //  discount=(shippingCharge-(5/100).toFixed(2));
     //  discount=(discount.toFixed(2));
     
    }
  }
  
  // const {cart}=UseProducts();
  const [user, loading, error] = useAuthState(auth);
  const [signOut, SignOutLoading, SignOutError] = useSignOut(auth);
  const logout=()=>{
    signOut(auth);
    localStorage.removeItem('accessToken');
  }
  if (SignOutError || error) {
    return (
      <div>
        <p>Error: {SignOutError.message}</p>
      </div>
    );
  }
  if (SignOutLoading ||  loading) {
    return <Loading/>;
  }
     let navItems=<>
     
    <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 '><NavLink  to="/">Home</NavLink></li>
    {/* <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/all-Products">Products</NavLink></li> */}
    <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/home/trams-and-condition">Terms and Condition</NavLink></li>
    <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/home/faq">QNA</NavLink></li>
    <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/home/about">About US</NavLink></li>
    <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/home/contact">Contact US</NavLink></li>
   {/* <li tabIndex={0} className="z-20 ">
     <a className="justify-between">
       Others
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
     </a>
     <ul className="p-2 bg-base-100">
       <li><a>Submenu 1</a></li>
       <li><a>Submenu 2</a></li>
       <li><a>Submenu 3</a></li>
       <li><a>Submenu 4</a></li>
       <li><a>Submenu 5</a></li>
     </ul>
   </li> */}
   {/* <button data-set-theme="light" data-act-class="ACTIVECLASS">light</button> */}
     
     </>
     return (
          <>
          <h1 className='bg-primary p-1 font-semibold text-center text-white sm:text-xl'>For Any Query, Please Call: 01864-210567</h1>
       <div className="navbar bg-white border-b-4 border-primary">
  <div className="navbar-start ">
    <div className="dropdown  ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-primary border-opacity-30">
{navItems}
      </ul>
    </div>
    <NavLink to="/" className="btn btn-ghost normal-case text-xl ">Medical</NavLink>
    
  </div>
  {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
 
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    {user?<li></li>:<li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'> <NavLink to="/login">Login</NavLink></li>}
    </ul>
  </div>
 
 <div className="navbar-end flex">

  <div className="flex">
    
 {user? <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{usdata?.length}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow border border-primary border-opacity-30">
        <div className="card-body ">
          <span className="font-bold text-lg">{usdata?.length} Items</span>
          <span className="text-info">Total: ${total}</span>
          <div className="card-actions">
            <NavLink to="view-cart" className="btn btn-primary btn-block">View cart</NavLink>
          </div>
        </div>
      </div>
    </div>:""}
   {user?  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className=" rounded-full ">
        <div className="avatar placeholder online">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-12  ">
    <span>{(user?.displayName?.slice(0,2))}</span>
  </div>
</div> 
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-primary border-opacity-30">
        
        <li><NavLink to="/deshboard">Deshboard</NavLink></li>
        
        {user?<li ><button onClick={logout}>Sign out</button></li>:
        <li className=''> <NavLink to="/login">Login</NavLink></li>}
        
      </ul>
    </div>:""}
    </div>
  </div> 
</div>
          </>
     );
};
export default Navbar;