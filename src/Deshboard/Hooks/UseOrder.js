import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
const UseOrder = () => {
     const [orderItem,setOrderItem]=useState([])
     const[orderLoading,setOrderLoading]=useState(true);
     useEffect(()=>{
          setOrderLoading(true)
          fetch("http://localhost:5000/itemorder")
          .then(res=>res.json())
          .then(data=>setOrderItem(data))
          setOrderLoading(false)
     },[])
     
   const [copone,setCopone]=useState([]);
   const handleOrderDelete=id=>{
    const proceed=window.confirm("are you sure you want to delete?");
    if(proceed){
         console.log("deleting user with id",id);
         const url=`http://localhost:5000/itemorderdelete/${id}`;
         fetch(url,{
              method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
              console.log("deleted",data);
              if(data.deletedCount>0){
                   const remaining=copone.filter(cla=>cla._id !==id);
                   setCopone(remaining)
              }
         })
    }
}
     return {orderLoading,setOrderLoading,orderItem,handleOrderDelete};
};
export default UseOrder;