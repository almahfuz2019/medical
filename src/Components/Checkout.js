import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseUserSpacifiqData from '../Deshboard/Hooks/UseUserSpacifiqData';
import { toast } from 'react-toastify';
import logo from "../Images/logo.png"
import auth from '../firebase.init';
import Loading from './Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Checkout = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [agree,setAgree]=useState(false);
  const [agreeWithCashOnDelevery,setAgreeWithCashOnDelevery]=useState(false);
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return <Loading/>
  }
  if(error){
    return <p>{error}</p>
  }
  const time= new Date().toLocaleString();
  const {usdata,total}=UseUserSpacifiqData();

  const checkOut=async(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const phone=event.target.phone.value;
    const email=event.target.email.value;
    const village=event.target.village.value;
    const union=event.target.union.value;
    const thana=event.target.thana.value;
    const district=event.target.district.value;
    const bkishID=event.target.bkishID?.value || "";
    const bkishNumber=event.target.bkishNumber?.value || "";
    const userData=usdata;
    const TotalPrice=total;
    const dateAndTime=time;
    let status="Wating";
    const checkOut={name,phone,email,village,union,thana,district,bkishID,dateAndTime,userData,TotalPrice,status,bkishNumber};
  await axios.post("https://server.chaayasurgical.com/itemorder",checkOut,{
    headers: {
      'content-type': 'application/json',
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
   
  }
  })
  toast.success('Submitted Successfully', {
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
navigate("/deshboard")
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
      <div className=" px-4 mx-auto space-y-8 lg:px-20">
        <div className="flex items-center">
        <img className='h-12 w-28 ' src={logo} alt="logo" />
        </div>

        <div>
          <p className="text-2xl tracking-tight text-primary font-bold flex items-center">
            Total amount:  <div className='flex items-center justify-center ml-2'>
            <img src="https://i.ibb.co/RS3Xm74/1200px-Taka-Bengali-letter-svg-1.png" className='h-5 mr-0.5 mt-1.5' alt="" />
            <p className="text-center  mt-1 text-primary">{total-100}</p>  
              </div> 
          </p>

          <p className="mt-1 text-sm text-gray-600">Thank's for shopping</p>
        </div>
        <div>
          <div className="flow-root">
          <div className="avatar-group -space-x-6 bg-primary p-2">
          {usdata?.map(data=>
          <div className="avatar">
            <div className="w-12 ">
              <img className=''  src={data?.product?.image1} />
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
      <h1 className='font-bold text-2xl md:mx-20 mx-4  mt-10 mb-5 text-primary'>Your orders</h1>
<div className='border rounded  shadow md:mx-20 mx-4  p-6 h-100 ' style={{backgroundColor:"#f6f6f6"}}>
  <div className='flex justify-between border-gray-300 border border-x-0 border-t-0 border-b-1 pb-2 '>
  <h1 className='font-bold'>PRODUCT</h1><h1 className='font-bold'>SUBTOTAL</h1>
  </div>
 {usdata?.map(data=>

 <>
  <div>
 <div className='flex justify-between'>
    <h1>{data?.product?.name}</h1>
    <div className='flex items-center ml-1'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-2.5 mr-0.5 mt-1' alt="" />
            <p className="text-center text-gray-800 mt-1 "> {data?.productQuentity*data?.product?.price}</p>  
              </div>
  </div>
 <h1>scale × {data?.productQuentity}</h1>
 </div>
 </>
 )}
  <div className='flex justify-between border-gray-300 border border-x-0 border-t-0 border-b-1 py-2'>
  <h1 className='font-bold'>Subtotal</h1><h1 className='text-primary font-bold flex items-center'><div className='flex items-center ml-1'>
            <img src="https://i.ibb.co/RS3Xm74/1200px-Taka-Bengali-letter-svg-1.png" className='h-2.5 mr-0.5 mt-1' alt="" />
            <p className="text-center  mt-1 text-primary "> {total-100}</p>  
              </div></h1>
  </div>
  <div className='border border-x-0 border-t-0 border-b-1 border-gray-300 pb-2'>
    <h1 className='font-bold'>Shipping</h1>
    <p>Enter your address to view shipping options.</p>
  </div>
  <div className='flex justify-between border border-gray-300 border-x-0 border-t-0 border-b-1 font-bold py-2'>
    <h1>Total</h1><h1 className='text-primary flex items-center'><div className='flex items-center ml-1'>
            <img src="https://i.ibb.co/RS3Xm74/1200px-Taka-Bengali-letter-svg-1.png" className='h-2.5 mr-0.5 mt-1' alt="" />
            <p className="text-center  mt-1 text-primary "> {total}</p>  
              </div></h1>
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
              className="bg-gray-100 text-primary focus:outline-primary focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
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
              className="bg-gray-100 text-primary focus:outline-primary focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
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
              className="bg-gray-100 text-primary focus:outline-primary focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
            />
          </div>
          <div className="col-span-6">
<p className='text-center  text-primary  text-xl  font-semibold'>Address</p>
          </div>
          <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              Village</label>
            <input required type="text" name='village' placeholder='Enter your address' className="bg-gray-100 text-primary focus:outline-primary focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
            />
          </div>
          <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
            Union</label>
            <input required type="text" name='union' placeholder='Enter your address' className="bg-gray-100 text-primary focus:outline-primary focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
            />
          </div>
          <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              Thana</label>
            <input required type="text" name='thana' placeholder='Enter your address' className="bg-gray-100 text-primary focus:outline-primary focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
            />
          </div>
          <div className="col-span-6">
            <label for="Phone" className="block text-xs font-medium text-gray-700">
            District</label>
            <input required type="text" name='district' placeholder='Enter your address' className="bg-gray-100 text-primary focus:outline-primary focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
            />
          </div>

          <div className="flex flex-col w-full border-opacity-50 col-span-6">
        

<p className='text-center  text-primary  text-xl mb-2 font-semibold'>Payment method</p>


<div className=" items-center gap-8">
    <label className='items-center flex'>
        <input
        className=' radio-sm radio-primary accent-primary'
          type="radio"
          value="cash on delivery"
          checked={selectedOption === "cash on delivery"}
          onChange={handleOptionChange}
        />
       <span className='ml-2 mb-1 text-xl'>cash on delivery</span>
      </label>

      <label  className='items-center  flex'>
        <input
          type="radio"
          className=' radio-sm radio-primary accent-primary'
          value="bkash"
          checked={selectedOption === "bkash"}
          onChange={handleOptionChange}
        />
       
       <span className='ml-2  text-xl'>Bkash</span>
      </label>
 
      {selectedOption === "cash on delivery" && (
<>
<div className='mt-2 text-primary border border-primary border-opacity-30 rounded-lg p-2'>
        <p>Please pay 100 take for confirm</p>
     <p> <a href="tel:5551234567">Bkish Number: 0178787843</a></p>
        </div>
</>
      )}
      {selectedOption === "bkash" && (
   <>
   <div className="col-span-6" >
        <label for="Phone" className="block text-xs font-medium text-gray-700">
          Bkish transition ID
        </label>
        <input
          type="tex" 
          placeholder='Enter your TR ID'
          id="Phone"
          name='bkishID'
          className="bg-gray-100 text-primary focus:outline-primary focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none"
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
          className="bg-gray-100 text-primary focus:outline-primary focus:shadow-outline border border-primary border-opacity-50 rounded py-2 px-4 block w-full appearance-none "
        />
      </div></>
      )}
        </div>
        </div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2  btn-primary text-white">✕</label>
    <h3 className="text-lg font-bold text-primary">Terms and conditions</h3>
    <p className="py-4 text-justify ">This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>
  </div>
</div>
        <div className="col-span-6">
          <input onClick={()=>setAgree(!agree)} type="checkbox" name="trems" id="terms" className='accent-primary'/>
          <label className={agree?'text-primary ml-2':'text-black ml-2'} htmlFor="terms">I agree with the </label><label htmlFor="my-modal-3"><span className='text-red-600 underline cursor-pointer' >terms and conditions.</span></label>
        </div>
          <div className="col-span-6">
            {
              agree?<input type="submit"
              className="block w-full rounded-md btn-primary p-2.5 text-xl font-semibold text-white transition hover:shadow-lg cursor-pointer"
            value="Place Order"/>:<input type="submit"
            className="block w-full rounded-md btn-primary p-2.5 text-xl font-semibold text-white transition hover:shadow-lg hover:text-white hover:bg-gray-300  bg-gray-300 cursor-not-allowed btn-disabled"
          value="Place Order"/>
            }
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
<div>
      
  
      
    </div>
          </div>
     );
};
export default Checkout;