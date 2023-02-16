import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Discount from '../Components/Discount';
import HomePageSkeletion from '../Components/HomePageSkeletion';
import NewProducts from '../Components/NewProducts';
import Notfound from '../Components/Notfound';
import TrustedCompanys from '../Components/TrustedCompanys';
import UseCatagory from '../Deshboard/Hooks/UseCatagory';
const Home = () => {
  const {catagorys}=UseCatagory();
  const [search,setSearch]=useState("")
  const [category,setCategory]=useState("")
      const [error,setError]=useState("");
  const [productCount,setProductCount]=useState(0)
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
const handleClickScroll = () => {
  const element = document.getElementById('section-1');
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
const handleCategory = (e) => {
  setCategory(e.target.value);
  console.log(e.target.value);
};
const HealthCare = () => {
  setCategory("Health Care");
};
const BabyCare = () => {
  setCategory("Baby Care");
};
const BeautyCare = () => {
  setCategory("Beauty Care");
};
const FirstAid = () => {
  setCategory("First Aid");
};
const Surgical = () => {
  setCategory("Surgical");
};
const Dental = () => {
  setCategory("Dental");
};
const Diagnostic = () => {
  setCategory("Diagnostic");
};
const Laboratory = () => {
  setCategory("Laboratory");
};
const Hospital = () => {
  setCategory("Hospital");
};


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
      setError("something is wrong.Please try again")
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
      setProductLoading(true)
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data)
        setPageCount(Math.ceil(data.length/size))
        setProductLoading(false)
      })
    }else if(search===""){
      fetchProducts()
    }
  },[search])
  useEffect(()=>{
    const url=`http://localhost:5000/productsearchbycategory?catagory=${category}`;
    console.log(url);
    if(category!==""){
      setProductLoading(true)
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data)
        setPageCount(Math.ceil(data.length/size))
        setProductLoading(false)
      })
    }else if(category===""){
      fetchProducts()
    }
  },[category])
const handleChange1000=(e)=> {
  const matched_products = products.filter(pro => parseInt(pro.price) <= 1000)
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
  
}
const handleChange3000=(e)=> {
  const matched_products = products.filter(pro => parseInt(pro.price) <= 3000)
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
}
const handleChange5000=(e)=> {
  const matched_products = products.filter(pro => parseInt(pro.price) <= 5000)
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
}
const handleChangeuUnlimited=(e)=> {
  const matched_products = products.filter(pro => parseInt(pro.price) <= 10000000000000)
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
}

     return (
      <div>{error?<><Notfound/></>: 
          <div className='mx-1 z-0'>
                <Discount/>
 
            <div    class=" overflow-y-auto whitespace-nowrap  ">
            {/* <p className='text-primary  mt-1'>Categorys</p> */}
          
  <div   class=" grid  grid-cols-9 p-2 sm:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10  mt-6 gap-x-2 md:gap-4 bg-white">
  <div className="tooltip tooltip-primary  tooltip-right" data-tip="Health Care">
 
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg'>
        <button onClick={HealthCare}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/5FS08Jh/pexels-leandro-boogalu-1390403.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>Health Care</p>
  </button>
</div>
<div className="tooltip tooltip-primary " data-tip="Baby Care">
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg '>
        <button onClick={BabyCare}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/6Hx2Mf0/pexels-sarah-chai-7282923.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>Baby Care</p>
  </button>
  </div>
  <div className="tooltip tooltip-primary " data-tip="Beauty Care">
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg '>
        <button onClick={BeautyCare}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/SXc7dSH/pexels-suzy-hazelwood-1438065.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>Beauty Care</p>
  </button>
  </div>
  <div className="tooltip tooltip-primary " data-tip="First Aid">
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg '>
        <button onClick={FirstAid}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/k80cnv9/pexels-roger-brown-5125690.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>First Aid</p>
  </button>
  </div>
  <div className="tooltip tooltip-primary " data-tip="Dental">
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg '>
        <button onClick={Dental}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/8sWrpjG/pexels-daniel-frank-287237.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>Dental</p>
  </button>
  </div>
  <div className="tooltip tooltip-primary " data-tip="Diagnostic">
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg '>
        <button onClick={Diagnostic}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/wLsbyG0/pexels-ksenia-chernaya-5766215.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>Diagnostic</p>
  </button>
  </div>
  <div className="tooltip tooltip-primary " data-tip="Laboratory">
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg '>
        <button onClick={Laboratory}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/mJ0GNKG/pexels-chokniti-khongchum-2280571.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>Laboratory</p>
  </button>
  </div>
  <div className="tooltip tooltip-primary " data-tip="Surgical">
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg '>
        <button onClick={Surgical}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/XSZWd4B/pexels-cedric-fauntleroy-4269355.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>Surgical</p>
  </button>
  </div>
  <div className="tooltip tooltip-primary  tooltip-left" data-tip="Hospital">
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg '>
        <button onClick={Hospital}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/Gt1FWZ7/pexels-pixabay-247786.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>Hospital</p>
  </button>
  </div>
  <div className="tooltip tooltip-primary  tooltip-left" data-tip="Health Care">
  <button onClick={handleClickScroll} className='cursor-pointer  lg:p-1 md:w-full md:h-full h-9 w-9  hover:bg-primary border-opacity-30 border border-primary hover:text-white rounded-lg hidden sm:block'>
        <button onClick={HealthCare}>
          <img  className="rounded border border-primary border-opacity-50"  src="https://i.ibb.co/5FS08Jh/pexels-leandro-boogalu-1390403.jpg" alt='category Image' />
        </button>
           <p className='text-center  font-normal hidden lg:block'>Health Care</p>
  </button>
  </div>
  </div>
</div>
<div className='hidden lg:block mt-4' id="section-1">
  
            <NewProducts/>
  </div>
            <div  className="divider  divide-current mt-2 mb-5 "><span className='md:text-5xl  text-2xl font-bold '>Our Products</span></div>
            
         
            <div className="text-center  mt-5 sm:mt-7   sticky">
              <div className="flex justify-center mx-2  ">
              <input type="text" className="sm:w-1/2 py-2 pl-10 pr-4  bg-white border rounded-r-none rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-opacity-30 focus:ring-primary input input-bordered input-primary w-full input-sm sm:input-md " name='inputValue' placeholder="Search here by product name"
      // value={search}
           onChange={handleSearch}/>
              
               <div className=" rounded-l-none bg-white border border-primary rounded-md w-auto ">
    <label for="SortBy " className="sr-only bg-white">Catagory</label>

    <select id="SortBy" className=" border-r-0 text-xs sm:text-sm border-primary rounded sm:px-2 bg-white max-w-sm sm:max-w-md mx-auto sm:mt-3  text-center" onChange={handleCategory}>
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

<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-flow-col-6 2xl:grid-flow-col-8  gap-2 sm:gap-3 mx-5-2 sm:mx-0   bg-white 
p-2'>

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

        <div className=" bg-white    shadow-md   border border-primary rounded border-opacity-30">
       <div className="h-40 sm:h-40 w-full bg-gray-900 flex flex-col  justify-between p-1 sm:pb-1 sm:pl-1 bg-cover bg-center border-b-2 border-primary rounded rounded-b-none" style={{backgroundImage: `url(${product.image1})`}}>
         <div className="flex justify-between">
          </div>
       <div className='flex items-center'>
           <div>
           <p><span className="uppercase text-xs bg-green-50  border-green-500 border rounded text-green-700 font-medium select-none px-0.5"> {product.status} </span></p>
           </div>
            <div className='flex items-center mt-1'>
            <p >
            <span className="uppercase text-xs  bg-green-50  border-green-500 border rounded px-0.5 text-green-700 font-medium select-none ml-1 flex items-center">
              <span className="line-through decoration-gray-400    text-gray-800 ">
              <div className='flex items-center '>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-2 mr-0.5 ' alt="" />
            <p className="text-center text-gray-800  ">{product.previcePrice}</p>  
              </div> </span><span className=' ml-1 '> {Math.ceil(((product.price-product.previcePrice)*100/product.price))}%</span> </span> 
            </p>
            </div>
       </div>  
       </div>  
            <div className="p-2  items-center "> <p className="text-gray-600 font-light text-xs text-center">{product?.catagory}</p>
            <div className='text-center'>
            <Link to={`/single/${product._id}`} className="text-center mt-1 text-sm  font-bold text-primary hover:underline" >{(product.name).slice(0,20)}</Link>
            </div>    <div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-3 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800  ">{product.price}</p>  
              </div>  
            
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
   
    } 
  
    </div>
     );
};
export default Home;