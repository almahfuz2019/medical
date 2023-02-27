import React from 'react';
import { toast } from 'react-toastify';
const UserRole = ({user,refetch,index}) => {
     const {email,role,wrole}=user;
     const makeAdmin=()=>{
          const proceed=window.confirm("Are you sure you want to make this user an admin?");
          if(proceed){
               fetch(`https://server.chaayasurgical.com/user/admin/${email}`,{
                    method:"PUT",
                         headers:{
                              authorization:`Bearer ${localStorage.getItem('accessToken')}`
                         }
               })
               .then(res=>{
                    if(res.status=== 403){
                         toast.error("Failed to make an admin")
                    }
                   return res.json()})
               .then(data=>{
                 if(data.modifiedCount > 0){
                    refetch();
                    toast.success("Successfully made an amdin")
                 }
               })
            }
          }
     const removeAdmin=()=>{
          const proceed=window.confirm("Are you sure you want to remove a admin?");
          if(proceed){
          fetch(`https://server.chaayasurgical.com/userr/admin/${email}`,{
               method:"PUT",
                    headers:{
                         authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    }
          })
          .then(res=>{
               if(res.status=== 403){
                    toast.error("Failed to Remove")
               }
              return res.json()})
          .then(data=>{
            if(data.modifiedCount > 0){
               refetch();
               toast.success("Successfully Removed")
            }
          })
       }}
     const makeWorker=()=>{
          const proceed=window.confirm("Are you sure you want to make this user a Worker?");
          if(proceed){
          fetch(`https://server.chaayasurgical.com/worker/admin/${email}`,{
               method:"PUT",
                    headers:{
                         authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    }
          })
          .then(res=>{
               if(res.status=== 403){
                    toast.error("Failed to make an admin")
               }
              return res.json()})
          .then(data=>{
            if(data.modifiedCount > 0){
               refetch();
               toast.success("Successfully made an amdin")
            }
          })
       }}
     const removeWorker=()=>{
          const proceed=window.confirm("Are you sure you want to remove a workder?");
          if(proceed){
          fetch(`https://server.chaayasurgical.com/workerr/admin/${email}`,{
               method:"PUT",
                    headers:{
                         authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    }
          })
          .then(res=>{
               if(res.status=== 403){
                    toast.error("Failed to Remove")
               }
              return res.json()})
          .then(data=>{
            if(data.modifiedCount>0){
               refetch();
               toast.success("Successfully Removed")
            }
          })
       }}
     return (
          <tr className='border'>
          <th>{index+1}</th>
          <th>{email}</th>
          <th>
            {role!=='admin' && <button className="btn-primary btn-sm btn mb-1" onClick={makeAdmin}>Make Admin</button>} <br />
            {wrole!=='worker' && <button className="btn-primary btn-sm btn" onClick={makeWorker}>Make Worker</button>}
          </th>
          <th>{role==='admin' && <button onClick={removeAdmin} className="btn-primary btn-sm btn mb-1">Remove Admin</button>} <br />
          {wrole==='worker' && <button className="btn-primary btn-sm btn" onClick={removeWorker}>Remove Worker</button>}
          </th>
        </tr>
     );
};
export default UserRole;