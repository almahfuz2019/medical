import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, NavLink } from 'react-router-dom';
import Loading from './Loading';
const Products = () => {
  const { isLoading, error, data:products } = useQuery('repoDatasa', () =>
     fetch('http://localhost:5000/products').then(res =>
       res.json()
 )
   )
   if (isLoading) return <Loading/>;
   if (error) return 'An error has occurred: ' + error.message
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mx-5 sm:mx-0'>
      {products.map(product=>
<>
        <div className=" light:bg-red-700 dark:bg-gray-100   shadow-lg border-2 border rounded-lg">
       <div className="h-48 w-full bg-gray-300 flex flex-col justify-between p-4 bg-cover bg-center border-b-2 border-primary"    style={{backgroundImage: `url(${product.image})`  }}>
         <div className="flex justify-between">
          </div>
       <div className='flex'>
            <p><span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">  available </span> </p>
            <p>
            <span className="uppercase text-xs  bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none ml-1"><span className="line-through decoration-gray-400   text-gray-400 ">${product.previcePrice} </span><span className=' ml-2'> -45%</span> </span> 
            </p>
       </div>  
       </div>  
            <div className="p-4  items-center"> <p className="text-gray-400 font-light text-xs text-center">{product.catagory}</p>
            <div className='text-center'>
            <Link to={`/single/${product._id}`} className="text-gray-800 text-center mt-1 text-xl font-bold hover:underline hover:text-primary" >{product.name}</Link>
            </div>    <p className="text-center text-gray-800 mt-1">€{product.price}</p>        
            <button  className="py-2 px-4 text-white rounded disabled:opacity-50 mt-4 w-full flex items-center justify-center btn-primary" >   Add to order <svg        xmlns="http://www.w3.org/2000/svg"className="h-6 w-6 ml-2" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"> <path          strokeLinecap="round"          strokeLinejoin="round"  strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>  </svg></button>  </div></div>
            </>
        )}
        </div>
    </div>
  );
};
export default Products;