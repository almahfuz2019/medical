import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import UserRow from './UserRow';
const Users = () => {
  const [se,setSe]=useState([]);
     const { isLoading, error, data:usersInfo,refetch } = useQuery( 'users', () =>
     fetch('http://localhost:5000/user',{
          method:"GET",
          headers:{
               authorization:`Bearer ${localStorage.getItem('accessToken')}`
          }
     }).then(res =>
      res.json()))
  if(isLoading){
     return <Loading/>
  }
  if(error){
    return <p>{error}</p>
  }
  const searchProductsbyname = (e) => {
    const matched_products = usersInfo.filter(pro => pro.email.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(matched_products)
    usersInfo(matched_products)
  }
     return (
          <div>
             <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-3xl '>Total Users: {usersInfo?.length}</span></div>
          <div className='mx-auto text-center mb-5'>
  
<input type="text" placeholder="Type here" className="input input-bordered input-accent w-full sm:max-w-sm input-sm sm:input-md max-w-xs border border-primary" onChange={searchProductsbyname}/>
</div>
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Make Admin/Worker</th>
                <th>Remove Admin/Worker</th>
              </tr>
            </thead>
    
         
            <tbody>
             {usersInfo.map((user,index)=><UserRow
             key={user._id}
             refetch={refetch}
             user={user}
             index={index}
             >

             </UserRow>)}
            </tbody>
  
          </table>
        </div>
          </div>
     );
}
export default Users;