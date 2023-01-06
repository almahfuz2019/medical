
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseCatagory from '../Hooks/UseCatagory';
const UpdateProduct = () => {
    const {catagorys}=UseCatagory();
    const [selectCatagory,setSelectCatagory]=useState();
     // Update item
     const[item,setItem]=useState([]);
    const { id } = useParams();
useEffect(()=>{
     const url=`http://localhost:5000/product/${id}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setItem(data))
     console.log(url);
},[])
    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateNameFinal = { name: updateName,  price:item.price,previcePrice:item.previcePrice };
        setItem(updateNameFinal);
        console.log(updateNameFinal);
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const finalUpdatPrice = { name: item.name,previcePrice:item.previcePrice, price: updatePrice, }
        setItem(finalUpdatPrice);
        console.log(finalUpdatPrice);
    }
    const handlePrevicePriceChange = e => {
        const updatePrevicePrice = e.target.value;
        const updatePrevicePrcie = { name: item.name, price:item.price,previcePrice:updatePrevicePrice }
        setItem(updatePrevicePrcie);
        console.log(updatePrevicePrcie);
    }
    const handleImageChange = e => {
        const updatePrevicePrice = e.target.value;
        const updateImage = { name: item.name, price:item.price,previcePrice:item.previcePrice,image:updatePrevicePrice }
        setItem(updateImage);
        console.log(updateImage);
    }
    const handleCatagoryChange = e => {
        const updateCatagory = selectCatagory;
        const updateNewCatagory = { name: item.name, price:item.price,previcePrice:item.previcePrice,image:item.image, catagorys:updateCatagory}
        setItem(updateNewCatagory);
        console.log(updateNewCatagory);
    }
    const handleDetailsChange = e => {
        const updateDetail = e.target.value;
        const updateNewDetails = { name: item.name, price:item.price,previcePrice:item.previcePrice,image:item.image, catagorys:item.catagorys ,details:updateDetail}
        setItem(updateNewDetails);
        console.log(updateNewDetails);
    }
    const handleUpdateProduct = e => {
        const url = `http://localhost:5000/product/${id}`;
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
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.name} onChange={handleNameChange}/>
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Price</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.price} onChange={handlePriceChange}/>
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Previce Price</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.previcePrice} onChange={handlePrevicePriceChange}/>
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Catagory</label>
        <select className='select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded'  onChange={e=>setSelectCatagory(e.target.value)}>
          {
               catagorys.map(p=>
                    <option
                   
                    key={p._id}
                    >{p.catagory}</option>
               )
          }
        </select>
      </div>
      {/* <div class="relative mb-4">
       
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
      </div> */}
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Image Link</label>
        <input type="text"  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.image} onChange={handleImageChange}/>
      </div>
      
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Description</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={item.details} onChange={handleDetailsChange}></textarea>
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
export default UpdateProduct;