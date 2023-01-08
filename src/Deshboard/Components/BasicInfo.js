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
          <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="text-3xl ">
              <h2 className="text-4xl font-bold text-primary sm:text-5xl ">
                Welcome Boss
              </h2>
            </div>
        
            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Products
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">
                    {products?.length}
                  </dd>
                </div>
        
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Catagory
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">43</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Amount
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">86</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        
     );
};
export default BasicInfo;