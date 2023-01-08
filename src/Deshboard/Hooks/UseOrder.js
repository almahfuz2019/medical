import React, { useState } from 'react';
import { useQuery } from 'react-query';
const UseOrder = () => {
     const { isLoading:orderLoading, error1, data:orderItem } = useQuery( 'repoDatsa', () =>
      fetch('http://localhost:5000/itemorder').then(res =>
       res.json()   
 )
   )
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
     return {orderLoading,error1,orderItem,handleOrderDelete};
};
export default UseOrder;