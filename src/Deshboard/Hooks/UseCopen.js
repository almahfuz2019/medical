import React, { useEffect, useState } from 'react';
const UseCopen = () => {
     const [copone,setCopone]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/copones")
          .then(res=>res.json())
          .then(data=>setCopone(data))
     },[])
     const handleCatagoryDelete=id=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               console.log("deleting user with id",id);
               const url=`http://localhost:5000/copone/${id}`;
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
     
    
     return {copone,handleCatagoryDelete};
};
export default UseCopen;