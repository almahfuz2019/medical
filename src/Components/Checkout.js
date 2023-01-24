import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseUserSpacifiqData from '../Deshboard/Hooks/UseUserSpacifiqData';
import { toast } from 'react-toastify';

import auth from '../firebase.init';
import Loading from './Loading';
import axios from 'axios';
const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return <Loading/>
  }
  if(error){
    return <p>{error}</p>
  }
 
  const time= new Date().toLocaleString();
  const {usdata,total}=UseUserSpacifiqData();
  // console.log(x);
  const checkOut=async(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const phone=event.target.phone.value;
    const email=event.target.email.value;
    const address=event.target.address.value;
    // const message=event.target.message.value;
    const bkishID=event.target.bkishID.value;
    const bkishNumber=event.target.bkishNumber.value;
    const userData=usdata;
    const TotalPrice=total;
    const dateAndTime=time;
    let status="Wating";
    const checkOut={name,phone,email,address,bkishID,dateAndTime,userData,TotalPrice,status,bkishNumber};
  await axios.post("http://localhost:5000/itemorder",checkOut)
  toast.success('Update Successfully', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
    });
   event.target.reset();
    }
     return (
          <div>
               
<section className='mt-12'>
  <h1 className="text-center font-bold text-3xl sm:text-4xl mb-5">Checkout</h1>
  <div className='mx-auto text-center my-2'>
      <ul className="steps ">
  <li className="step step-primary mx-2">Add Product</li>
  <li className="step step-primary mx-2">Shopping Cart</li>
  <li className="step step-primary mx-2">CheckOut</li>
</ul>
</div>
  <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2 ">
    <div className="py-12  md:py-24 border border-2  bg-white border-primary">
      <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
        <div className="flex items-center">
          <span className="w-10 h-10 bg-primary rounded-full"></span>

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
       
          <div className="avatar-group -space-x-6 bg-primary p-2">
          {usdata?.map(data=>
          <div className="avatar">
            <div className="w-12 ">
              <img className=''  src={data?.product?.image} />
            </div>
          </div>
        
        )}

          <div className="avatar placeholder">
            <div className="w-12 bg-neutral-focus text-neutral-content">
              <span className='text-4xl mb-2 font-bold'>+</span>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-12  md:py-24 border border-l-0 border-2 border-primary bg-white">
      <div className="max-w-lg px-4 mx-auto lg:px-8">
        <form onSubmit={checkOut} className="grid grid-cols-6 gap-4  p-5 rounded border border-primary border-opacity-50">


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
              placeholder='Enter your name'
              className="bg-gray-100 text-primary focus:outline-none focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
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
              className="bg-gray-100 text-primary focus:outline-none focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
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
              placeholder='Enter your phone'
              className="bg-gray-100 text-primary focus:outline-none focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
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
              placeholder='Enter your address'
              className="bg-gray-100 text-primary focus:outline-none focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
            />
          </div>

          <div className="flex flex-col w-full border-opacity-50 col-span-6">
        

<p className='text-center  text-primary  text-xl mb-2 font-semibold'>Payment method</p>
<div class=" items-center gap-8">
    <label class="inline-flex items-center">
        <input type="radio" name="vehicle" class="w-5 h-5 text-primary bg-primary"/>
            <span class="ml-2 text-gray-700">
                Cash on delevery
            </span>
        </label> <br />
       <div className='mt-2 text-sky-600 border border-primary border-opacity-30 rounded-lg p-2'>
       <p>Please pay 100 take for confirm</p>
    <p> <a href="tel:5551234567">Bkish Number: 0178787843</a></p>
       </div>
        <div className="divider">OR</div>
        <label class=" inline-flex items-center">
            <input type="radio" name="vehicle" class="w-5 h-5 text-primary"/>
                <span class="ml-2 text-gray-700">
                    Bkish
                </span>
            </label>
        </div>


  <div className="col-span-6" >
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              Bkish transition ID
            </label>
            <input
              type="tex" 
              placeholder='Enter your TR ID'
              id="Phone"
              name='bkishID'
              className="bg-gray-100 text-primary focus:outline-none focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
            />
          </div>
          <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              Bkish phone number
            </label>
            <input
              type="tex" 
              placeholder='Bkish number'
              id="Phone"
              name='bkishNumber'
              className="bg-gray-100 text-primary focus:outline-none focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none "
            />
          </div>
</div>

          

          <div className="col-span-6">
            <input type="submit"
              className="block w-full rounded-md btn-primary p-2.5 text-xl font-semibold text-white transition hover:shadow-lg cursor-pointer"
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