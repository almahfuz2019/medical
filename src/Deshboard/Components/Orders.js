import React, { useEffect, useState } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
import Loading from '../../Components/Loading';
import UseOrder from '../Hooks/UseOrder';
import axios from 'axios';
const Orders = () => {
   const {handleOrderDelete}=UseOrder();
  const[allOrders,setAllOrders]=useState([]);
  const[page,setPage]=useState(0);
const[size,setSize]=useState(50);
  const[pageCount,setPageCount]=useState(0);
  const[orders,setOrders]=useState([]);
  const[orderLoading,setOrderLoading]=useState(true);
  // get all orders with pagination 
    const loadOrders = async() => {
    try{
      // productsorders
      setOrderLoading(true)
      const response=await axios.get(`http://localhost:5000/productsorders?page=${page}&size=${size}`)
      setPageCount(Math.ceil(response.data.count/size))
          setOrders(response.data.products)
          setAllOrders(response.data.allProducts)
        setOrderLoading(false)
      }
      catch(error){
      };
    }
  useEffect(()=>{
    loadOrders()
  },[page,size])
  const searchProductsbyname = (e) => {
    const matched_products = allOrders.filter(pro => pro.email?.toLowerCase().includes(e.target.value.toLowerCase()))
    setOrders(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
  }
     if(orderLoading){
      return <Loading/>
     }
     return (
          <div>
           
          <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-xl sm:text-3xl '>Total Orders: {orders.length}</span></div>
          <div className="flex  space-x-1  my-4 sm:ml-5">
	<button title="previous" type="button" className="inline-flex items-center justify-center  w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
		<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md btn-primary ':"inline-flex items-center justify-center  py-0 border rounded-md shadow-md border-primary text-primary w-6 h-6 sm:w-8 sm:h-8 bg-white"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center  w-14 h-6 sm:w-20 sm:h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary bg-white' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option selected value="20">20</option>
        </select>  
</div>
<div className='mx-auto text-center mb-5'>
<input type="text" className="sm:w-1/2 py-2 pl-10 pr-4  bg-white border rounded-r-none rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-opacity-30 focus:ring-primary input input-bordered input-primary w-full input-sm sm:input-md" name='inputValue' placeholder="Search here" onChange={searchProductsbyname}/>
</div>
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Summary</th>
                <th>Action</th>
              </tr>
            </thead>
         {orders.map((order,index)=>
            <tbody>
              <tr className='border bg-white '>
                <th>{index+1}</th>
                <th>{order.dateAndTime}</th>
                <td>
                  {order.status==="Wating"?
                  <button className="btn sm:btn-md btn-sm loading">Wating</button>:
                  order.status==="Shipment"?<button className="btn sm:btn-md btn-sm disabled">Shipment</button>:
                  order.status==="Done"?<button className="btn sm:btn-md btn-sm disabled">Done</button>:
                  order.status==="Cencel"?<button className="btn sm:btn-md btn-sm disabled">Cencel</button>:
                  <button className="btn sm:btn-md btn-sm disabled">Confirm</button>}
                </td>
                <td>TK <span className='text-xl'>৳</span> {order?.TotalPrice} <br />
                Total Item: {order?.userData?.length}
                </td>
               
                <td className='flex gap-3 text-2xl bg-white'>
                 
                 <Link to={`/itemorderdelete/${order._id}`}>
                 <FaEdit/>
                 </Link>
                 <Link  onClick={()=>handleOrderDelete(order._id)}>
                 <FaRegTrashAlt/>
                 </Link>
                 <Link to={`/itemorder/${order._id}`} >
                 <AiFillEye/>
                 </Link>
                </td>
              </tr>
            </tbody>
          )}
          </table>
          <div className="flex justify-center space-x-1 dark:text-gray-100 my-10">
	<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary':"inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-primary text-primary"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center w-20 h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option selected value="20">20</option>
          <option value="30">30</option>
        </select>  
</div>
        </div>
          </div>
     );
};
export default Orders;