import React, { useEffect, useState } from 'react';
import { FaEdit, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
import Loading from '../../Components/Loading';
import UseOrder from '../Hooks/UseOrder';
const Orders = () => {
     const {handleOrderDelete}=UseOrder();
     const [orderItem,setOrderItem]=useState([])
     const[page,setPage]=useState(0);
     const[size,setSize]=useState(20);
       const[pageCount,setPageCount]=useState(0);
       const[products,setProducts]=useState([]);
       const[userInfoLoading,setuserInfoLoading]=useState(true);
       const[searchText,setSearchText]=useState('');
       const fetchProducts = () => {
         setuserInfoLoading(true)
         fetch(`http://localhost:5000/itemorder?page=${page}&size=${size}&search=${searchText}`)
         .then(res=>res.json())
         .then(data=>{
           setPageCount(Math.ceil(data.count/size))
           setProducts(data.products)
           setOrderItem(data.orderItem)
           setuserInfoLoading(false)
           console.log(data);
           console.log(data.orderItem);
         })
       }
  useEffect(()=>{
    fetchProducts()
  },[page,size])
  const searchProductsbyname = (e) => {
    const matched_products = orderItem.filter(pro => pro._id.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
  }
     const time= new Date().toLocaleString();
     if(userInfoLoading){
      return <Loading/>
     }
     return (
          <div>
          <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-xl sm:text-3xl '>Total Products: {products.length}</span></div>
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
  
<input type="text" placeholder="Type here" className="input input-bordered input-accent w-full sm:max-w-sm input-sm sm:input-md max-w-xs border border-primary" onChange={searchProductsbyname}/>
</div>
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>No</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Delevary Date</th>
                <th>Action</th>
              </tr>
            </thead>
                
         {products.map((order,index)=>
            <tbody>
              <tr className='border bg-white '>
                <th>{index+1}</th>
                <th>{order.dateAndTime}</th>
                <td>
                  {order.status==="Wating"?
                  <button className="btn sm:btn-md btn-sm loading">Wating</button>
                  :order.status==="Cencel"?<button className="btn sm:btn-md btn-sm disabled">Cencel</button>:<button className="btn sm:btn-md btn-sm disabled">Confirm</button>}
                  {/* Confirm */}
                </td>
                <td>TK ${order?.TotalPrice} <br />
                Total Item: {order?.userData?.length}
                </td>
               <td>
                    {order.dateAndTime}
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