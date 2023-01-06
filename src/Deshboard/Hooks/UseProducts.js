
import { useState } from "react";
import { useQuery } from "react-query";
 const UseProducts = () => {
const[cart,setCart]=useState([]);
     const { isLoading:productLoading, error, data:products } = useQuery( 'repoData', () =>
     fetch('http://localhost:5000/products').then(res =>
       res.json()
 )
   )
   const handleProductDelete=id=>{
    const proceed=window.confirm("are you sure you want to delete?");
    if(proceed){
         const url=`http://localhost:5000/product/${id}`;
         fetch(url,{
              method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
              if(data.deletedCount>0){
                   const remaining=products.filter(item=>item._id !==id);
                   products(remaining)
              }

         })
    }
}
const handleAddToCart=(product)=>{
     const newCart=[...cart,product];
     setCart(newCart)
   }
  
     return {products,productLoading,handleProductDelete,error,handleAddToCart,cart};
     
};

export default UseProducts;