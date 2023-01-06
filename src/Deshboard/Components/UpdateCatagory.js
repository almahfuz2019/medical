import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UpdateCatagory = () => {
     const[item,setItem]=useState([]);
    const { id } = useParams();
useEffect(()=>{
     const url=`http://localhost:5000/catagory/${id}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setItem(data))
     console.log(url);
},[])
const handleNameChange = e => {
     const updateName = e.target.value;
     const updateNameFinal = { catagory: updateName };
     setItem(updateNameFinal);
     console.log(updateNameFinal);
 }
 const handleUpdateProduct = e => {
     const url = `http://localhost:5000/catagory/${id}`;
     fetch(url, {
         method: 'PUT',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(item)
     })
         .then(res => res.json())
         .then(data => {
                 alert('Update Successful');
                 e.target.reset();
         })
     e.preventDefault();
 } 
     return (
          <div>
            <form onSubmit={handleUpdateProduct}>
     <section class="text-gray-600 body-font relative ">
     <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div class="border-primary border border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 border rounded-md p-5">
      <h2 class="text-gray-900 text-lg mb-1 
     title-font font-semibold">Add a product</h2>
      
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name"  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.catagory} onChange={handleNameChange}/>
      </div>
     
      <input class="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="save" type="submit"/>
      <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
</form>
          </div>
     );
};
export default UpdateCatagory;