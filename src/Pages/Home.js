import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Discount from '../Components/Discount';
import HomePageSkeletion from '../Components/HomePageSkeletion';
import TrustedCompanys from '../Components/TrustedCompanys';
import UseCatagory from '../Deshboard/Hooks/UseCatagory';
const Home = () => {
  const {catagorys}=UseCatagory();
  const [search,setSearch]=useState("")
  const [productCount,setProductCount]=useState(0)
  const[allProducts,setAllProducts]=useState([]);
  const[page,setPage]=useState(0);
const[size,setSize]=useState(30);
  const[pageCount,setPageCount]=useState(0);
  const[products,setProducts]=useState([]);
  const[productLoading,setProductLoading]=useState(true);
  useEffect(()=>{
    fetch("http://localhost:5000/allproductscount")
    .then(res=>res.json())
    .then(data=>setProductCount(data))

},[])
const handleSearch = (e) => {
  setSearch(e.target.value);
};
  const fetchProducts = async() => {
    try{
      setProductLoading(true)
      const response=await axios.get(`http://localhost:5000/allproducts?page=${page}&size=${size}`)
      setPageCount(Math.ceil(response.data.count/size))
          setProducts(response.data.products)
          setProductLoading(false)
    }
    catch(error){
    };
  }
  useEffect(()=>{
    fetchProducts()
  },[page,size])
 
  const loadMore=()=>{
    setSize(size+30)
  }
  useEffect(()=>{
    const url=`http://localhost:5000/productsearch?name=${search}`;
    console.log(url);
    if(search!==""){
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data)
        setPageCount(Math.ceil(data.length/size))
      })
    }else if(search===""){
      fetchProducts()
    }
  },[search])
  const searchProductsbyCatagory = (e) => {
    const matched_products = allProducts.filter(pro => pro.catagory.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
  }

const searchByCatagory = (e) => {
  const matched_products = allProducts.filter(pro => pro.catagory.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(matched_products)
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

     return (
          <div className='mx-1 '>

                 <Discount/>
            <div class="lg:block hidden overflow-y-auto whitespace-nowrap scroll-hidden">
  <div class=" grid  grid-cols-10 px-2 sm:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 mt-4 gap-4 bg-white py-2">
  <button value="Health Care" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Health Care" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Health Care" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/5FS08Jh/pexels-leandro-boogalu-1390403.jpg" />
           </button>
        </div>
           <button  value="Health Care" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Health Care</button>
  </button>
  <button value="Baby Care" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Baby Care" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Baby Care" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/6Hx2Mf0/pexels-sarah-chai-7282923.jpg" />
           </button>
        </div>
           <button  value="Baby Care" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Baby Care</button>
  </button>
  <button value="Beauty Care" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Beauty Care" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Beauty Care" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/SXc7dSH/pexels-suzy-hazelwood-1438065.jpg" />
           </button>
        </div>
           <button  value="Beauty Care" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Beauty Care</button>
  </button>
  <button value="First Aid" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="First Aid" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="First Aid" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/k80cnv9/pexels-roger-brown-5125690.jpg" />
           </button>
        </div>
           <button  value="First Aid" onClick={searchByCatagory} className='text-center mt-1 underline font-normal '>First Aid</button>
  </button>
  <button value="Surgical" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Surgical" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Surgical" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/XSZWd4B/pexels-cedric-fauntleroy-4269355.jpg" />
           </button>
        </div>
           <button  value="Surgical" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Surgical</button>
  </button>
  <button value="Dental" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Dental" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Dental" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/8sWrpjG/pexels-daniel-frank-287237.jpg" />
           </button>
        </div>
           <button  value="Dental" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Dental</button>
  </button>
  <button value="Diagnostic" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Diagnostic" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Diagnostic" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/wLsbyG0/pexels-ksenia-chernaya-5766215.jpg" />
           </button>
        </div>
           <button  value="Diagnostic" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Diagnostic</button>
  </button>
  <button value="Laboratory" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Laboratory" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Laboratory" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/mJ0GNKG/pexels-chokniti-khongchum-2280571.jpg" />
           </button>
        </div>
           <button  value="Laboratory" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Laboratory</button>
  </button>
  <button value="Hospital" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Hospital" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Hospital" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/Gt1FWZ7/pexels-pixabay-247786.jpg" />
           </button>
        </div>
           <button  value="Hospital" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Hospital</button>
  </button>
  <button value="Helth" onClick={searchByCatagory} className='cursor-pointer btn p-2 w-full h-full  hover:btn-primary border-opacity-30 border border-primary'>
        <div className="avatar"  value="Helth" onClick={searchByCatagory}>
          <button className="w-full rounded"  value="Helth" onClick={searchByCatagory}>
          <img   onClick={searchByCatagory}  src="https://i.ibb.co/6Hx2Mf0/pexels-sarah-chai-7282923.jpg" />
           </button>
        </div>
           <button  value="Helth" onClick={searchByCatagory} className='text-center mt-1 underline font-normal'>Baby Care</button>
  </button>

  </div>
</div>
            <div className="divider  divide-current mt-5 "><span className='md:text-5xl  text-2xl font-bold '>Our Products</span></div>
            products={products.length},allProducts={allProducts.length}
            <div className="text-center  mt-5 sm:mt-7   ">
              <div className="flex justify-center mx-2 ">
              <input type="text" className="sm:w-1/2 py-2 pl-10 pr-4  bg-white border rounded-r-none rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-opacity-30 focus:ring-primary input input-bordered input-primary w-full input-sm sm:input-md" name='inputValue' placeholder="Search here by product name"
      // value={search}
           onChange={handleSearch}/>
              
               <div className=" rounded-l-none bg-white border border-primary rounded-md w-auto ">
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
<div class="flex gap-8 mt-5 sm:mt-0">
  <div class="relative  sm:block no-underline border-0">
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

 
  
 
  {/* <h2 className='font-semibold text-xl mb-2 text-primary-focus'>Just For You</h2> */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mx-5-2 sm:mx-0 '>
 
 {
  productLoading?<>
<>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
<HomePageSkeletion/>
</>
 
  </>: <>{products?.map(product=>

<Link to={`/single/${product._id}`}>

        <div className=" bg-white    shadow-lg   border border-primary rounded border-opacity-30">
       <div className="h-40 sm:h-40 w-full bg-gray-900 flex flex-col  justify-between p-1 sm:pb-2 sm:pl-1 bg-cover bg-center border-b-2 border-primary rounded rounded-b-none "    style={{backgroundImage: `url(${product.image1})`}}>
         <div className="flex justify-between">
          </div>
       <div className='flex'>
           <div>
           <p><span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none"> {product.status} </span> </p>
           </div>
            <div className='flex items-center'>
            <p className=' ml-1'>
            <span className="uppercase text-xs  bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none sm:ml-1 flex items-center"><span className="line-through decoration-gray-400 flex items-center   text-gray-800 "><TbCurrencyTaka />{product.previcePrice} </span><span className=' ml-1 '> {Math.ceil(((product.price-product.previcePrice)*100/product.price))}%</span> </span> 
            </p>
            </div>
       </div>  
       </div>  
            <div className="p-2  items-center "> <p className="text-gray-600 font-light text-xs text-center">{product?.catagory}</p>
            <div className='text-center'>
            <Link to={`/single/${product._id}`} className="text-gray-800 text-center mt-1 text-sm  font-bold hover:underline hover:text-primary" >{(product.name).slice(0,20)}</Link>
            </div>    <p className="text-center text-gray-800 mt-1">€{product.price}</p>    
            
            </div>
          
            </div>
            </Link>
        )}
        </>
 }
</div>
{
  productCount.count===products.length|| products.length<30 || products.length===0?"":<div className='mx-auto text-center mt-5'>
  <button className='btn btn-primary w-64 btn-sm sm:btn-md' onClick={loadMore}>load more</button> 
  </div>
}

 {
    products.length === 0 && <h1 className='text-3xl text-center justify-center mx-auto text-red-700 font-bold h-screen'>Not found</h1>
  }

<TrustedCompanys/>
     
          </div>
     );
};
export default Home;