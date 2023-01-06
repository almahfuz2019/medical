import React from 'react';
import Loading from '../../Components/Loading';
// import UseCatagory from '../Hooks/UseCatagory';
import UseProducts from '../Hooks/UseProducts';
const BasicInfo = () => {
  const  {products,productLoading}=UseProducts()
  // const  {catagorys}=UseCatagory()
  if(productLoading){
return <Loading/>
  }
     return (
          <section class="bg-white">
          <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div class="text-3xl ">
              <h2 class="text-4xl font-bold text-primary sm:text-5xl ">
                Welcome Boss
              </h2>
            </div>
        
            <div class="mt-8 sm:mt-12">
              <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div
                  class="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt class="order-last text-lg font-medium text-gray-500">
                    Total Products
                  </dt>
        
                  <dd class="text-4xl font-extrabold text-primary md:text-5xl">
                    {products?.length}
                  </dd>
                </div>
        
                <div
                  class="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt class="order-last text-lg font-medium text-gray-500">
                    Total Catagory
                  </dt>
        
                  <dd class="text-4xl font-extrabold text-primary md:text-5xl">43</dd>
                  
                </div>
                <div
                  class="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt class="order-last text-lg font-medium text-gray-500">
                    Total Amount
                  </dt>
        
                  <dd class="text-4xl font-extrabold text-primary md:text-5xl">86</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        
     );
};
export default BasicInfo;