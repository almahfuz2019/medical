import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import UserReview from './UserReview';

import { FaArrowCircleLeft} from 'react-icons/fa';
const ProductDetails = () => {
     const [note, setNote] = useState({});
     const { id } = useParams();
     useEffect(() => {
         const url = `http://localhost:5000/product/${id}`;
         fetch(url)
             .then(res => res.json())
             .then(data => setNote(data));
             console.log(note);
     }, []);
     return (
          <div className='bg-gray-100 p-5'>
               <a  href = "javascript:history.back()"><span class="ml-1 text-2xl  text-primary">
                <FaArrowCircleLeft/></span></a>
                <section>
  <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
    <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
        <img
          alt="Les Paul"
          src={note.image}
          class="object-cover w-full aspect-square rounded-xl border"
        />

        <div class="grid grid-cols-2 gap-4 lg:mt-4">
          <img
            alt="Les Paul"
            src={note.image}
            class="object-cover w-full aspect-square rounded-xl border "
          />

          <img
            alt="Les Paul"
            src={note.image}
            class="object-cover w-full aspect-square rounded-xl border"
          />

          <img
            alt="Les Paul"
            src={note.image}
            class="object-cover w-full aspect-square rounded-xl border"
          />

          <img
            alt="Les Paul"
            src={note.image}
            class="object-cover w-full aspect-square rounded-xl border"
          />
        </div>
      </div>

      <div class="sticky top-0 ">
        <strong
          class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Order Now
        </strong>

        <div class="flex justify-between mt-4">
          <div class="">
          <div class="mb-4">
          <div class="flex items-end gap-2">
            <span class="text-gray-800 text-xl md:text-2xl font-bold">${note.price}</span>
            <span class="text-red-500 line-through mb-0.5">$30.00</span>
          </div>

          <span class="text-gray-500 text-sm">incl. VAT plus shipping</span>
        </div>
            <h1 class="text-2xl font-bold">
              {note.name}
            </h1>
            

            <p class="mt-0.5 text-sm">Highest Rated Product</p>

            <div class="mt-2 -ml-0.5 flex">
              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="w-5 h-5 text-gray-200"
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
          class="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary class="block">
            <div>
              <div class="prose max-w-none group-open:hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  veniam dicta beatae eos ex error culpa delectus rem tenetur,
                  architecto quam nesciunt, dolor veritatis nisi minus
                  inventore, rerum at recusandae?
                </p>
              </div>

              <span
                class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
              >
                Read More
              </span>
            </div>
          </summary>

          <div class="pb-6 prose max-w-none">
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

        <form class="mt-8">
          <fieldset>
            <legend class="mb-1 text-sm font-medium">Color</legend>

            <div class="flow-root">
              <div class="-m-0.5 flex flex-wrap">
                <label for="color_tt" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="color"
                    id="color_tt"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    Texas Tea
                  </span>
                </label>

                <label for="color_fr" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="color"
                    id="color_fr"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    Fiesta Red
                  </span>
                </label>

                <label for="color_cb" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="color"
                    id="color_cb"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    Cobalt Blue
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset class="mt-4">
            <legend class="mb-1 text-sm font-medium">Size</legend>

            <div class="flow-root">
              <div class="-m-0.5 flex flex-wrap">
                <label for="size_xs" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_xs"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    XS
                  </span>
                </label>

                <label for="size_s" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_s"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    S
                  </span>
                </label>

                <label for="size_m" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_m"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    M
                  </span>
                </label>

                <label for="size_l" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_l"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    L
                  </span>
                </label>

                <label for="size_xl" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_xl"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    XL
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
        <div class="flex items-center text-gray-500 gap-2 my-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>

          <span class="text-sm">2-4 day shipping</span>
        </div>
          <div class="flex mt-8">
            <div>
              <label for="quantity" class="sr-only">Qty</label>

              <input
                type="number"
                min="1"
                class="w-12 rounded border-gray-200 py-3 text-center text-xs border border-3"
              />
            </div>

            <button
              type="submit"
              class="block px-5 py-3 ml-3 text-xs font-medium text-white btn btn-primary"
            >
              Add to Cart
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