import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
const OrderStatusUpdate = () => {
     
      const[item,setItem]=useState("");
      console.log(item);
      const { id } = useParams();
  // useEffect(()=>{
  //      const url=`http://localhost:5000/copone/${id}`
  //      fetch(url)
  //      .then(res=>res.json())
  //      .then(data=>setItem(data))
  //      console.log(url);
  // },[])
  const handleNameChange = e => {
       const updateName = e.target.value;
       setItem(updateName);
      //  console.log(updateName);
   }
   const handleUpdateProduct = async(e) => {
     e.preventDefault();
     console.log(item);
     const url = `http://localhost:5000/itemorderUpdate/${id}`;
       const res=await axios.post(url,{status:item})
       
      //  fetch(url, {
      //      method: 'PUT',
      //      headers: {
      //          'content-type': 'application/json'
      //      },
      //      body: JSON.stringify(item)
      //  })
  //          .then(res => res.json())
  //          .then(data => {
  //           toast.success('Update Successfully', {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: false,
  //             progress: undefined,
  //             theme: "colored",
  //             });
  //                  e.target.reset();
  //          })
   } 
    
     return (
          <div>

        <form onSubmit={handleUpdateProduct}>
     <section className="text-gray-600 body-font relative ">
     <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="border-primary border border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 border rounded-md p-5">
      <h2 className="text-gray-900 text-lg mb-1 
     title-font font-semibold">Add a product</h2>
      
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
        <select className='select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded'  onChange={handleNameChange}>
          <option selected>Confirm</option>
          <option>Wating</option>
        </select>
      </div>
     
      <input className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="save" type="submit"/>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
</form>
          </div>
     );
};
export default OrderStatusUpdate;