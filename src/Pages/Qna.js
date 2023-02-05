import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Shired/Footer';
const Faq = () => {
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
        QNA
      </a>
    </li>
  </ol>
</nav>
               <h1 className='sm:text-4xl md:text-5xl text-2xl mb-5 font-bold text-center'>QNA</h1>
               <div className="space-y-4">
  <details
    className="group border-l-4 border-primary bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex items-center justify-between cursor-pointer">
      <h2 className="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <span
        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>

  <details
    className="group border-l-4 border-primary bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex items-center justify-between cursor-pointer">
      <h2 className="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <span
        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>
</div>
          </div>
     );
};
export default Faq;