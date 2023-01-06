import React from 'react';

const Discount = () => {
     return (
          <div>
               <section class="relative overflow-hidden rounded-lg pb-80 shadow-2xl lg:pb-0 border-2 my-12">
  <div class="ml-auto p-8 text-center sm:p-12 lg:w-2/3">
    <p class="text-sm font-semibold uppercase tracking-widest text-primary">
      Run with the pack
    </p>

    <h2 class="mt-6 text-primary uppercase">
      <span class="text-5xl text-primary sm:text-6xl">Get 20% off</span>
      <span class="mt-2 block  text-sm">On your next order over $50</span>
    </h2>

    <a
      class="mt-8 inline-block w-full bg-primary py-4 text-sm font-bold uppercase tracking-widest text-white"
      href=""
    >
      Get Discount
    </a>

    <p class="mt-12 text-xs font-medium uppercase text-gray-400">
      Offer valid until 24th March, 2021 *
    </p>
  </div>

  <div class="absolute bottom-0 left-0 h-80 w-full lg:h-full lg:w-1/3">
    <img
      alt="Trainer"
      src="https://cdn.medistorebd.com/wp-content/uploads/2020/12/unnamed-510x510.jpg"
      class="absolute inset-0 h-full w-full object-cover "
    />
  </div>
</section>

          </div>
     );
};

export default Discount;