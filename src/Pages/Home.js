import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Discount from '../Components/Discount';
import Loading from '../Components/Loading';
import SecondNav from '../Components/SecondNav';
import UseProducts from '../Deshboard/Hooks/UseProducts';
const Home = () => {
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

  const searchProducts = (e) => {
    setSearchText('Da')
    // this.fetchProducts()
    console.log(searchText)
  }
//   const { isLoading:productLoading, error, data:products } = useQuery( 'repoDatsa', () =>
//       fetch(`http://localhost:5000/products?page=${page}&size=${size}`).then(res =>
//        res.json()
//  )
//    )

if (productLoading){
   return <Loading/>};
     return (
          <div>
                 {/* <Banner/> */}
                 <Discount/>
               {/* <SubNavbar/> */}
            {/* <BestSelling/> */}
            {/* <SecondNav/> */}

            <input className="block p-3 m-5 bg-red-200" onChange={searchProducts} type="text" />

<div className="my-8 sm:flex sm:items-center sm:justify-between">
  <div className="block sm:hidden">
    <button
      className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
    >
      <span className="text-sm font-medium"> Filters & Sorting </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </div>

  <div className="hidden sm:flex sm:gap-4">
    <div className="relative">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
        >
          <span className="text-sm font-medium"> Availability </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div
          className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
        >
          <div className="bg-white border border-gray-200 rounded w-96">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="p-4 space-y-1 border-t border-gray-200">
              <li>
                <label
                  for="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    In Stock (5+)
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Pre Order (3+)
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Out of Stock (10+)
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </details>
    </div>

    <div className="relative">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
        >
          <span className="text-sm font-medium"> Price </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div
          className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
        >
          <div className="bg-white border border-gray-200 rounded w-96">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">
                The highest price is $600
              </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between gap-4">
                <label
                  for="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>

                <label for="FilterPriceTo" className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>

    <div className="relative">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
        >
          <span className="text-sm font-medium"> Colors </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div
          className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
        >
          <div className="bg-white border border-gray-200 rounded w-96">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="p-4 space-y-1 border-t border-gray-200">
              <li>
                <label
                  for="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Red
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Blue
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Green
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterOrange"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOrange"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Orange
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterPurple"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPurple"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Purple
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterTeal"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterTeal"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Teal
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </details>
    </div>
  </div>

  <div className="hidden sm:block ">
    <label for="SortBy " className="sr-only">SortBy</label>

    <select id="SortBy" className="h-10 text-sm border-gray-300 rounded px-3">
      <option className=''>Sort By</option>
      <option value="Title, DESC">Title, DESC</option>
      <option value="Title, ASC">Title, ASC</option>
      <option value="Price, DESC">Price, DESC</option>
      <option value="Price, ASC">Price, ASC</option>
    </select>
  </div>
</div>

<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-5 mx-5-2 sm:mx-5'>
  
      {products?.map(product=>
<>
        <div className=" light:bg-red-700 dark:bg-gray-100   shadow-lg border-2  border ">
       <div className="h-28 sm:h-40 w-full bg-gray-300 flex flex-col  justify-between p-4 bg-cover bg-center border-b-2 border-primary"    style={{backgroundImage: `url(${product.image})`  }}>
         <div className="flex justify-between">
          </div>
       <div className='flex'>
            <p><span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">  available </span> </p>
            <p>
            <span className="uppercase text-xs  bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none ml-1"><span className="line-through decoration-gray-400   text-gray-400 ">${product.previcePrice} </span><span className=' ml-2'> -45%</span> </span> 
            </p>
       </div>  
       </div>  
            <div className="p-2  items-center"> <p className="text-gray-500 font-light text-xs text-center">{product?.catagory}</p>
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
            <button   className="py-1 px-4 text-white rounded disabled:opacity-50 mt-2 w-full flex items-center justify-center btn-primary" >   Add to order <span className='ml-2'><FaCartPlus/></span></button> </div> 
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
          <option selected value="10">10</option>
          <option value="15">15</option>
        </select>  
</div>

        
     
          </div>
     );
};
export default Home;