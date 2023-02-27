import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import UserRole from './UserRole';
const Users = () => {
     const { isLoading, error, data:usersInfo,refetch } = useQuery( 'users', () =>
     fetch('https://server.chaayasurgical.com/users',{
          method:"GET",
          headers: {
            'content-type': 'application/json',
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
     return (
          <div>
             <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-3xl '>Total Users: {usersInfo?.length}</span></div>
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
             {usersInfo.map((user,index)=><UserRole
             key={user._id}
             refetch={refetch}
             user={user}
             index={index}
             >

             </UserRole>)}
            </tbody>
  
          </table>
        </div>
          </div>
     );
}
export default Users;