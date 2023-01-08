import React from 'react';
import { FaEdit, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
import Loading from '../../Components/Loading';
import UseOrder from '../Hooks/UseOrder';
const Orders = () => {
     const {orderLoading,error1,orderItem,handleOrderDelete}=UseOrder();
     
     const time= new Date().toLocaleString();
     if(orderLoading){
          return <Loading/>
     }
     return (
          <div>
          <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-3xl '>Total Products: {orderItem.length}</span></div>
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
                
         {orderItem.map((order,index)=>
            <tbody>
              <tr className='border'>
                <th>{index+1}</th>
                <th>{order.dateAndTime}</th>
                <td>
                  {order.status==="wating"? <button className="btn loading">Wating</button>:<button className="btn disabled">done</button>}
               
                </td>
                <td>TK ${order?.TotalPrice} <br />
                Total Item: {order?.userData?.length}
                </td>

               <td>
                    {order.dateAndTime}
               </td>
                <td className='flex gap-3 text-2xl'>
                 
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
        </div>
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                     <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                         <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                             <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                             <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                         </div>
                         <div className="sm:flex hidden">
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
                         </div>
                         <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                             <p className="text-sm font-medium leading-none mr-3">Next</p>
                             <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                         </div>
                     </div>
                 </div>
               </div>
     );
};
export default Orders;