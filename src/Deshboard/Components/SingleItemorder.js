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
     <p className=''><span className='font-semibold'>Order Number</span> #5342</p>
     <p className=''><span className='font-semibold'>Date And Time:27-02-2022</span> {singleUserOrder.dateAndTime}</p>
     <p className=''><span className='font-semibold'>Payment Method:</span> Cash on delivery</p>
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
     <span>{singleUserOrder.phone}</span>
   </h1>
  </div>
{/* {
  singleUserOrder.userData.map(x=>
<p>{x._id}</p>
)
} */}

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
    <tr className=' mb-2'>
      <td className='font-semibold'>Baby care 4930</td>
      <td></td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    <tr className=' mb-2'>
      <td className='font-semibold'>Baby care 4930</td>
      <td></td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    <tr className=' mb-2'>
      <t className='font-semibold'd>Baby care 4930</t> <td></td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    <tr className=' mb-2'>
      <t className='font-semibold'd>Baby care 4930</t> <td></td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    <tr className=' mb-2'>
      <t className='font-semibold'd>Baby care 4930</t> <td></td>
      <td>$12424</td>
      <td>2</td>
      <td>$132432</td>
    </tr>
    
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
  <div className='border-b-2 border-black py-5'>
<h1 className='text-center font-semibold  pl-10'>BDT 3334.30</h1>
<p className='text-center pl-5'>BDT 30293</p>
<p className='text-center mr-1'>BDT 32</p>
<p className='text-center font-bold pl-7'>BDT 23422</p>
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