import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Loading from '../Components/Loading';
// import UseCatagory from './Hooks/UseCatagory';
import UseProducts from './Hooks/UseProducts';
import { AiFillEye } from "react-icons/ai";
import userEvent from '@testing-library/user-event';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Deshboard = () => {
    const  {products,productLoading}=UseProducts()
    const [user]=useAuthState(auth);
    // const  {catagorys}=UseCatagory();
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
                       
 
        <li className=' text-white bg-gray-500 mt-2 '>
       <Link to="UserSlefOrderInfo" className="flex items-center  active:bg-red-700 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">UserSlefOrderInfo</span>
                            </Link></li>
        <li className=' text-white bg-gray-500 mt-2 '>
       <Link to="basic-info" className="flex items-center  active:bg-red-700 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Basic Info</span>
                            </Link></li>
                       
       
      <li className=' text-white bg-gray-500 mt-2 '>
        <Link to="products" className="flex items-center  active:bg-red-700 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Products <span className='bg-primary rounded p-2 text-white font-bold text-end'>{products.length}</span></span>
                            </Link></li>
      <li className=' text-white bg-gray-500 mt-2 '>
        <Link to="add-product" className="flex items-center  active:bg-red-700 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Add Product</span>
                            </Link></li>
      <li className=' text-white bg-gray-500 mt-2 '>
        <Link to="catagory" className="flex items-center  active:bg-red-700 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Catoagory <span className='bg-primary rounded p-2 text-white font-bold text-end'>32</span></span>
                            </Link></li>
      <li className=' text-white bg-gray-500 mt-2 '>
        <Link to="copne" className="flex items-center  active:bg-red-700 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Copone </span>
                            </Link></li>
                            <li className=' text-white bg-gray-500 mt-2 '>
        <Link to="orders" className="flex items-center  active:bg-red-700 ">
                                <AiFillEye/>
                                <span className="text-sm  ml-2">Orders </span>
                            </Link></li>
    </ul>
  
  </div>
</div>
          </>
     );
};
export default Deshboard;