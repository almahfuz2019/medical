import React, { useEffect, useRef, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
const SingleItemorder = () => {
     const ref=useRef()
     const [singleUserOrder, setSingleUserOrder] = useState({});
     const { id } = useParams();
    //  console.log(singleUserOrder);
     useEffect(() => {
          const url = `http://localhost:5000/itemorder/${id}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setSingleUserOrder(data));
     }, []);
     let z=singleUserOrder?.userData;
     console.log(z);
     return (
          <div className=''>
              <div className='text-end mt-5'>
              <ReactToPrint trigger={()=>
               <button className='cursor-pointer text-2xl '><FaFileDownload/></button>} content={()=>ref.current}/>
              </div>
               <div ref={ref}>
               <div class="grid grid-cols-2 gap-4 px-10 py-10">
  <div>
     <p className='text-2xl'><span className='font-bold'>Order Number</span> #5342</p>
     <p className='text-2xl'><span className='font-bold'>Invoice Date and time:</span> {singleUserOrder.dateAndTime}</p>
     <p className='text-2xl'><span className='font-bold'>Payment Method:</span> Cash on delivery</p>
     <h1 className='text-2xl'>Issued By: <br />
     <span className='font-bold'>Medical Shop</span> <br />
     <span>01864210567</span>
     </h1>
     </div>
  <div className=' text-end  '>
   <img className='w-1/2  text-end ml-auto' src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" alt="" />
   <h1 className='text-2xl'>
     <span className='font-bold'>Issued To:</span><br />
     <span>{singleUserOrder.name}</span><br />
     <span>{singleUserOrder.address}</span><br />
     <span>{singleUserOrder.phone}</span>
   </h1>
  </div>


</div>
<table class="table-fixed text-2xl w-full text-center px-10">
  <thead className='bg-black text-white text-bold'>
    <tr>
      <th>Product</th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr className='border-b-2 mb-2'>
      <td>Baby care 4930</td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    <tr className='border-b-2 mb-2'>
      <td>Baby care 4930</td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    <tr className='border-b-2 mb-2'>
      <td>Baby care 4930</td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    <tr className='border-b-2 mb-2'>
      <td>Baby care 4930</td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    <tr className='border-b-2 mb-2'>
      <td>Baby care 4930</td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    
  </tbody>
</table>
   <div>
   <div className='text-2xl font-bold text-end my-5 px-10'>
   <div className=''>
   <span className='border-b-4 mb-2'>Subtotal ৳ 1,300.00</span> <br />
   <span className='border-b-4 mb-2'>Shipping ৳ 100.00 via Flat rate</span> <br />
<span className='border-b-4 mb-2'>Total ৳ {singleUserOrder.TotalPrice}</span>
   </div>
   </div>
   </div>
   <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-80">
  <div>
    <p>Thanks for shopping</p>
  </div>
</footer>
               </div>
               


          </div>
     );
};
export default SingleItemorder;