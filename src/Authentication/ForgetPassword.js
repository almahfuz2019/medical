import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Components/Loading';
const ForgetPassword = () => {
     const [emails, setEmails] = useState('');
     console.log(emails);
     const auth = getAuth();
     const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth); 
         let signInErrorMessage;
     if(error){
   signInErrorMessage=<p className='text-red-700'>{error?.message}</p>
     }
     if (sending ) {
       return <Loading/>;
     }
        return (   
   <div className="py-6 my-6">
   <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl border-primary border border-opacity-30">
           <div className="hidden lg:block lg:w-1/2 bg-cover" style={{backgroundImage:"url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}></div>
           <div className="w-full p-8 lg:w-1/2">
           <h2 className="text-2xl font-semibold text-gray-700 text-center">Medical</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
    
   
        
            <div className="mt-4 flex items-center justify-between">
             <span className="border-b w-1/5 lg:w-1/4"></span>
             <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
              </div>
              <div className="mt-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
               <input onChange={(e) => setEmails(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"
              
               
               />
               
              </div>
            
              <div className='text-end'>
         <input
           type="email"
           
           onChange={(e) => setEmails(e.target.value)}
         />
        
       </div>
             {signInErrorMessage}
               <div className="mt-8 mx-auto text-center w-full">
               <input type="submit" value="Forget Password" className='bg-primary text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600'
           onClick={async () => {
             const success = await sendPasswordResetEmail(
               emails
             );
             if (success) {
               toast.success("Check your email")
             }
           }}
         />
               
               </div>
      
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
export default ForgetPassword;