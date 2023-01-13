import React, { useEffect, useRef, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
const SingleItemorder = () => {
     const ref=useRef()
     const [singleUserOrder, setSingleUserOrder] = useState({});
     const { id } = useParams();
    //  (singleUserOrder.userData);
     useEffect(() => {
          const url = `http://localhost:5000/itemorder/${id}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setSingleUserOrder(data));
     }, []);
     const time= new Date().toLocaleString();
     let subTtotal=0;
     let total=0;
     for(const userD of singleUserOrder.userData||[]){ 
      subTtotal += parseInt(userD.productQuentity) * parseInt(userD.product.price) 
      total=subTtotal+100;
    }
    //  console.log(z);
     return (
          <div className=''>
              <div className='text-end mt-5'>
              <ReactToPrint trigger={()=>
               <button className='cursor-pointer  '><FaFileDownload/></button>} content={()=>ref.current}/>
              </div>
               <div ref={ref}>
               <h1 className='text-center font-bold text-4xl py-5'>Medical Shop</h1>
            
               <div class="grid grid-cols-2 gap-4 px-10  border border-2 border-l-0 border-r-0  border-b-0 border-black mb-10">
  <div>
    <h1 className='text-2xl font-bold'>Invoice</h1>
     <p className=''><span className='font-semibold'>Order Number</span> #{singleUserOrder.phone?.slice(3, 9)*2}</p>
     <p className=''><span className='font-semibold'>Delevery Date And Time:</span> {time}</p>
     <p className=''><span className='font-semibold'>Payment Method:</span> {singleUserOrder.bkishID==="" || singleUserOrder.bkishNumber===""?<span>Cash on delivery</span>: <span>Bkish <br />phone: {singleUserOrder.bkishNumber} <br />Trans ID: {singleUserOrder.bkishID} </span>}</p>
     <h1 className=''>Issued By: <br />
     <span className='font-semibold'>Medical Shop</span> <br />
     <span>01864210567</span>
     </h1>
     </div>
  <div className=' text-end  mt-auto'>
 
   <h1 className=''>
     <span className='font-bold text-2xl'>Issued To:</span><br />
     <span>{singleUserOrder.name}</span><br />
     <span>{singleUserOrder.address}</span><br />
     <span>{singleUserOrder.phone}</span> <br />
     <span>{singleUserOrder.email}</span> <br />
     <span>Order Date: {singleUserOrder.dateAndTime}</span>
   </h1>
  </div>


</div>
<table class="table-fixed  w-full text-center px-10">
  <thead className=' text-black fotn-semibold border-b-2 border border-black border-l-0 border-r-0 border-t-0'>
    <tr className=''>
      <th>Product</th><th></th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody className=' border-black border-b-2'>
  {
  singleUserOrder.userData?.map(x=>
<tr className=' mb-2 border-b'>
      <td className='font-semibold'>{x.product.name}</td>
      <td></td>
      <td>${x.product.price}</td>
      <td>{x.productQuentity}</td>
      <td>${x.productQuentity*x.product.price}</td>
    </tr>
)
}
    
  </tbody>
</table>
<div class="grid grid-cols-5">
  <div></div>
  <div></div>
  <div></div>
  <div className='border-b-2 border-black py-5'>
<h1 className=' font-semibold '>Subtotal
</h1>
<p>+Delivery fee</p>
<p>-Discount</p>
<p className='font-bold'>Total</p>
  </div>
  <div className='border-b-2 border-black py-5 '>
<h1 className=' ml-28 font-semibold '>BDT {subTtotal}</h1>
<p className=' ml-28 '>BDT 100</p>
<p className=' ml-28 '>BDT 00</p>
<p className=' ml-28 font-bold'>BDT {total}</p>
  </div>
</div>
   <footer className="footer footer-center p-4 bg-gray-500  mt-96 text-white">
  <div>
    <p>Thanks for shopping</p>
  </div>
</footer>
               </div>
               


          </div>
     );
};
export default SingleItemorder;