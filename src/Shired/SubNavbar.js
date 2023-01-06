import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "../css/style.css"
const SubNavbar = () => {
     return (
          <>
          <div className='text-center  sm:block my-5'>
             <NavLink  to="/" className='ml-3 sm:ml-5  font-semibold hover:text-red-600'>HOME</NavLink>  
             <NavLink  to="trams-and-condition" className='ml-3 sm:ml-5  font-semibold hover:text-red-600'>TERMS AND CONDITION</NavLink>  
             <NavLink  to="faq" className='ml-3 sm:ml-5  font-semibold hover:text-red-600'>QNA</NavLink>  
             <NavLink  to="about" className='ml-3 sm:ml-5  font-semibold hover:text-red-600'>ABOUT US</NavLink>  
             <NavLink  to="contact" className='ml-3 sm:ml-5  font-semibold hover:text-red-600'>CONTACT US</NavLink>  
          </div>
          <Outlet/>
          
          </>
     );
};
export default SubNavbar;