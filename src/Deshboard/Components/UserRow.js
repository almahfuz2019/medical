import React from 'react';
import { toast } from 'react-toastify';
const UserRow = ({user,refetch,index}) => {
     const {email,role,wrole}=user;
     const makeAdmin=()=>{
          fetch(`http://localhost:5000/user/admin/${email}`,{
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
     const removeAdmin=()=>{
          fetch(`http://localhost:5000/userr/admin/${email}`,{
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
               toast.success("Successfully Remove")
            }
          })
       }
     const makeWorker=()=>{
          fetch(`http://localhost:5000/worker/admin/${email}`,{
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
     const removeWorker=()=>{
          fetch(`http://localhost:5000/workerr/admin/${email}`,{
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
               toast.success("Successfully Remove")
            }
          })
       }
     return (
          <tr className='border'>
          <th>{index+1}</th>
          <th>{email}</th>
          <th>
            {role!=='admin' && <button className="btn-primary btn-sm btn mb-1" onClick={makeAdmin}>Make Admin</button>} <br />
            {wrole!=='worker' && <button className="btn-primary btn-sm btn" onClick={makeWorker}>Make Worker</button>}
           {/* <button className="btn-primary btn-sm btn" onClick={makeAdmin}>Make Admin</button> */}
         
          </th>
          <th>{role==='admin' && <button onClick={removeAdmin} className="btn-primary btn-sm btn mb-1">Remove Admin</button>} <br />
          {wrole==='worker' && <button className="btn-primary btn-sm btn" onClick={removeWorker}>Remove Worker</button>}
          </th>

          
        </tr>
     );
};
export default UserRow;