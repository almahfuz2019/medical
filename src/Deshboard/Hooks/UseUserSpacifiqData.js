import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const UseUserSpacifiqData = () => {
     const [user]=useAuthState(auth);
     const[usdata,setUsdata]=useState([]);
    const navigate=useNavigate()
     useEffect(()=>{
         if(user){
          fetch(`http://localhost:5000/notess?useremail=${user.email}`,{
               method:"GET",
               headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
               }
          })
          .then(res=>{
               // console.log('res',res);
               // if(res.status=== 401 || res.status=== 403){
               if(res.status=== 401 || res.status=== 403){
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
               }
             return  res.json()
          })
          .then(data=>{
               
               setUsdata(data)
          })
         }
     },[usdata,user])
     const handleUserDelete=id=>{
        const proceed=window.confirm("are you sure you want to delete?");
        if(proceed){
             console.log("deleting user with id",id);
             const url=`http://localhost:5000/note/${id}`;
             fetch(url,{
                  method:'DELETE'
             })
             .then(res=>res.json())
             .then(data=>{
                  console.log("deleted",data);
                  if(data.deletedCount>0){
                       const remaining=usdata.filter(note=>note._id !==id);
                       setUsdata(remaining)
                  }

             })
        }
   }
   const { isLoading:productLoading, error, data:products } = useQuery( 'repoaData', () =>
     fetch('http://localhost:5000/notes').then(res =>
       res.json()
 )
   )
     let shippingCharge=0;
   let total=0;
   let discount=0;
   let sum=0;
   for(let products of usdata){
     total+= parseInt(products.product.price*products.productQuentity);
     shippingCharge=total+100;
     discount=(shippingCharge-(5/100).toFixed(2));
     discount=(discount.toFixed(2));
     // console.log(products);
   }
     return {usdata,handleUserDelete,total,productLoading,products};
};
export default UseUserSpacifiqData;