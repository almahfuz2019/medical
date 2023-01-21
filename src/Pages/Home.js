import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Discount from '../Components/Discount';
import Loading from '../Components/Loading';

import UseCatagory from '../Deshboard/Hooks/UseCatagory';
const Home = () => {
  const {catagorys}=UseCatagory();
  const[allProducts,setAllProducts]=useState([]);
  const[page,setPage]=useState(0);
const[size,setSize]=useState(30);
  const[pageCount,setPageCount]=useState(0);
  const[products,setProducts]=useState([]);
  const[productLoading,setProductLoading]=useState(true);
  const fetchProducts = async() => {
    try{
      setProductLoading(true)
      const response=await axios.get(`http://localhost:5000/productss?page=${page}&size=${size}`)
      setPageCount(Math.ceil(response.data.count/size))
          setProducts(response.data.products)
          setAllProducts(response.data.allProducts)
          setProductLoading(false)
    }
    catch(error){
      console.log(error);
    };
  }
  useEffect(()=>{
    fetchProducts()
  },[page,size])
    const xyz = products.filter(pro => pro.catagory==="Mobility")
  const searchProductsbyname = (e) => {
    const matched_products = allProducts.filter(pro => pro.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
  }
  const searchProductsbyCatagory = (e) => {
    const matched_products = allProducts.filter(pro => pro.catagory.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
  }

const searchByCatagory = (e) => {
  const matched_products = allProducts.filter(pro => pro.catagory.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(matched_products)
    // console.log(allProducts);
    setPageCount(Math.ceil(matched_products.length/size))
}
const handleChange1000=(e)=> {
  const matched_products = allProducts.filter(pro => parseInt(pro.price) <= 1000)
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
}
const handleChange3000=(e)=> {
  const matched_products = allProducts.filter(pro => parseInt(pro.price) <= 3000)
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
}
const handleChange5000=(e)=> {
  const matched_products = allProducts.filter(pro => parseInt(pro.price) <= 5000)
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
}
const handleChangeuUnlimited=(e)=> {
  const matched_products = allProducts.filter(pro => parseInt(pro.price) <= 10000000000000)
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
}
if (productLoading){
   return <Loading/>};
     return (
          <div className='mx-1'>
                 {/* <Banner/> */}
                 <Discount/>
                 {/* <HomePageCatagory/> */}
               {/* <SubNavbar/> */}
            {/* <BestSelling/> */}
            <div class="hidden sm:block">
  <div class="grid  grid-cols-3 px-2 sm:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10 mt-4 gap-4 bg-white py-2">

  <button value="Mobility" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Mobility" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Mobility" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/wp-content/uploads/2022/02/Mobility-2.png" />
           </button>
        </div>
           <button  value="Mobility" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Mobility</button>
  </button>
  <button value="Digital BP" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Digital BP" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Digital BP" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/q:u/r:0/wp:0/w:247/u:https://cdn.medistorebd.com/wp-content/uploads/2016/11/JPN1-247x300.jpg" />
           </button>
        </div>
           <button  value="Digital BP" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Digital BP</button>
  </button>
  <button value="Nebulizer" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Nebulizer" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Nebulizer" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/wp-content/uploads/2022/02/Nebulizer-3.png" />
           </button>
        </div>
           <button  value="Nebulizer" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Nebulizer</button>
  </button>
  <button value="X-Ray Machine" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="X-Ray Machine" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="X-Ray Machine" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/wp-content/uploads/2022/02/X-Ray-Machine-2.png" />
           </button>
        </div>
           <button  value="X-Ray Machine" onClick={searchByCatagory} className='text-center mt-1 underline font-normal '>X-Ray Machine</button>
  </button>
  <button value="Laboratory Product" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Laboratory Product" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Laboratory Product" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/wp-content/uploads/2022/02/Laboratory-Items-2.png" />
           </button>
        </div>
           <button  value="Laboratory Product" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Laboratory</button>
  </button>
  <button value="Hematology Analyzer" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Hematology Analyzer" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Hematology Analyzer" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/q:u/r:0/wp:0/w:747/u:https://www.medistorebd.com/wp-content/uploads/2022/07/Dyasis-730x800.jpeg" />
           </button>
        </div>
           <button  value="Hematology Analyzer" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Hematology</button>
  </button>
  <button value="Air Mattress" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Air Mattress" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Air Mattress" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/wp-content/uploads/2022/02/Air-Mattress-2.png" />
           </button>
        </div>
           <button  value="Air Mattress" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Air Mattress</button>
  </button>
  <button value="Weight Scale" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Weight Scale" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Weight Scale" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/wp-content/uploads/2016/11/beurer_gs207_spring-510x510.jpg" />
           </button>
        </div>
           <button  value="Weight Scale" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Weight Scale</button>
  </button>
  <button value="ECG Machine" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="ECG Machine" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="ECG Machine" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/wp-content/uploads/2022/02/ECG-Machine-2.png" />
           </button>
        </div>
           <button  value="ECG Machine" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>ECG Machine</button>
  </button>
  <button value="Helth" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Helth" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Helth" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://cdn.medistorebd.com/wp-content/uploads/2017/11/Aneroid-Sphygmomanometer-Blood-Pressure-Measure-Device-Home-Use-Blood-Pressure-Manual-watches-blood-pressure-meter.jpg_640x640-510x510.jpg" />
           </button>
        </div>
           <button  value="Helth" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Baby Care</button>
  </button>

  </div>
</div>
            <div className="divider  divide-current mt-5 "><span className='md:text-5xl  text-2xl font-bold '>Our Products</span></div>
            <div className="text-center  mt-5 sm:mt-7   ">
              <div className="flex justify-center mx-2 ">
              <input type="text" className="sm:w-1/2 py-2 pl-10 pr-4  bg-white border rounded-r-none rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-opacity-30 focus:ring-primary input input-bordered input-primary w-full input-sm sm:input-md" name='inputValue' placeholder="Search here" onChange={searchProductsbyname}/>
              
               <div className=" rounded-l-none bg-white border border-primary rounded-md w-auto">
    <label for="SortBy " className="sr-only bg-white">Catagory</label>

    <select id="SortBy" className=" border-r-0 text-xs sm:text-sm border-primary rounded sm:px-2 bg-white max-w-sm sm:max-w-md mx-auto sm:mt-3  text-center" onChange={searchProductsbyCatagory}>
<option className=''value=""><span className=''>All</span></option>
      
    {
               catagorys.map(p=>
                    <option
                    className=''
                    key={p._id}
                    >{p.catagory}</option>
               )
          }
    </select>
  </div>
                  
               </div>    
               </div>

            {/* <input className=" p-3 m-5 border w-1/3 text-center justify-center text-black" onChange={searchProducts} type="text" /> */}


<div class="flex gap-8 ">
  <div class="relative hidden sm:block no-underline border-0">
    <details class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
      >
        <span class="text-sm font-medium">Price Range </span>

        <span class="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>

      <div
        class="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
      >
        <div class="bg-white border border-gray-200 rounded w-96">
      

          <ul class="p-4 space-y-1 border-t border-gray-200">
            <li>
              <label for="FilterInStock" class="inline-flex items-center gap-2">
                <input onClick={handleChange1000}
                  type="checkbox"
                  id="FilterInStock"
                  value="100"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <span class="text-sm font-medium text-gray-700">
                  0 to 1000
                </span>
              </label>
            </li>

            <li>
              <label
                for="FilterPreOrder"
                class="inline-flex items-center gap-2"
              >
                <input onClick={handleChange3000}
                  type="checkbox"
                  id="FilterPreOrder"
                  value="1001"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <span class="text-sm font-medium text-gray-700">
                  0 to 3000
                </span>
              </label>
            </li>

            <li>
              <label
                for="FilterOutOfStock"
                class="inline-flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  onClick={handleChange5000}
                  value="3001"
                  id="FilterOutOfStock"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <span class="text-sm font-medium text-gray-700">
                  0 to 5000
                </span>
              </label>
            </li>
            <li>
              <label
                for="FilterOutOfStock"
                class="inline-flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  onClick={handleChangeuUnlimited}
                  value="5001"
                  id="FilterOutOfStock"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <span class="text-sm font-medium text-gray-700">
                  0 to unlimited
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </details>
  </div>
</div>
<div className="flex  space-x-1  my-4 sm:ml-0">
	<button title="previous" type="button" className="inline-flex items-center justify-center  w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md btn-primary ':"inline-flex items-center justify-center  py-0 border rounded-md shadow-md border-primary text-primary w-6 h-6 sm:w-8 sm:h-8 bg-white"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center  w-14 h-6 sm:w-20 sm:h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary bg-white' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option selected value="20">20</option>
        </select>  
</div>
  {
    products.length === 0 && <h1 className='text-3xl text-center justify-center mx-auto text-red-700 font-bold'>Not found</h1>
  }
  
 
  <h2 className='font-semibold text-xl mb-2 text-primary-focus'>Just For You</h2>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-2 sm:gap-3 mx-5-2 sm:mx-0 '>
  

      {products?.map(product=>
<>

        <div className=" bg-white    shadow-lg   border border-primary rounded border-opacity-30">
       <div className="h-28 sm:h-40 w-full bg-gray-900 flex flex-col  justify-between p-1 sm:pb-2 sm:pl-1 bg-cover bg-center border-b-2 border-primary rounded rounded-b-none"    style={{backgroundImage: `url(${product.image})`  }}>
         <div className="flex justify-between">
          </div>
       <div className='sm:flex'>
            <p><span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none"> available </span> </p>
            <p>
            <span className="uppercase text-xs  bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none sm:ml-1"><span className="line-through decoration-gray-400   text-gray-800 ">${product.previcePrice} </span><span className=' ml-1'> {Math.ceil(((product.price-product.previcePrice)*100/product.price))}%</span> </span> 
            </p>
       </div>  
       </div>  
            <div className="p-2  items-center "> <p className="text-gray-600 font-light text-xs text-center">{product?.catagory}</p>
            <div className='text-center'>
            <Link to={`/single/${product._id}`} className="text-gray-800 text-center mt-1 text-sm  font-bold hover:underline hover:text-primary" >{(product.name).slice(0,20)}</Link>
            </div>    <p className="text-center text-gray-800 mt-1">€{product.price}</p>    
            
            </div>
          
            </div>
            
            </>
        ).reverse()}
        
        </div>
        {/* <div className="btn-group border-primary border">
        {
          [...Array(pageCount).keys()]
          .map(number=><button className="btn"
              onClick={()=>setPage(number)}>{number+1}</button>)
        }
</div> */}
 

<div className="flex  space-x-1  my-4 sm:ml-5">
	<button title="previous" type="button" className="inline-flex items-center justify-center  w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md btn-primary ':"inline-flex items-center justify-center  py-0 border rounded-md shadow-md border-primary text-primary w-6 h-6 sm:w-8 sm:h-8 bg-white"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center  w-14 h-6 sm:w-20 sm:h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary bg-white' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option selected value="20">20</option>
        </select>  
</div>


     
          </div>
     );
};
export default Home;