import React from 'react';
import Timer from "./Timer";
import SecondNav from "./SecondNav"
import Products from './Products';
import HomePageCatagory from './HomePageCatagory';
import Discount from './Discount';
import { Link } from 'react-router-dom';
const MainPage = () => {
     return (
          <div>
               
{/*          
               <SecondNav/> */}
          <div className="divider text-xl sm:text-4xl  font-bold my-10">Best Selling Products</div>

               <Products/>
               <HomePageCatagory/>
               
               <div className="divider text-xl sm:text-4xl  font-bold my-10 ">All Products</div>
               <Products/>
               <div className=" text-center mt-10">
               <Link to="all-Products" className=' btn btn-primary px-10'>Load More</Link>
               </div>
               <Discount/>
          </div>
     );
};
export default MainPage;