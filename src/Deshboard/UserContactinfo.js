import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const UserContactinfo = () => {
     const [contactus,setContactus]=useState([])
     useEffect(()=>{
          fetch("http://localhost:5000/contact")
          .then(res=>res.json())
          .then(data=>setContactus(data))
     },[]) 
   const [copone,setCopone]=useState([]);
     const handleOrderDelete=id=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               console.log("deleting user with id",id);
               const url=`http://localhost:5000/contact/${id}`;
               fetch(url,{
                    method:'DELETE'
               })
               .then(res=>res.json())
               .then(data=>{
                    console.log("deleted",data);
                    if(data.deletedCount>0){
                         const remaining=copone.filter(cla=>cla._id !==id);
                         setCopone(remaining)
                    }
               })
          }
      }
     return (
          <div>
          <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-xl sm:text-3xl '>Total Products: {contactus.length}</span></div>
       <table className="table w-full">
       <thead>
         <tr>
           <th>No</th>
           <th>email</th>
           <th>Message</th>
           <th>Action</th>
         </tr>
       </thead>
           
    {contactus.map((product,index)=>
       <tbody>
         <tr className='border bg-white'>
           <th>{index+1}</th>
           <td>
                <p>{product.email}</p>
           </td>
           <td>{product?.message?.slice(0,20)}</td>
           
           <td className='flex gap-3 text-2xl'>
            <Link to={`/readmore/${product._id}`}>
            <AiFillEye/>
            </Link>
            <Link onClick={()=>handleOrderDelete(product._id)}>
            <FaRegTrashAlt/>
            </Link>
           </td>
         </tr>
       </tbody>
     )}
     </table>
     </div>
       </div>
     );
};

export default UserContactinfo;