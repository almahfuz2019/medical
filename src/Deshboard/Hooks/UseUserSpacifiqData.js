import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import axios from 'axios'
import auth from '../../firebase.init';
const UseUserSpacifiqData = () => {
     const [user]=useAuthState(auth);
     const[usdata,setUsdata]=useState([]);
    const navigate=useNavigate()

    const fetchCarts  = async() => {
     try{
          const res = await axios.get(`http://localhost:5000/notess?useremail=${user.email}`)
          setUsdata(res.data)
     }catch(err){
          console.log(err)
     }
    }

     useEffect( ()=>{
          fetchCarts() 
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