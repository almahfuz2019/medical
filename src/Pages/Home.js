import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Discount from '../Components/Discount';
import Loading from '../Components/Loading';
import SecondNav from '../Components/SecondNav';
import UseProducts from '../Deshboard/Hooks/UseProducts';
const Home = () => {
 const {products,productLoading,error,handleAddToCart,cart}=UseProducts();
if (productLoading) return <Loading/>;
if (error) return 'An error has occurred: ' + error.message
     return (
          <div>
                 {/* <Banner/> */}
                 <Discount/>
               {/* <SubNavbar/> */}
            {/* <BestSelling/> */}
            <SecondNav/>

<div class="my-8 sm:flex sm:items-center sm:justify-between">
  <div class="block sm:hidden">
    <button
      class="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
    >
      <span class="text-sm font-medium"> Filters & Sorting </span>

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
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </div>

  <div class="hidden sm:flex sm:gap-4">
    <div class="relative">
      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
        >
          <span class="text-sm font-medium"> Availability </span>

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
            <header class="flex items-center justify-between p-4">
              <span class="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                class="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul class="p-4 space-y-1 border-t border-gray-200">
              <li>
                <label
                  for="FilterInStock"
                  class="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    In Stock (5+)
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterPreOrder"
                  class="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Pre Order (3+)
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
                    id="FilterOutOfStock"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Out of Stock (10+)
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </details>
    </div>

    <div class="relative">
      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
        >
          <span class="text-sm font-medium"> Price </span>

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
            <header class="flex items-center justify-between p-4">
              <span class="text-sm text-gray-700">
                The highest price is $600
              </span>

              <button
                type="button"
                class="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div class="p-4 border-t border-gray-200">
              <div class="flex justify-between gap-4">
                <label
                  for="FilterPriceFrom"
                  class="flex items-center gap-2"
                >
                  <span class="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    class="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>

                <label for="FilterPriceTo" class="flex items-center gap-2">
                  <span class="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    class="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>

    <div class="relative">
      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
        >
          <span class="text-sm font-medium"> Colors </span>

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
            <header class="flex items-center justify-between p-4">
              <span class="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                class="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul class="p-4 space-y-1 border-t border-gray-200">
              <li>
                <label
                  for="FilterRed"
                  class="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Red
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterBlue"
                  class="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Blue
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterGreen"
                  class="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Green
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterOrange"
                  class="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOrange"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Orange
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterPurple"
                  class="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPurple"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <span class="text-sm font-medium text-gray-700">
                    Purple
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterTeal"
                  class="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterTeal"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <span class="text-sm font-medium text-gray-700">
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

  <div class="hidden sm:block ">
    <label for="SortBy " class="sr-only">SortBy</label>

    <select id="SortBy" class="h-10 text-sm border-gray-300 rounded px-3">
      <option className=''>Sort By</option>
      <option value="Title, DESC">Title, DESC</option>
      <option value="Title, ASC">Title, ASC</option>
      <option value="Price, DESC">Price, DESC</option>
      <option value="Price, ASC">Price, ASC</option>
    </select>
  </div>
</div>
{cart.length}
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
            <button onClick={()=>handleAddToCart(product)}  className="py-2 px-4 text-white rounded disabled:opacity-50 mt-4 w-full flex items-center justify-center btn-primary" >   Add to order <svg        xmlns="http://www.w3.org/2000/svg"class="h-6 w-6 ml-2" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"> <path          stroke-linecap="round"          stroke-linejoin="round"  stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>  </svg></button>  </div></div>
            </>
        )}
        </div>
          </div>
     );
};
export default Home;