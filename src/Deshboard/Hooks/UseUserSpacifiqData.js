import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
const UseUserSpacifiqData = () => {
     const [user]=useAuthState(auth);
     const[usdata,setUsdata]=useState([]);
     // console.log(usdata);
    const navigate=useNavigate()
     useEffect(()=>{
         if(user){
          fetch(`http://localhost:5000/notess?useremail=${user.email}`,{
               method:"GET",
               headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
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
     },[user,usdata])
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
   if(productLoading){
     return <Loading/>
   }
   if(error){
     return <p>{error}</p>
   }
   let total=0;
   let subTotal=0;
   let shippingCharge=0;
   if(Array.isArray(usdata)){
     for(let products of usdata){
 
       subTotal+=parseInt(products.product.price)*(products.productQuentity);
       shippingCharge=100;
       total=subTotal+shippingCharge;
      
     }
   }
     return {usdata,handleUserDelete,total,productLoading,products,subTotal,error,shippingCharge};
};
export default UseUserSpacifiqData;