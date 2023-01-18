import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
// import UseCatagory from '../Hooks/UseCatagory';
import UseProducts from '../Hooks/UseProducts';
const BasicInfo = () => {
  const [products,setProducts]=useState([])
  const [orders,setOrders]=useState([])
  const [contactcount,setContactcount]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/contactcount")
    .then(res=>res.json())
    .then(data=>setContactcount(data))

},[])
  useEffect(()=>{
    fetch("http://localhost:5000/itemordercoutn")
    .then(res=>res.json())
    .then(data=>setOrders(data))

},[])
  useEffect(()=>{
    fetch("http://localhost:5000/productCount")
    .then(res=>res.json())
    .then(data=>setProducts(data))

},[])
     return (
          <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
            <div className="text-3xl ">
              <h2 className="text-4xl font-bold text-primary sm:text-5xl ">
                Welcome Boss
              </h2>
            </div>
        
            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Products
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">
                    {products.count}
                  </dd>
                </div>
        
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Orders
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{orders.count}</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Contacts
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{contactcount.count}</dd>
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Contacts
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{contactcount.count}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        
     );
};
export default BasicInfo;