import React from 'react';
const Checkout = () => {
     return (
          <div>
               
<section className='mt-12'>
  <h1 class="text-center font-bold text-4xl mb-5">Checkout</h1>

  <div class="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
    <div class="py-12 bg-gray-100 md:py-24 border-primary  border-r-0 border border-2">
      <div class="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
        <div class="flex items-center">
          <span class="w-10 h-10 bg-blue-700 rounded-full"></span>

          <h2 class="ml-4 font-medium text-gray-900">Medical</h2>
        </div>

        <div>
          <p class="text-2xl tracking-tight text-primary font-bold">
            $99.99
          </p>

          <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
        </div>

        <div>
          <div class="flow-root">
            <ul class="-my-4 divide-y divide-gray-100">
              <li class="flex items-center py-4 border-t-2 border-primary">
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
              </li>
              
            

             
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12  md:py-24 border border-l-0 border-2 border-primary">
      <div class="max-w-lg px-4 mx-auto lg:px-8">
        <form class="grid grid-cols-6 gap-4">
          <div class="col-span-3">
            <label
              for="FirstName"
              class="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="col-span-3">
            <label
              for="LastName"
              class="block text-xs font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou"
            />
          </div>

          <div class="col-span-6">
            <label for="Email" class="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              id="Email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou"
            />
          </div>

          <div class="col-span-6">
            <label for="Phone" class="block text-xs font-medium text-gray-700">
              Phone
            </label>

            <input
              type="tel"
              id="Phone"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou"
            />
          </div>

          <div class="col-span-6">
            <label for="Phone" class="block text-xs font-medium text-gray-700">
              address
            </label>

            <input
              type="tel"
              id="Phone"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="col-span-6">
            <label for="Phone" class="block text-xs font-medium text-gray-700">
              Bkish transition ID
            </label>

            <input
              type="tel"
              id="Phone"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="col-span-6">
            <button
              class="block w-full rounded-md btn-primary p-2.5 text-sm font-semibold text-white transition hover:shadow-lg"
            >
              Submit 
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

          </div>
     );
};
export default Checkout;