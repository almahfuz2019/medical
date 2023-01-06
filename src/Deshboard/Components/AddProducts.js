import React, { useState } from 'react';
import UseCatagory from '../Hooks/UseCatagory';

const AddProducts = () => {
     const {catagorys}=UseCatagory();
     
     const [selectCatagory,setSelectCatagory]=useState();
     const addProduct=(event)=>{
      event.preventDefault();
      const name=event.target.name.value;
      const price=event.target.price.value;
      const previcePrice=event.target.previcePrice.value;
      const catagory=event.target.catagory.value;
      const details=event.target.details.value;
      const image=event.target.image.value;
      const catagorys=selectCatagory;
      const productData={name,price,previcePrice,catagory,details,image,catagorys};
      console.log(productData);
      fetch('http://localhost:5000/product', {
   method: 'POST', // or 'PUT'
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(productData),
 })
   .then((res) => res.json())
   .then((data) => {
   alert("product added successfully"); 
     event.target.reset();
   })
   .catch((error) => {
     console.error('Error:', error);
   });
      }
     return (
          <div>
     <form onSubmit={addProduct}>
     <section class="text-gray-600 body-font relative ">
     <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div class="border-primary border border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 border rounded-md p-5">
      <h2 class="text-gray-900 text-lg mb-1 
     title-font font-semibold">Add a product</h2>
      
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text"  name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Price</label>
        <input type="text"  name="price" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Previce Price</label>
        <input type="text"  name="previcePrice" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Previce Price</label>
        <input type="text"  name="image" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Catagory</label>
        <select  onChange={e=>setSelectCatagory(e.target.value)} className='select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded' name='catagory'>
          {
               catagorys.map(p=>
                    <option
                    key={p._id}
                    >{p.catagory}</option>
               )
          }
        </select>
      </div>
     
      
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Description</label>
        <textarea id="message" name="details" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" ></textarea>
      </div>
      <input class="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="submit" type="submit"/>
      <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
</form>
          </div>
     );
};

export default AddProducts;