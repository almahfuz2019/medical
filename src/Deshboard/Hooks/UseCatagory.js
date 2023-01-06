import { useEffect, useState } from "react";
import { useQuery } from "react-query";
 const UseCatagory = () => {
     const [catagorys,setCatagorys]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/catagorys")
          .then(res=>res.json())
          .then(data=>setCatagorys(data))
     },[])
     const handleCatagoryDelete=id=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               console.log("deleting user with id",id);
               const url=`http://localhost:5000/catagory/${id}`;
               fetch(url,{
                    method:'DELETE'
               })
               .then(res=>res.json())
               .then(data=>{
                    console.log("deleted",data);
                    if(data.deletedCount>0){
                         const remaining=catagorys.filter(cla=>cla._id !==id);
                         setCatagorys(remaining)
                    }
               })
          }
     }
     
    
     return {catagorys,handleCatagoryDelete};
     
};

export default UseCatagory;