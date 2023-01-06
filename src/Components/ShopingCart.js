import React from 'react';
import { Link } from 'react-router-dom';

const ShopingCart = () => {
     return (
          <div>
             
<section className=' '>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-0 ">
    <div class=" mx-auto ">
      <header class="text-center">
        <h1 class="text-xl font-bold  sm:text-4xl">Your Cart items</h1>
      </header>

      <div class="my-10  border border-spacing-2 p-5 rounded-md bg-gray-100">
        <ul class="space-y-4 ">
          <li class="flex items-center border-primary border-b-2 p-2">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
              alt=""
              class="object-cover w-16 h-16 rounded"
            />

            <div class="ml-4">
              <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

              <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt class="inline">Size:</dt>
                  <dd class="inline">XXS</dd>
                </div>

                <div>
                  <dt class="inline">Color:</dt>
                  <dd class="inline">White</dd>
                </div>
              </dl>
            </div>

            <div class="flex items-center justify-end flex-1 gap-2">
              <form>
                <label for="Line1Qty" class="sr-only"> Quantity </label>

                <input
                  type="number"
                  min="1"
                  
                  id="Line1Qty"
                  class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs border-primary border-2 border"
                />
              </form>

              <button class="text-gray-600 transition hover:text-red-600">
                <span class="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
          <li class="flex items-center border-primary border-b-2 p-2">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
              alt=""
              class="object-cover w-16 h-16 rounded"
            />

            <div class="ml-4">
              <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

              <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt class="inline">Size:</dt>
                  <dd class="inline">XXS</dd>
                </div>

                <div>
                  <dt class="inline">Color:</dt>
                  <dd class="inline">White</dd>
                </div>
              </dl>
            </div>

            <div class="flex items-center justify-end flex-1 gap-2">
              <form>
                <label for="Line1Qty" class="sr-only"> Quantity </label>

                <input
                  type="number"
                  min="1"
                  
                  id="Line1Qty"
                  class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs border-primary border-2 border"
                />
              </form>

              <button class="text-gray-600 transition hover:text-red-600">
                <span class="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
          <li class="flex items-center border-primary border-b-2 p-2">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
              alt=""
              class="object-cover w-16 h-16 rounded"
            />

            <div class="ml-4">
              <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

              <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt class="inline">Size:</dt>
                  <dd class="inline">XXS</dd>
                </div>

                <div>
                  <dt class="inline">Color:</dt>
                  <dd class="inline">White</dd>
                </div>
              </dl>
            </div>

            <div class="flex items-center justify-end flex-1 gap-2">
              <form>
                <label for="Line1Qty" class="sr-only"> Quantity </label>

                <input
                  type="number"
                  min="1"
                  
                  id="Line1Qty"
                  class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs border-primary border-2 border"
                />
              </form>

              <button class="text-gray-600 transition hover:text-red-600">
                <span class="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>

         

      
        </ul>

        <div class="flex justify-end pt-8 mt-8 border-t border-gray-100 ">
          <div class="w-screen max-w-lg space-y-4  border border-primary border-2 rounded-lg p-5">
            <dl class="space-y-0.5 text-sm text-gray-700">
              <div class="flex justify-between border-b-2">
                <dt>Subtotal</dt>
                <dd>£250</dd>
              </div>

              <div class="flex justify-between border-b-2">
                <dt>VAT</dt>
                <dd>£25</dd>
              </div>

              <div class="flex justify-between border-b-2">
                <dt>Discount</dt>
                <dd>-£20</dd>
              </div>

              <div class="flex justify-between border-b-2 !text-base font-medium">
                <dt>Total</dt>
                <dd>£200</dd>
              </div>
            </dl>

            <div class="flex justify-end">
              <span
                class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="-ml-1 mr-1.5 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p class="text-xs whitespace-nowrap">2 Discounts Applied</p>
              </span>
            </div>

            <div class="flex justify-end">
              <Link
                to="/checkout"
                class="block px-5 py-3 text-sm text-white btn btn-primary transition"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          </div>
     );
};

export default ShopingCart;