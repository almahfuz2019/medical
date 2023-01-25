
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';
const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: catagorys, isLoading } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
          const res = await fetch('http://localhost:5000/catagorys');
          const data = await res.json();
          return data;
      }
  })
    const imageHostKey ="454f0a4afe3ac6d5a8b44f466386e31d";
    const handleAddDoctor = data => {
        const image = data.image[0];
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
                const doctor = {
                    name: data.name, 
                    price: data.price,
                    details: data.details,
                    previcePrice: data.previcePrice,
                    catagory: data.specialty,
                    image: imgData.data.url,
                }
                fetch('http://localhost:5000/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
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
                })
            }
        })
    }
    if(isLoading){
      return <Loading/>
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
            <section className="text-gray-600 body-font relative ">
            <div className="container px-5 sm:py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="border-primary border border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 border rounded-md p-5">
      <h2 className="text-gray-900 text-lg mb-1 
     title-font font-semibold">Add a product</h2>
                <div className="relative mb-4">
                    <label for="name" className="leading-7 text-sm text-gray-600">Product name</label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> Product price</label>
                    <input type="text" {...register("price", {
                        required: true
                    })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> Product previous price</label>
                    <input type="text" {...register("previcePrice", {
                        required: true
                    })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    {errors.previcePrice && <p className='text-red-500'>{errors.previcePrice.message}</p>}
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> Details</label>
                    <textarea type="text" {...register("details", {
                        required: true
                    })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                    {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> Select a category</label>
                    <select 
                    {...register('specialty')}
                    className="select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded">
                        {
                            catagorys.map(specialty => <option
                                key={specialty._id}
                                value={specialty.catagory}
                            >{specialty.catagory}</option>)
                        }
                    </select>
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> select a product Image</label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" multiple="multiple"/>
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="Submit" type="submit"/>
  <p className="text-xs text-gray-500 mt-3">This is very important for your website.So,be careful.</p>
                </div>
                </div>
                </section></form>
        </div>
    );
};


/**
 * Three places to store images
 * 1. Third party image hosting server 
 * 2. File system of your server
 * 3. mongodb (database)
*/

export default AddDoctor;