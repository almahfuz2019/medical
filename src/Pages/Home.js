import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Discount from '../Components/Discount';
import HomePageCatagory from '../Components/HomePageCatagory';
import Loading from '../Components/Loading';
import SecondNav from '../Components/SecondNav';
import UseProducts from '../Deshboard/Hooks/UseProducts';
const Home = () => {
  const[allProducts,setAllProducts]=useState([]);
  const[page,setPage]=useState(0);
const[size,setSize]=useState(20);
  const[pageCount,setPageCount]=useState(0);
 
  const[products,setProducts]=useState([]);
  const[productLoading,setProductLoading]=useState(true);

  const fetchProducts = async() => {
    setProductLoading(true)
    fetch(`http://localhost:5000/productss?page=${page}&size=${size}`)
    .then(res=>res.json())
    .then(data=>{
      setPageCount(Math.ceil(data.count/size))
      setProducts(data.products)
      setAllProducts(data.allProducts)
      setProductLoading(false)
      console.log(data);
    })
  }

  
  useEffect(()=>{
    fetchProducts()
  },[page,size])

  const searchProducts = (e) => {
    const matched_products = allProducts.filter(pro => pro.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(matched_products)
    setPageCount(Math.ceil(matched_products.length/size))
  }
//   const { isLoading:productLoading, error, data:products } = useQuery( 'repoDatsa', () =>
//       fetch(`http://localhost:5000/products?page=${page}&size=${size}`).then(res =>
//        res.json()
//  )
//    )

if (productLoading){
   return <Loading/>};
     return (
          <div className='mx-1'>
                 {/* <Banner/> */}
                 <Discount/>
                 <HomePageCatagory/>
               {/* <SubNavbar/> */}
            {/* <BestSelling/> */}
            <div className="text-center  mt-5 sm:mt-10   ">
              <div className="flex justify-center mx-2">
              <input type="text" className="sm:w-1/2 py-2 pl-10 pr-4  bg-white border rounded-r-none rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary input input-bordered input-primary w-full" name='inputValue' placeholder="Search here" onChange={searchProducts}/>
               <div className=" rounded-l-none bg-white border border-primary rounded-md w-auto">
    <label for="SortBy " className="sr-only bg-white">Catagory</label>

    <select id="SortBy" className="h-10 border-r-0 text-sm border-primary rounded px-2 bg-white">
      <option className=''>Catagory</option>
      <option value="Title, DESC">Title,</option>
      <option value="Title, ASC">Title, ASC</option>
      <option value="Price, DESC">Price, DESC</option>
      <option value="Price, ASC">Price, ASC</option>
    </select>
  </div>
                  
               </div>    
               </div>

            {/* <input className=" p-3 m-5 border w-1/3 text-center justify-center text-black" onChange={searchProducts} type="text" /> */}

            <div className="divider  divide-current mt-5 "><span className='text-5xl  font-bold '>Our Products</span></div>
<div className="flex  space-x-1  my-10 md:ml-5">
	<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary ':"inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center w-20 h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary bg-white' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option selected value="20">20</option>
        </select>  
</div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-5 mx-5-2 sm:mx-5'>
  
      {products?.map(product=>
<>
        <div className=" bg-white    shadow-lg   border border-primary">
       <div className="h-28 sm:h-40 w-full bg-gray-900 flex flex-col  justify-between p-4 bg-cover bg-center border-b-2 border-primary "    style={{backgroundImage: `url(${product.image})`  }}>
         <div className="flex justify-between">
          </div>
       <div className='flex'>
            <p><span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">  available </span> </p>
            <p>
            <span className="uppercase text-xs  bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none ml-1"><span className="line-through decoration-gray-400   text-gray-400 ">${product.previcePrice} </span><span className=' ml-2'> -45%</span> </span> 
            </p>
       </div>  
       </div>  
            <div className="p-2  items-center "> <p className="text-gray-600 font-light text-xs text-center">{product?.catagory}</p>
            <div className='text-center'>
            <Link to={`/single/${product._id}`} className="text-gray-800 text-center mt-1 text-sm  font-bold hover:underline hover:text-primary" >{product.name}</Link>
            </div>    <p className="text-center text-gray-800 mt-1">€{product.price}</p>    
            
            </div>
            <div className=' mx-auto text-center mt-auto'>
            <input
                type="number"
                min="1"
                defaultValue={1}
                
                className="w-16 rounded  py-1 text-center text-xs border border-3 mx-auto border-primary text-primary"
                name='productQuentity' required
              /> 
            <button   className="py-1 px-4 text-white  disabled:opacity-50 mt-2 w-full flex items-center justify-center btn-primary" >   Add to order <span className='ml-2'><FaCartPlus/></span></button> </div> 
            </div>
            
            </>
        )}
        
        </div>
        {/* <div className="btn-group border-primary border">
        {
          [...Array(pageCount).keys()]
          .map(number=><button className="btn"
              onClick={()=>setPage(number)}>{number+1}</button>)
        }
</div> */}

<div className="flex justify-center space-x-1 dark:text-gray-100 my-10">
	<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md btn-primary':"inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center w-20 h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary bg-white' onChange={e=>setSize(e.target.value)} >
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