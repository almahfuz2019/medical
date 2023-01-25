
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseCatagory from '../Hooks/UseCatagory';
const UpdateProduct = () => {
    const {catagorys}=UseCatagory();
    // const time= new Date().toLocaleString();
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
        const updateNameFinal = { name: updateName,  price:item.price,previcePrice:item.previcePrice ,image:item.image,details:item.details};
        setItem(updateNameFinal);
        console.log(updateNameFinal);
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const finalUpdatPrice = { name: item.name,previcePrice:item.previcePrice, price: updatePrice, image:item.image,details:item.details}
        setItem(finalUpdatPrice);
        console.log(finalUpdatPrice);
    }
    const handlePrevicePriceChange = e => {
        const updatePrevicePrice = e.target.value;
        const updatePrevicePrcie = { name: item.name, price:item.price,previcePrice:updatePrevicePrice,image:item.image,details:item.details }
        setItem(updatePrevicePrcie);
        console.log(updatePrevicePrcie);
    }
    const handleImageChange = e => {
        const updatePrevicePrice = e.target.value;
        const updateImage = { name: item.name, price:item.price,previcePrice:item.previcePrice,image:updatePrevicePrice,details:item.details }
        setItem(updateImage);
        console.log(updateImage);
    }
    const handleCatagoryChange = e => {
        const updateCatagory = e.target.value;
        const updateNewCatagory = { name: item.name, price:item.price,previcePrice:item.previcePrice,image:item.image, catagory:updateCatagory,details:item.details}
        setItem(updateNewCatagory);
        console.log(updateNewCatagory);
    }
    const handleDetailsChange = e => {
        const updateDetail = e.target.value;
        const updateNewDetails = { name: item.name, price:item.price,previcePrice:item.previcePrice,image:item.image, catagorys:item.catagorys ,details:updateDetail}
        setItem(updateNewDetails);
        console.log(updateNewDetails);
    }
    const handleUpdateProduct = async(e) => {
      e.preventDefault()
     const url = `http://localhost:5000/product/${id}`;
     await axios.put(url,item)
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
                 e.target.reset();
      e.preventDefault();
    }   
    const imageHostKey ="454f0a4afe3ac6d5a8b44f466386e31d";
    const imgUpload=(e)=>{
      const image = e.target.files[0];
      console.log(image);
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgData => {
          if(imgData.success){
            const updateImage = { name: item.name, price:item.price,previcePrice:item.previcePrice,image: imgData.data.url,details:item.details }
            setItem(updateImage);
          }
        })}
        
     return (
     <div> 
<form onSubmit={handleUpdateProduct}>
     <section className="text-gray-600 body-font relative ">
     <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="border-primary border border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 border rounded-md p-5">
      <h2 className="text-gray-900 text-lg mb-1 
     title-font font-semibold">Update this product</h2>
      
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Product name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.name} onChange={handleNameChange}/>
      </div>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Product price</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.price} onChange={handlePriceChange}/>
      </div>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Product previous price</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.previcePrice} onChange={handlePrevicePriceChange}/>
      </div>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Select a Category</label>
        <select className='select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded'  onChange={handleCatagoryChange}>
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
        <label for="name" className="leading-7 text-sm text-gray-600">Image Link</label>
        {/* <input type="text"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.image} onChange={handleImageChange}/> */}
        <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> select a product Image</label>
                    <input onChange={imgUpload} type="file" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                 
                </div>
        <img src={item.image} alt="" />
      </div>
      
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Product Description</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={item.details} onChange={handleDetailsChange}></textarea>
      </div>
      <input className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="save" type="submit"/>
      <p className="text-xs text-gray-500 mt-3">This is very important for your website.So,be careful.</p>
    </div>
  </div>
</section>
</form>
     </div>
     );
};
export default UpdateProduct;
