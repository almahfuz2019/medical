import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
 const UseCatagory = () => {
     const [catagorys,setCatagorys]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/catagorys")
          .then(res=>res.json())
          .then(data=>setCatagorys(data))
     },[])
     const handleCatagoryDelete=async(id)=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               await axios.delete(`http://localhost:5000/catagory/${id}`)
               .then(response=>{
                    if(response.data.deletedCount>0){
                         const deletedremaining=catagorys.filter(note=>note._id !==id);
                         setCatagorys(deletedremaining)
                    }
               })
          }
     }
     
    
     return {catagorys,handleCatagoryDelete};
     
};

export default UseCatagory;