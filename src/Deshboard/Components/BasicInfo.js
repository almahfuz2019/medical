import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
// import UseCatagory from '../Hooks/UseCatagory';
import UseProducts from '../Hooks/UseProducts';
const BasicInfo = () => {
  const [products,setProducts]=useState([])
  const [orders,setOrders]=useState([])
  const [watingOrders,setWatingOrders]=useState([])
  const [doneOrders,setDoneOrders]=useState([])
  const [shipmentOrders,setShipmentOrders]=useState([])
  const [contactcount,setContactcount]=useState([])
  const [ordersBydateandtime,setordersBydateandtime]=useState([])
  const time= new Date().toLocaleString();
  useEffect(()=>{
    fetch(`http://localhost:5000/productssearchbydateandtime?dateAndTime=${time}`)
    .then(res=>res.json())
    .then(data=>setordersBydateandtime(data))

},[])
  useEffect(()=>{
    fetch(`http://localhost:5000/productssearch?status=Shipment`)
    .then(res=>res.json())
    .then(data=>setShipmentOrders(data))

},[])
  useEffect(()=>{
    fetch(`http://localhost:5000/productssearch?status=Wating`)
    .then(res=>res.json())
    .then(data=>setWatingOrders(data))

},[])
  useEffect(()=>{
    fetch(`http://localhost:5000/productssearch?status=Done`)
    .then(res=>res.json())
    .then(data=>setDoneOrders(data))

},[])
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
let timeOfDay;
const date = new Date();
const hours = date.getHours();
if (hours < 12) {
  timeOfDay = 'Good Morning';
} else if (hours >= 12 && hours < 17) {
  timeOfDay = 'Good Afternoon';
} else {
  timeOfDay = 'Good Night';
}
     return (
          <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
            <div className="text-3xl ">
              <h2 className="text-4xl font-bold text-primary sm:text-5xl ">
                 {timeOfDay}, Boss.
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
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Pending Orders
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{watingOrders.length}</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Completed Orders
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{doneOrders.length}</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                     Orders in Shipment
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{shipmentOrders.length}</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Today's Orders
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{ordersBydateandtime.length}</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Messages
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{contactcount.count}</dd>
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Amount
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{contactcount.count+3232}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        
     );
};
export default BasicInfo;