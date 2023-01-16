import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import UseProducts from '../Hooks/UseProducts';
import { FaRegTrashAlt,FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LoadProducts = () => {
     const {handleProductDelete}=UseProducts();
     const[page,setPage]=useState(0);
     const[size,setSize]=useState(20);
       const[pageCount,setPageCount]=useState(0);
      
       const[products,setProducts]=useState([]);
       const[productLoading,setProductLoading]=useState(true);
       const[searchText,setSearchText]=useState('');
     
       const fetchProducts = () => {
         setProductLoading(true)
         fetch(`http://localhost:5000/productss?page=${page}&size=${size}&search=${searchText}`)
         .then(res=>res.json())
         .then(data=>{
           setPageCount(Math.ceil(data.count/size))
           setProducts(data.products)
           setProductLoading(false)
           console.log(data);
         })
       }
        
  useEffect(()=>{
    fetchProducts()
  },[page,size])

     if(productLoading){
          return <Loading/>
     }
     return (
          <div>
            
     <div className="overflow-x-auto">
     <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-3xl '>Total Products: {products.length}</span></div>
     <div className="flex mx-5 space-x-1 dark:text-gray-100 my-10">
	<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary':"inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-primary text-primary"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center w-20 h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option selected value="20">20</option>
          <option value="30">30</option>
        </select>  
</div>
     <table className="table w-full">
       {/* <!-- head --> */}
       <thead>
         <tr>
           <th>No</th>
           <th>Image</th>
           <th>Name</th>
           <th>Catagory</th>
           <th>Action</th>
         </tr>
       </thead>
           
    {products.map((product,index)=>
       <tbody>
         <tr className='border bg-white'>
           <th>{index+1}</th>
           <td>
           <div className="avatar border border-primary rounded border-2">
              <div className="mask mask-squircle w-12 h-12 ">
                {
                product?.image?
    <img  src={product?.image} alt="image"/>:
    <img src="" className='bg-primary' alt=''/>
                }
              </div>
            </div>
           </td>
           <td>{product?.name}</td>
           <td>{product?.catagory} 
           <br />
           price: {product?.price}
           <br/>
           {product?.dateAndTime}
           </td>
           <td className='flex gap-3 text-2xl'>
            <Link to={`/update/${product._id}`}>
            <FaRegEdit/>
            </Link>
            <Link onClick={()=>handleProductDelete(product._id)}>
            <FaRegTrashAlt/>
            </Link>
           </td>
         </tr>
       </tbody>
     )}
     </table>
   </div>

            <div className="flex justify-center space-x-1 dark:text-gray-100 my-10">
	<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary':"inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-primary text-primary"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center w-20 h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option selected value="20">20</option>
          <option value="30">30</option>
        </select>  
</div>
          </div>
     );
};
export default LoadProducts;