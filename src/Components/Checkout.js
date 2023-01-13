import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseUserSpacifiqData from '../Deshboard/Hooks/UseUserSpacifiqData';
import { ToastContainer, toast } from 'react-toastify';

import auth from '../firebase.init';
import Loading from './Loading';
const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);
  // if(loading){
  //   return <Loading/>
  // }
  // if(error){
  //   return <p>{error}</p>
  // }
  const time= new Date().toLocaleString();
  const {usdata,total}=UseUserSpacifiqData();
  // console.log(x);
  const checkOut=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const phone=event.target.phone.value;
    const email=event.target.email.value;
    const address=event.target.address.value;
    const message=event.target.message.value;
    const bkishID=event.target.bkishID.value;
    const bkishNumber=event.target.bkishNumber.value;
    const userData=usdata;
    const TotalPrice=total;
    const dateAndTime=time;
    let status="wating";
    const checkOut={name,phone,email,address,message,bkishID,dateAndTime,userData,TotalPrice,status,bkishNumber};
    // console.log(checkOut);
  fetch('http://localhost:5000/itemorder', {
 method: 'POST', // or 'PUT'
 headers: {
   'Content-Type': 'application/json',
 },
 body: JSON.stringify(checkOut),
})
 .then((res) => res.json())
 .then((data) => {
  toast.success('Submitted Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
    });
  //  event.target.reset();
 })
    }
     return (
          <div>
               
<section className='mt-12'>
  <h1 className="text-center font-bold text-4xl mb-5">Checkout</h1>

  <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
    <div className="py-12 bg-gray-100 md:py-24 border-primary  border-r-0 border border-2">
      <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
        <div className="flex items-center">
          <span className="w-10 h-10 bg-blue-700 rounded-full"></span>

          <h2 className="ml-4 font-medium text-gray-900">Medical</h2>
        </div>

        <div>
          <p className="text-2xl tracking-tight text-primary font-bold">
            ${total}
          </p>

          <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
        </div>

        <div>
          <div className="flow-root">
       
          <div className="avatar-group -space-x-6">
          {usdata?.map(data=>
          <div className="avatar">
            <div className="w-12">
              <img  src={data?.product?.image} />
            </div>
          </div>
        
        )}

          <div className="avatar placeholder">
            <div className="w-12 bg-neutral-focus text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-12  md:py-24 border border-l-0 border-2 border-primary">
      <div className="max-w-lg px-4 mx-auto lg:px-8">
        <form onSubmit={checkOut} className="grid grid-cols-6 gap-4">


          <div className="col-span-6">
            <label
              for="LastName"
              className="block text-xs font-medium text-gray-700"
            >
              Name
            </label>

            <input required
              type="text"
              id="LastName"
              name='name'
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou"
            />
          </div>

          <div className="col-span-6">
            <label for="Email" className="block text-xs font-medium text-gray-700">
              Email address
            </label>

            <input required
              type="email"
              id="Email"
              value=  {user?.email}
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou"
            />
          </div>

          <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              Phone
            </label>

            <input required
              type="tel"
              id="Phone"
              name='phone'
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou"
            />
          </div>
          <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              address
            </label>

            <input required
              type="tel"
              id="Phone"
              name='address'
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou"
            />
          </div>

          <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              message
            </label>
             <textarea name='message'
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>
          

          <div className="flex flex-col w-full border-opacity-50 col-span-6">
          <div className='flex w-full col-span-6'>
<input type="radio" name="radio-1" className="radio radio-primary"  checked/>
<span className='ml-3'>Chash on delevery</span>

</div>
  <div className="divider">OR</div>
  <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              Bkish transition ID
            </label>
            <input
              type="tex" 
              placeholder='Optional'
              id="Phone"
              name='bkishID'
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              Bkish phone number
            </label>
            <input
              type="tex" 
              placeholder='Optional'
              id="Phone"
              name='bkishNumber'
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
</div>

          

          <div className="col-span-6">
            <input type="submit"
              className="block w-full rounded-md btn-primary p-2.5 text-sm font-semibold text-white transition hover:shadow-lg"
            value="submit"/>
              
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

          </div>
     );
};
export default Checkout;