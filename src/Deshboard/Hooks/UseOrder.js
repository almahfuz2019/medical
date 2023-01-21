import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
const UseOrder = () => {

     // const[orderLoading,setOrderLoading]=useState(true);
     // useEffect(()=>{
     //      setOrderLoading(true)
     //      fetch("http://localhost:5000/itemorder")
     //      .then(res=>res.json())
     //      .then(data=>setOrderItem(data))
     //      setOrderLoading(false)
     // },[])
     
   const [copone,setCopone]=useState([]);
   const handleOrderDelete=async(id)=>{
    const proceed=window.confirm("are you sure you want to delete?");
    if(proceed){
         await axios.delete(`http://localhost:5000/itemorderdelete/${id}`)
         .then(response=>{
          if(response.data.deletedCount>0){
               const deletedremaining=copone.filter(note=>note._id !==id);
               setCopone(deletedremaining)
               console.log("deleted");
          }
     })
    }
}
     return {handleOrderDelete};
};
export default UseOrder;