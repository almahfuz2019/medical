import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
const UpdateProduct = () => {
    const [firstImageUrl, setFirstImageUrl] = useState("");
    const [secondImageUrl, setsecondImageUrl] = useState("");
    const [thirdImageUrl, setThirdImageUrl] = useState("");
    const {register, handleSubmit, formState: { errors }} = useForm();
    const { data: categories, isLoading } = useQuery({
      queryKey: ['category'],
      queryFn: async () => {
          const res = await fetch('http://localhost:5000/categories');
          const data = await res.json();
          return data;
      }
  })

    const[productInfo,setProductInfo]=useState([]);
    // get single product by useParams
    const {id} = useParams();
    useEffect(()=>{
     const url=`http://localhost:5000/product/${id}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setProductInfo(data))
},[])
if(isLoading){
  return <Loading/>
}
    const handleAddProduct = async(data) => {
      const doctor = {
          name: data.name, 
          price: data.price,
          details: data.details,
          previcePrice: data.previcePrice,
          catagory: data.catagory,
          status:data.status,
          image1: firstImageUrl,
          image2: secondImageUrl,
          image3: thirdImageUrl,
      }
      fetch(`http://localhost:5000/product/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json', 
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(doctor)
    })
      .then(res => res.json())
      .then(result =>{
          console.log(result);
          toast.success('Addedd Successfully', {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: false,
                  progress: undefined,
                  theme: "colored",
                  });
      })
  }
    // image host key (imgbb) 
    const imageHostKey ="beaf06de8045a9c2bdfcf2b3378e418e";
 // first image 
 const firstImageUpload = (event) => {
  const image1 = event.target.files[0];
  const formData = new FormData();
  formData.set("image", image1);
  axios
    .post(
      `https://api.imgbb.com/1/upload?key=${imageHostKey}`,
      formData
    )
    .then((res) => {
      setFirstImageUrl(res.data.data.display_url);
    })
    .catch((error) => {
      console.log(error);
    });
};
// second image 
const secondImageUpload = (event) => {
  const image2 = event.target.files[0];
  const formData = new FormData();
  formData.set("image", image2);
  axios
    .post(
      `https://api.imgbb.com/1/upload?key=${imageHostKey}`,
      formData
    )
    .then((res) => {
      setsecondImageUrl(res.data.data.display_url);
    })
    .catch((error) => {
      console.log(error);
    });
};
//   third image 
const thirdImageUpload = (event) => {
  const image3 = event.target.files[0];
  const formData = new FormData();
  formData.set("image", image3);
  axios
    .post(
      `https://api.imgbb.com/1/upload?key=${imageHostKey}`,
      formData
    )
    .then((res) => {
      setThirdImageUrl(res.data.data.display_url);
    })
    .catch((error) => {
      console.log(error);
    });
};
     return (
     <div> 
<form onSubmit={handleSubmit(handleAddProduct)}>
            <section className="text-gray-600 body-font relative ">
            <div className="container px-5 sm:py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="border-primary border border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 border rounded-md p-5">
      <h2 className="text-gray-900 text-lg mb-1 
     title-font font-semibold">Add a product</h2>
                <div className="relative mb-4">
                    <label for="name" className="leading-7 text-sm text-gray-600">Product name</label>
                    <input  type="text" {...register("name")} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={productInfo?.name}/>
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> Product price</label>
                    <input defaultValue={productInfo?.price} type="text" {...register("price")} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> Product previous price</label>
                    <input defaultValue={productInfo?.previcePrice} type="text" {...register("previcePrice")} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                   
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> Details</label>
                    <textarea defaultValue={productInfo?.details}  type="text" {...register("details")} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> Select a category</label>
                    <select  defaultValue={productInfo?.catagory}
                    {...register('catagory')}
                    className="select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded">
                        {
                            categories.map(specialty => <option
                                key={specialty._id}
                                value={specialty.catagory}
                            >{specialty.catagory}</option>)
                        }
                    </select>
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> Select status</label>
                    <select defaultValue={productInfo?.status}
                    {...register('status')}
                    className="select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded">
                       <option value="Available">Available</option>
                       <option value="Unavailable">Unavailable </option>
                    </select>
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> select product main Image</label>
                    <input  type="file"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  onChange={firstImageUpload}  />
                </div>
                <img className='h-20 w-28 mx-auto' src={productInfo.image1} alt="" />
               <div className="relative mb-4">
               <label className="leading-7 text-sm text-gray-600"> selectproduct second Image</label>
               <input  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                type='file'
                onChange={secondImageUpload} 
              />
               </div>
               <img className='h-20 w-28 mx-auto' src={productInfo.image2} alt="" />
               <div className="relative mb-4">
               <label className="leading-7 text-sm text-gray-600"> select product third Image</label>
               <input  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                type='file'
                onChange={thirdImageUpload}
              />
               </div>
               <img className='h-20 w-28 mx-auto' src={productInfo.image3} alt="" />
                <input className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="Submit" type="submit"/>
                <p className="text-xs text-gray-500 mt-3">This is very important for your website.So,be careful.</p>
                </div>
                </div>
                </section></form>
     </div>
     );
};
export default UpdateProduct;