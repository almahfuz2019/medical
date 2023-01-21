
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
 const UseProducts = () => {
const[cart,setCart]=useState([]);
const [products,setProducts]=useState([]);
const[productLoading,setProductLoading]=useState(true);
useEffect(()=>{
     setProductLoading(true)
     fetch('http://localhost:5000/products')
     .then(res =>res.json())
     .then(data=>setProducts(data))
     setProductLoading(false)
},[])

//      const { isLoading:productLoading, error, data:products ,refetch} = useQuery( 'repoDatsa', () =>
//       fetch('http://localhost:5000/products').then(res =>
//        res.json()
//  )
//    )
   const handleProductDelete=id=>{
    const proceed=window.confirm("are you sure you want to delete?");
    if(proceed){
     axios.delete(`http://localhost:5000/product/${id}`)
     .then(response=>{
          if(response.data.deletedCount>0){
               const deletedremaining=products.filter(note=>note._id !==id);
               setProducts(deletedremaining)
               alert("deles")
               console.log("deleted");
          }
     })
}
//     if(proceed){
//      console.log("deleting user with id",id);
//          const url=`http://localhost:5000/product/${id}`;
//          fetch(url,{
//               method:'DELETE'
//          })
//          .then(res=>res.json())
//          .then(data=>{
//           console.log("deleted",data);
//           if(data.deletedCount>0){
//                const remaining=products.filter(cla=>cla._id !==id);
//                setProducts(remaining)
//           }
//      })
//     }
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
  
  return {products,productLoading,handleProductDelete,handleAddToCart,cart};
};

export default UseProducts;