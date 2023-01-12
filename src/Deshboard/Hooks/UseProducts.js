
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
 const UseProducts = () => {
const[cart,setCart]=useState([]);
const[pageCount,setPageCount]=useState(0);
const[page,setPage]=useState(0);
const[size,setSize]=useState(10);
useEffect(()=>{
     fetch("http://localhost:5000/productCount")
     .then(res=>res.json())
     .then(data=>{
          const count=data.count;
          const pages=Math.ceil(count/size);
          setPageCount(pages)
     })
},[])
     const { isLoading:productLoading, error, data:products } = useQuery( 'repoDatsa', () =>
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
//    let shippingCharge=0;
//    let total=0;
//    let discount=0;
//    let sum=0;
//    for(let product of cart){
//      total+= parseInt(product.price);
//      shippingCharge=total+100;
//      discount=(shippingCharge-(5/100).toFixed(2));
//      discount=(discount.toFixed(2));
//    }
//   console.log(cart);
  
  return {products,productLoading,handleProductDelete,error,handleAddToCart,cart,pageCount,page,setPage,size,setSize,setPageCount};
};

export default UseProducts;