import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import UseCatagory from '../Hooks/UseCatagory';
const AddProducts = () => {
     const {catagorys}=UseCatagory();
     const time= new Date().toLocaleString();
     const [selectCatagory,setSelectCatagory]=useState();
     const addProduct=async(event)=>{
      event.preventDefault();
      const name=event.target.name.value;
      const price=event.target.price.value;
      const previcePrice=event.target.previcePrice.value;
      const catagory=event.target.catagory.value;
      const details=event.target.details.value;
      const image=event.target.image.value;
      const dateAndTime=time;
      const catagorys=selectCatagory;
      const productData={name,price,previcePrice,catagory,details,image,catagorys,dateAndTime};
      await axios.post("http://localhost:5000/product",productData)

    toast.success('Update Successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
      });
     event.target.reset();
 
      }
     return (
          <div>
     <form onSubmit={addProduct}>
     <section className="text-gray-600 body-font relative ">
     <div className="container px-5 sm:py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="border-primary border border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 border rounded-md p-5">
      <h2 className="text-gray-900 text-lg mb-1 
     title-font font-semibold">Add a product</h2>
      
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text"  name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Price</label>
        <input type="text"  name="price" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Previce Price</label>
        <input type="text"  name="previcePrice" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Image Link</label>
        <input type="text"  name="image" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
     
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Catagory</label>
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
     
      
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Description</label>
        <textarea id="message" name="details" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" ></textarea>
      </div>
      <input className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="submit" type="submit"/>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
</form>
          </div>
     );
};

export default AddProducts;