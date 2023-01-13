import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillEye } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import UserRow from './UserRow';
const Users = () => {

     const { isLoading, error, data:users,refetch } = useQuery( 'users', () =>
     fetch('http://localhost:5000/user',{
          method:"GET",
          headers:{
               authorization:`Bearer ${localStorage.getItem('accessToken')}`
          }
     }).then(res =>
      res.json()
)
  )
  // console.log(users);
  if(isLoading){
     return <Loading/>
  }
     return (
          <div>
             <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-3xl '>Total Products: {users?.length}</span></div>
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Remove Admin</th>
              </tr>
            </thead>
    
         
            <tbody>
             {users.map(user=><UserRow
             key={user._id}
             refetch={refetch}
             user={user}
             >

             </UserRow>)}
            </tbody>
  
          </table>
        </div>
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                     <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                         <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                             <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                             <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                         </div>
                         <div className="sm:flex hidden">
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
                         </div>
                         <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                             <p className="text-sm font-medium leading-none mr-3">Next</p>
                             <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                         </div>
                     </div>
                 </div>
          </div>
     );
};
export default Users;