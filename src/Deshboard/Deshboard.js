import React, { useEffect, useState } from 'react';
import { NavLink, NavNavLink, Outlet } from 'react-router-dom';
import Loading from '../Components/Loading';
// import UseCatagory from './Hooks/UseCatagory';
import UseProducts from './Hooks/UseProducts';
import { AiFillEye, AiOutlineAppstoreAdd, AiOutlineMail, AiOutlineUsergroupAdd } from "react-icons/ai";
import userEvent from '@testing-library/user-event';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import UseAdmin from './Hooks/UseAdmin';
import UseCopen from './Hooks/UseCopen';
import UseCatagory from './Hooks/UseCatagory';
import UseOrder from './Hooks/UseOrder';
import { useQuery } from 'react-query';
import { BsInfoSquare } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { GrContact } from "react-icons/gr";
import { TbDiscount2, TbShoppingCartDiscount } from "react-icons/tb";
const Deshboard = () => {
    const  {products,productLoading}=UseProducts()
    const [user]=useAuthState(auth);
    const [admin]=UseAdmin(user);
    const  {catagorys}=UseCatagory();
    const  {copone}=UseCopen();
    const  {orderItem}=UseOrder();
    const [userlength,setUserLength]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/user")
        .then(res=>res.json())
        .then(data=>setUserLength(data))
        console.log(userlength);

    },[])
    
    if(productLoading){
        return <Loading/>
    }
     return (
          <>
          <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
   <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60  bg-gray-800 text-base-content text-white">
    <div className="relative ">
                            <div className="text-gray-100 absolute ml-4 inset-0 m-auto w-4 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={10} cy={10} r={7} />
                                    <line x1={21} y1={21} x2={15} y2={15} />
                                </svg>
                            </div>
                            <input className=" bg-gray-500 focus:outline-none rounded w-full text-sm text-white  pl-10 py-2" type="text" placeholder="Search" />
                        </div>
                       
 
        {admin? "":<li className=' text-white bg-gray-500 mt-2 '>
       <NavLink to="#" className="flex items-center  active:bg-primary ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Orders</span>
                            </NavLink></li>}
                            {admin && <li className=' text-white bg-gray-500 mt-2 '>
       <NavLink to="basic-info" className="flex items-center  active:bg-primary ">
                                <BsInfoSquare/>
                                <span className="text-sm  ml-2">Basic Info</span>
                            </NavLink></li>}
                       
       
                            {admin && <li className=' text-white bg-gray-500 mt-2 '>
        <NavLink to="products" className="flex items-center  active:bg-primary">
                                <MdProductionQuantityLimits/>
                                <span className="text-sm  ml-2">Products <span className='bg-primary rounded p-2 text-white font-bold text-end'>{products.length}</span></span>
                            </NavLink></li>}
                            {admin && <li className=' text-white bg-gray-500 mt-2 '>
        <NavLink to="add-product" className="flex items-center  active:bg-primary ">
                                <AiOutlineAppstoreAdd/>
                                <span className="text-sm  ml-2">Add Product</span>
                            </NavLink></li>}
                            {admin && <li className=' text-white bg-gray-500 mt-2 '>
        <NavLink to="catagory" className="flex items-center  active:bg-primary ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Catoagory <span className='bg-primary rounded p-2 text-white font-bold text-end'>{catagorys.length}</span></span>
                            </NavLink></li>}
                            {admin && <li className=' text-white bg-gray-500 mt-2 '>
        <NavLink to="copne" className="flex items-center  active:bg-primary ">
                               <TbShoppingCartDiscount/>
                                <span className="text-sm  ml-2">Copone <span className='bg-primary rounded p-2 text-white font-bold text-end'>{copone.length}</span></span>
                            </NavLink></li>}
                            {admin &&<li className=' text-white bg-gray-500 mt-2 '>
        <NavLink to="orders" className="flex items-center  active:bg-primary ">
                                <CiShoppingBasket/>
                                <span className="text-sm  ml-2">Orders <span className='bg-primary rounded p-2 text-white font-bold text-end'>{orderItem.length}</span></span>
                            </NavLink></li>}
                            {admin &&  <li className=' text-white bg-gray-500 mt-2 '>
     <NavLink to="users" className="flex items-center  active:bg-primary ">
                                <AiOutlineUsergroupAdd/>
                                <span className="text-sm  ml-2">users <span>{userlength.length}</span></span>
                            </NavLink></li>}
                            {admin &&  <li className=' text-white bg-gray-500 mt-2 '>
     <NavLink to="contact" className="flex items-center  active:bg-primary text-white">
                                <AiOutlineMail/>
                                <span className="text-sm  ml-2">Contact <span className='bg-primary'>{userlength.length}</span></span>
                            </NavLink></li>}
    </ul>
  
  </div>
</div>
          </>
     );
};
export default Deshboard;