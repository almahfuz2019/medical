import React from 'react';
import { Link } from 'react-router-dom';
const TramsAndCondition = () => {
     return (
          <div className='bg-white p-2 sm:p-5 pb-5'>
          <nav aria-label="Breadcrumb" className="flex justify-center mt-5 mb-3">
  <ol role="list"
    className="flex overflow-hidden rounded-lg border-primary border"
  >
    <li className="flex items-center">
      <Link
        to="/"
        className="flex h-9 items-center bg-primary px-4 transition  text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>

        <span className="ml-1.5 text-xs font-medium text-white"> Home </span>
      </Link>
    </li>

    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -left-px h-9 w-4 bg-primary [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"
      >
      </span>

      <a
        href="#"
        className="flex h-9 items-center bg-white pl-8 pr-4 text-xs font-medium transition hover:text-gray-900"
      >
        Terms and Condition
      </a>
    </li>
  </ol>
</nav>
               <div>
               <h1 className='sm:text-4xl md:text-5xl text-2xl mb-5 font-bold text-center'>Terms and Condition</h1>
               <p className='mx-4 md:mx-0 text-justify'>
Dear honorable customer, Welcome to Naba Tech Shop. Here are the terms and conditions for shopping in Naba Tech Shop. Please read these terms and conditions carefully before purchasing product from Naba Tech Shop.
Product Order:
To purchase product from Naba Tech Shop, customer must order through website. No order will be taken on phone or Email. If customer faces any problem to order via website, Please contact our helpline. In that case, we will support customers to order product from website.
Product’s Specification and Feature
The product details mentioned in Naba Tech Shop are usually given by product Manufacturer Company. The details are also collected from online. So sometimes the details given online may not be exact with the hands-on product. In some cases, the color of the product shown on the website may not match the color of the actual product. Naba Tech Shop is quite aware of providing the actual product. Naba Tech Shop always tries to provide the valid information about products.
Product Return:
Naba Tech Shop doesn’t offer any product return services at this moment due to system complexity. We are apologizing for that. Customers will be notified when the product return service will available.

    Damage Product:

Before delivering any products from Naba Tech Shop, Our quality testing department checks each and every product. The product doesn’t get the clearance if there has any slight problem in the product.  So, we can ensure that Naba Tech Shop doesn’t deliver any damage products. If customer receives any damage product, then customer should report to our helpline within 24 hours from the time of product received. You will get the necessary instructions from the helpline. If there has any opportunity to change the product, than we will change it. Note that, all products are not changeable.

    Wrong Product:

After the order placement, our quality testing department checks the quality of product and then sends it to the delivery section. All products are packaged from the delivery section and then send to the customer’s address.  However, unfortunately a product may be delivered instead of another, or quantity of any product may be wrong. Naba Tech Shop is quite aware of these things to avoid. After all, if there are any such kind of mistakes, then customers should report to our helpline within 24 hours from the time of product received.

    Delivery Time

Naba Tech Shop always uses the best and fastest courier services to deliver the products. We are committed to deliver the product quickly to our customers. We always try to deliver products within 24 hours anywhere in Dhaka City. Delivery will taken up to 3-5 business days for outside of Dhaka City. At this moment we use two delivery method: Sundarban Courier and RedX Courier. If you have hurry than we always prefer to receive the product via Sundarban Courier because the delivers fast. But Sundarban Courier don’t provide home deliver services. So that you should collect it from nearest branch office. On the other hand, RedX Courier always delivers the product the door of customer. Because of that the delivery of parcel may take 1 or 2 days extra then normal courier delivery. Although in most cases, the product is delivered before this time. However, due to any transport complexity, if the delivery of the products is delayed, the customers will be notified.

    Buying Product Physically From Our Outlet:

Naba Tech Shop is an online based e-commerce website. We have no show-room to sell products physically so we can’t offer customers to buy products directly from our outlet. To purchase products from Naba Tech Shop, you must order through website.

    Payment Method:

There are currently two payment methods are available for purchasing product from Naba Tech Shop. The first method is Cash On Delivery. In this method, the customers will get the opportunity to pay cash during on the time of product receive. But sometime the customers deny to receive the product after shipment. Than we need to pay for both sending and returning fee for the parcel. It’s a huge amount of loss for us. the customer need to pay Tk. 200 in advance to confirm the order.

The second payment method is Mobile Banking. At this moment we accept Bkash, Nagad and Rocket, number given below. In that case customers need to pay during the order placement. If Customer select Bkash/Nagad/Rocket from the checkout page than a form will open on the above of ‘Place Order’ button. Here customers will get some instruction to send money to provided number in the instructions. After transaction customers need to provide the transaction number, and the mobile number from which money was sent. After providing this 2 information your payment will automatically updated and the product will send to customer’s address.
</p>
               </div>
               
          </div>
      
     );
};

export default TramsAndCondition;