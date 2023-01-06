import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';
import Loading from '../Components/Loading';
const Login = () => {
    const navigate=useNavigate();
    let location = useLocation();
    
  let from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
   
  
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email,data.password);
  }
  let signInErrorMessage;
  if(error){
    
signInErrorMessage=<p className='text-red-700'>{error?.message}</p>
  }
  if (loading) {
    return <Loading/>;
  }
 
  
  if (user) {
    navigate(from, { replace: true });
  
  }
     return (
         
<div className="py-6 my-6">
<div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover" style={{backgroundImage:"url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}></div>
        <div className="w-full p-8 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Medical</h2>
         <p className="text-xl text-gray-600 text-center">Welcome back!</p>
        <SocialLogin/>
         <form onSubmit={handleSubmit(onSubmit)}>

     
         <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
           <span className="border-b w-1/5 lg:w-1/4"></span>
           </div>
           <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"
            {...register("email",{
                required:{
                
                value: true,
                message:"Email is Required"
            }, 
            pattern: { 
                value:/[A-Z0-9]+@[a-z]+\.[a-z]{3}/,message:"Provide a valid Email"
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
            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"
            {...register("password",{
                required:{
                
                value: true,
                message:"password is Required"
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
            <div className="mt-8">
            <input className="bg-primary text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" type="submit" value="Login"/>
            </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
           <span className="border-b w-1/5 md:w-1/4"></span>
            <NavLink to="/register" className="text-xs text-gray-500 ">Don’t have an account? <span className='text-primary'>Sign in</span> </NavLink>
            <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
                  </div>
              </div>
          </div>
     );
};
export default Login;