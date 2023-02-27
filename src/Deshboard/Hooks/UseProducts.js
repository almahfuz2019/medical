
import axios from "axios";
import { useEffect, useState } from "react";
 const UseProducts = () => {
const[cart,setCart]=useState([]);
const [products,setProducts]=useState([]);
const[productLoading,setProductLoading]=useState(true);
useEffect(()=>{
     setProductLoading(true)
     fetch('https://server.chaayasurgical.com/products')
     .then(res =>res.json())
     .then(data=>setProducts(data))
     setProductLoading(false)
},[])
   const handleProductDelete=async(id)=>{
    const proceed=window.confirm("are you sure you want to delete?");
    if(proceed){
    await axios.delete(`https://server.chaayasurgical.com/product/${id}`)
     .then(response=>{
          if(response.data.deletedCount>0){
               const deletedremaining=products.filter(note=>note._id !==id);
               setProducts(deletedremaining)
          }
     })
}
}
const handleAddToCart=(product)=>{
     const newCart=[...cart,product];
     setCart(newCart)
   }
  return {products,productLoading,handleProductDelete,handleAddToCart,cart};
};
export default UseProducts;