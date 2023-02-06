import axios from "axios";
import { useEffect, useState } from "react";
 const UseCatagory = () => {
     const [catagorys,setCatagorys]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/categories")
          .then(res=>res.json())
          .then(data=>setCatagorys(data))
     },[catagorys])
     const handleCatagoryDelete=async(id)=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               await axios.delete(`http://localhost:5000/catagory/${id}`)
               .then(response=>{
                    if(response.data.deletedCount>0){
                         console.log(response.data._id);
                         const deletedremaining=catagorys.filter(note=>note._id !==id);
                         setCatagorys(deletedremaining)
                    }
               })
          }
     }
     
    
     return {catagorys,handleCatagoryDelete};
     
};

export default UseCatagory;