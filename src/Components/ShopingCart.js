import React from 'react';
import { Link } from 'react-router-dom';
import UseUserSpacifiqData from '../Deshboard/Hooks/UseUserSpacifiqData';

const ShopingCart = () => {
const {usdata,handleUserDelete,total,products,subTotal,shippingCharge}=UseUserSpacifiqData();
console.log(usdata);
// console.log(data);
     return (
          <div>
             
<section className=''>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-0 ">
    <div className=" mx-auto ">
      <header className="text-center">
        <h1 className="text-3xl font-bold  sm:text-4xl">Your Cart items</h1>
      </header>
      <div className='mx-auto text-center mt-2'>
      <ul className="steps ">
  <li className="step step-primary mx-2">Add Product</li>
  <li className="step step-primary mx-2">Shopping Cart</li>
  <li className="step mx-2">CheckOut</li>
</ul>
</div>
      <div className="my-10  border border-spacing-2 p-5 rounded-md bg-white border-primary border-opacity-30">
        <ul className="space-y-4 ">
          {usdata?.map(data=>
        <li className="sm:flex items-center border-primary border-b-2 p-2">
        <img
          src={data?.product?.image}
          alt=""
          className="object-cover w-16 h-16 rounded border-primary border"
        />

        <div className="sm:ml-4">
          <h3 className="text-md sm:text-xl text-gray-900 ">{data?.product?.name}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline text-sm">Price: {data?.product?.price}</dt>
              <br />
              <dt className="inline text-sm">Quentity: {data?.productQuentity}</dt>
              {/* <dd className="inline">XXS</dd> */}
            </div>
          </dl>
        </div>

        <div className="flex items-center justify-between sm:justify-end flex-1 gap-2 mt-2 sm:0">
          <form>
            <label for="Line1Qty" className="sr-only"> Quantity </label>

            <h1
              id="Line1Qty"
              className="py-2 px-2 rounded border-primary border-opacity-40 bg-gray-50 p-0 text-center  border-2 border sm:text-xl text-sm  font-semibold"
            >{data?.product?.price} * {data?.productQuentity}=
            {data?.productQuentity*data?.product?.price}</h1>
          </form>

          <Link onClick={()=>handleUserDelete(data._id)} className="text-gray-600 transition hover:text-red-600 ">
            <span className="sr-only">Remove item</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </Link>
        </div>
      </li>
            )}
          

         

      
        </ul>

        <div className="flex justify-end pt-8 mt-8 border-t border-gray-100 ">
          <div className="w-screen max-w-lg space-y-4  border border-primary border-2 rounded-lg p-5 ">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between border-b-2 text-xl">
                <dt>Subtotal</dt>
                <dd className='font-bold'>$ {subTotal}</dd>
              </div>

              <div className="flex justify-between border-b-2 text-xl">
                <dt>VAT</dt>
                <dd className='font-bold'>$ 0.00</dd>
              </div>
              <div className="flex justify-between border-b-2 text-xl">
                <dt>Shipping chirge</dt>
                <dd className='font-bold'>$ {shippingCharge}</dd>
              </div>

              <div className="flex justify-between border-b-2 text-xl">
                <dt>Discount</dt>
                <dd className='font-bold'>-$000</dd>
              </div>

              <div className="flex justify-between border-b-2  text-xl ">
                <dt >Total</dt>
                <dd className='font-bold text-xl'>${total}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ml-1 mr-1.5 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
                </svg>

                <p className="text-xs whitespace-nowrap">No Discounts Applied</p>
              </span>
            </div>

            <div className="flex justify-end">
              <Link
                to="/checkout"
                className="block sm:px-5 sm:py-3 pt-1 text-sm text-white btn btn-primary transition btn-sm sm:btn-md"
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