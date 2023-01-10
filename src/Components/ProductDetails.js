import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import UserReview from './UserReview';
import { FaArrowCircleLeft} from 'react-icons/fa';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
const ProductDetails = () => {
  const navigate=useNavigate();
  const [user]=useAuthState(auth);
  const handleAddtocart=(event)=>{
    event.preventDefault();
    const productQuentity=event.target.productQuentity.value;
    const useremail=user.email;
    const product=note;
     const NotesData={productQuentity,useremail,product};
     console.log(NotesData);
     fetch('http://localhost:5000/note', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(NotesData),
})
  .then((res) => res.json())
  .then((data) => {
    console.log('Success:', data);
    
    toast.success('Added Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
      });
  
    event.target.reset();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
     }
     const [note, setNote] = useState({});
     const { id } = useParams();
    //  console.log(note);
     useEffect(() => {
         const url = `http://localhost:5000/product/${id}`;
         fetch(url)
             .then(res => res.json())
             .then(data => setNote(data));
     }, []);
     return (
          <div className='bg-gray-100 p-5'>
               <a  href = "javascript:history.back()"><span className="ml-1 text-2xl  text-primary">
                <FaArrowCircleLeft/></span></a>
                <section>
  <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
    <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        <img
          alt="Les Paul"
          src={note.image}
          className="object-cover w-full aspect-square rounded-xl border"
        />

        <div className="grid grid-cols-2 gap-4 lg:mt-4">
          <img
            alt="Les Paul"
            src={note.image}
            className="object-cover w-full aspect-square rounded-xl border "
          />

          <img
            alt="Les Paul"
            src={note.image}
            className="object-cover w-full aspect-square rounded-xl border"
          />

          <img
            alt="Les Paul"
            src={note.image}
            className="object-cover w-full aspect-square rounded-xl border"
          />

          <img
            alt="Les Paul"
            src={note.image}
            className="object-cover w-full aspect-square rounded-xl border"
          />
        </div>
      </div>

      <div className="sticky top-0 ">
        <strong
          className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Order Now
        </strong>

        <div className="flex justify-between mt-4">
          <div className="">
          <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-gray-800 text-xl md:text-2xl font-bold">${note.price}</span>
            <span className="text-red-500 line-through mb-0.5">$30.00</span>
          </div>

          <span className="text-gray-500 text-sm">incl. VAT plus shipping</span>
        </div>
            <h1 className="text-2xl font-bold">
              {note.name}
            </h1>
            

            <p className="mt-0.5 text-sm">Highest Rated Product</p>

            <div className="mt-2 -ml-0.5 flex">
              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                className="w-5 h-5 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>
        </div>

        <details
          className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="block">
            <div>
              <div className="prose max-w-none group-open:hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  veniam dicta beatae eos ex error culpa delectus rem tenetur,
                  architecto quam nesciunt, dolor veritatis nisi minus
                  inventore, rerum at recusandae?
                </p>
              </div>

              <span
                className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
              >
                Read More
              </span>
            </div>
          </summary>

          <div className="pb-6 prose max-w-none">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              veniam dicta beatae eos ex error culpa delectus rem tenetur,
              architecto quam nesciunt, dolor veritatis nisi minus inventore,
              rerum at recusandae?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nam sapiente nobis ea veritatis error consequatur nisi
              exercitationem iure laudantium culpa, animi temporibus non! Maxime
              et quisquam amet. A, deserunt!
            </p>
          </div>
        </details>

        <form onSubmit={handleAddtocart} className="mt-8">
          <fieldset>
            <legend className="mb-1 text-sm font-medium">Color</legend>

            <div className="flow-root">
              <div className="-m-0.5 flex flex-wrap">
                <label for="color_tt" className="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="color"
                    id="color_tt"
                    className="sr-only peer"
                  />

                  <span
                    className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    Texas Tea
                  </span>
                </label>

                <label for="color_fr" className="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="color"
                    id="color_fr"
                    className="sr-only peer"
                  />

                  <span
                    className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    Fiesta Red
                  </span>
                </label>

                <label for="color_cb" className="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="color"
                    id="color_cb"
                    className="sr-only peer"
                  />

                  <span
                    className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    Cobalt Blue
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset className="mt-4">
            <legend className="mb-1 text-sm font-medium">Size</legend>

            <div className="flow-root">
              <div className="-m-0.5 flex flex-wrap">
                <label for="size_xs" className="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_xs"
                    className="sr-only peer"
                  />

                  <span
                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    XS
                  </span>
                </label>

                <label for="size_s" className="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_s"
                    className="sr-only peer"
                  />

                  <span
                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    S
                  </span>
                </label>

                <label for="size_m" className="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_m"
                    className="sr-only peer"
                  />

                  <span
                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    M
                  </span>
                </label>

                <label for="size_l" className="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_l"
                    className="sr-only peer"
                  />

                  <span
                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    L
                  </span>
                </label>

                <label for="size_xl" className="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_xl"
                    className="sr-only peer"
                  />

                  <span
                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    XL
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
        <div className="flex items-center text-gray-500 gap-2 my-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>

          <span className="text-sm">2-4 day shipping</span>
        </div>
          <div className="flex mt-8">
            <div>
              <label for="quantity" className="sr-only">Qty</label>

              <input
                type="number"
                min="1"
                defaultValue={1}
                
                className="w-12 rounded border-gray-200 py-3 text-center text-xs border border-3"
                name='productQuentity' required
              />
            </div>
<button type='submit'
              className="block px-5 py-3 ml-3 text-xs font-medium text-white btn btn-primary flex"
            >
              Add to Cart <span className='ml-4 text-xl'> <FaCartPlus/></span>
            </button>
           
          </div>
        </form>
      
      </div>
    </div>
  </div>
</section>
<UserReview/>
          </div>
     );
};
export default ProductDetails;