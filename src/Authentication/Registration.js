import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../firebase.init';
import logo from '../Images/logo.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Components/Loading';
import SocialLogin from './SocialLogin';
import UseToken from '../Deshboard/Hooks/UseToken';
const Registration = () => {
  const [agree,setAgree]=useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
      const [token]=UseToken(user);
  const navigate=useNavigate();
  const onSubmit =async data => {
    await createUserWithEmailAndPassword(data.email,data.password);
     await updateProfile({ displayName:data.name });
  }
  let signInErrorMessage;
  if(error || updateerror){
signInErrorMessage=<p className='text-red-700'>{error?.message || updateerror?.message}</p>
  }
  if(token){
    navigate("/")
  }
  if (loading || updating) {
    return <Loading/>;
  }
     return (
<div className="py-10 bg-white">
<div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl border border-primary border-opacity-30">
        <div className="hidden lg:block lg:w-1/2 bg-cover" style={{backgroundImage:"url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}></div>
        <div className="w-full p-8 lg:w-1/2">
        <img className='h-12 w-28 text-center mx-auto' src={logo} alt="logo" />
        <SocialLogin/>
       
         <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <a href="#" className="text-xs text-center text-gray-500 uppercase">OR</a>
           <span className="border-b w-1/5 lg:w-1/4"></span>
           </div>
           <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input placeholder='Type your name' className="bg-gray-200 text-primary focus:outline-primary focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none caret-primary" type="text"
            {...register("name",{
                required:{
                value: true,
                message:"Name is Required"
            }
              })}
            />
            <label className='label '>
            {errors.name?.type === 'required' && <p className='text-red-600' >{errors.name.message}</p>}
            </label>
           </div>
           <div className="mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input placeholder='Type a valid email' className="bg-gray-200 text-primary focus:outline-primary focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none caret-primary" type="email"
            {...register("email",{
                required:{
                value: true,
                message:"E-mail is Required"
            }, 
            pattern: { 
                value:/@[a-z]/,message:"Provide a valid Email"
            }
              })}
            />
            <label className='label '>
            {errors.email?.type === 'required' && <p className='text-red-600' >{errors.email.message}</p>}
            {errors.email?.type === 'pattern' && <p className='text-red-600' >{errors.email.message}</p>}
            </label>
           </div>
           <div className="mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input className="bg-gray-200 text-primary focus:outline-primary focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none caret-primary" placeholder='Type a unique password' type="password"
            {...register("password",{
                required:{
                value: true,
                message:"Password is Required"
            }, 
            minLength: { 
                value:6,
                message:"Must be 6 char password or long"
            }
              })}
            />
            <label className='label'>
            {errors.password?.type === 'required' && <p className=' text-red-600' >{errors.password.message}</p>}
            {errors.password?.type === 'minLength' && <p className=' text-red-600' >{errors.password.message}</p>}
            </label>
           </div>
          {signInErrorMessage}
          
          <div className="mt-2">

<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 btn-primary text-white">✕</label>
    <h3 className="text-lg font-bold text-primary">Terms and conditions</h3>
    <p className="py-4 text-justify ">This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>
  </div>
</div>
<div className="col-span-6">
     <input onClick={()=>setAgree(!agree)} type="checkbox" name="trems" id="terms" className='accent-primary'/>
     <label className={agree?'text-primary ml-2':'text-black ml-2'} htmlFor="terms">I agree with the </label><label htmlFor="my-modal-3"><span className='text-red-600 underline cursor-pointer' >terms and conditions.</span></label>
   </div>
      </div>
      <div className="col-span-6 mt-2">
            {
              agree?<input type="submit"
              className="block w-full rounded-md btn-primary py-2 text-xl font-semibold text-white transition hover:shadow-lg cursor-pointer"
            value="Register"/>:<input type="submit"
            className="block w-full rounded-md btn-primary py-2 text-xl font-semibold text-white transition hover:shadow-lg hover:text-white hover:bg-gray-300  bg-gray-300 cursor-not-allowed btn-disabled"
          value="Register"/>
            }
          </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
           <span className="border-b w-1/5 md:w-1/4"></span>
            <NavLink to="/login" className="text-xs text-gray-500 ">Already have an account?  <span className='text-primary underline font-bold '>Log in</span> </NavLink>
            <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
                  </div>
              </div>

          </div>
     );
};
export default Registration;