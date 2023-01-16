import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
const ContactInfoReadMore = () => {
     const [singleContactInfo, setSingleContactInfo] = useState({});
     const { id } = useParams();
    //  (singleUserOrder.userData);
     useEffect(() => {
          const url = `http://localhost:5000/contact/${id}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setSingleContactInfo(data));
     }, []);
     return (
          <div className='px-2 '>
               <a  href = "javascript:history.back()"><span className="ml-1 text-2xl  text-primary">
                <FaArrowCircleLeft/></span></a>
              <div className='text-2xl font-bold mt-2 mb-5 text-center '>
              {singleContactInfo.email}
              </div>
            <div className='text-justify border border-primary border-opacity-30 p-2 rounded-md'>
            {singleContactInfo.message}
            </div>
               
          </div>
     );
};
export default ContactInfoReadMore;