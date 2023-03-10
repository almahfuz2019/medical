import axios from 'axios';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
const ContactUs = () => {
  const time= new Date().toLocaleString();
  const ContactUS=async(event)=>{
    event.preventDefault();
    const email=event.target.email.value;
    const message=event.target.message.value;
    const dateAndTime=time;
    const productData={email,message,dateAndTime};
    await axios.post("https://server.chaayasurgical.com/contact",productData)
    toast.success('Submitted Successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
      });
     event.target.reset();
    }
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
        Contact US
      </a>
    </li>
  </ol>
</nav>
               <div>
               <h1 className='sm:text-4xl md:text-5xl text-2xl mb-5 font-bold text-center'>Contact Us</h1>
          </div>
       <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}} marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.000533070953!2d91.76334311443306!3d24.485438384232157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375175b2c4afae91%3A0x99da09635f0ed8d1!2sBerir%20Par%20point!5e0!3m2!1sbn!2sbd!4v1674709913784!5m2!1sbn!2sbd" width="100%" height="100%" frameborder="0"></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Please, Let us know your opinion</p>
      <form onSubmit={ContactUS}>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input required placeholder='Type your e-mail address' type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea required placeholder='Type your opinion' id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-primary py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <input className="text-white bg-primary border-0 py-2 px-6 focus:outline-none cursor-pointer rounded text-lg" type="submit" value="Submit"/>
      </form>
      <p className="text-xs text-gray-500 mt-3">This is very important for your website.So,be careful.</p>
    </div>
  </div>
</section>
          </div>
     );
};
export default ContactUs;