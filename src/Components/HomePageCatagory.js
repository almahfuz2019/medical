import React from 'react';
import { Link } from 'react-router-dom';
const HomePageCatagory = () => {
     return (
          <div>
            <section>
  <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-gray-100 my-12">
    <div
      className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
        <h2 className="text-3xl font-bold sm:text-4xl">Find your products catagory </h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <Link
          className="mt-8 inline-flex items-center btn btn-primary"
          to="/all-Products"
        >
          <span className="text-sm font-medium"> All products</span>

          <svg
            className="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 border p-5">

          <div className='h-30 hover:border-primary border border-primary hover:border-5 '>
          <a href="#" className="relative block group">
  <img
    src="https://cdn.medistorebd.com/wp-content/uploads/2020/09/beurer-infrared-lamp-with-3-level-timer-il-35-510x645.jpg"
    alt=""
    className="w-full object-cover transition duration-500 group-hover:opacity-90"
  />

  <div className="absolute inset-0 flex flex-col items-start justify-end p-2">
    <h3 className="text-xl font-medium text-white bg-gray-700 p-2 hover:underline ">Baby Care</h3>
  </div>
</a>

          </div>
          <div className='h-30 hover:border-primary border border-primary '>
          <a href="#" className="relative block group">
  <img
    src="https://cdn.medistorebd.com/wp-content/uploads/2022/04/1-48-1.webp"
    alt=""
    className="w-full object-cover transition duration-500 group-hover:opacity-90"
  />

  <div className="absolute inset-0 flex flex-col items-start justify-end p-2">
    <h3 className="text-xl font-medium text-white bg-gray-700 p-2 hover:underline underline-">Baby Care</h3>
  </div>
</a>

          </div>
          <div className='h-30 hover:border-primary border border-primary '>
          <a href="#" className="relative block group">
  <img
    src="https://cdn.medistorebd.com/wp-content/uploads/2018/12/Biolade-Total-Bilirubin-13.jpg"
    alt=""
    className="w-full object-cover transition duration-500 group-hover:opacity-90"
  />

  <div className="absolute inset-0 flex flex-col items-start justify-end p-2">
    <h3 className="text-xl font-medium text-white bg-gray-700 p-2 hover:underline underline-">Baby Care</h3>
  </div>
</a>

          </div>
          <div className='h-30 hover:border-primary border border-primary '>
          <a href="#" className="relative block group">
  <img
    src="https://cdn.medistorebd.com/wp-content/uploads/2016/09/BP-alrk-degital-510x510.jpg"
    alt=""
    className="w-full object-cover transition duration-500 group-hover:opacity-90"
  />

  <div className="absolute inset-0 flex flex-col items-start justify-end p-2">
    <h3 className="text-xl font-medium text-white bg-gray-700 p-2 hover:underline underline-">Baby Care</h3>
  </div>
</a>

          </div>
          <div className='h-30 hover:border-primary border border-primary '>
          <a href="#" className="relative block group">
  <img
    src="https://cdn.medistorebd.com/wp-content/uploads/2022/04/Techno-Health-86-1.webp"
    alt=""
    className="w-full object-cover transition duration-500 group-hover:opacity-90"
  />

  <div className="absolute inset-0 flex flex-col items-start justify-end p-2">
    <h3 className="text-xl font-medium text-white bg-gray-700 p-2 hover:underline underline-">Baby Care</h3>
  </div>
</a>

          </div>
          <div className='h-30 hover:border-primary border border-primary '>
          <a href="#" className="relative block group">
  <img
    src="https://cdn.medistorebd.com/wp-content/uploads/2020/11/unnamedmm.jpg"
    alt=""
    className="w-full object-cover transition duration-500 group-hover:opacity-90"
  />

  <div className="absolute inset-0 flex flex-col items-start justify-end p-2">
    <h3 className="text-xl font-medium text-white bg-gray-700 p-2 hover:underline underline-">Baby Care</h3>
  </div>
</a>

          </div>
      </div>
    </div>
  </div>
</section>
   
          </div>
     );
};
export default HomePageCatagory;