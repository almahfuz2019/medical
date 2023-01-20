import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
const ContactDetailsInformation = () => {
     const [specificUserContactInfo, setSpecificUserContactInfo] = useState({});
     const { id } = useParams();
     useEffect(() => {
          const url = `http://localhost:5000/contact/${id}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setSpecificUserContactInfo(data));
     }, []);
     return (
          <div className='p-2 sm:p-5 sm:pb-10 bg-white'>
               <a  href = "javascript:history.back()"><span className="ml-1 text-2xl  text-primary">
                <FaArrowCircleLeft/></span></a>
              <div className='text-2xl font-bold mt-2 mb-5 text-center '>
              {specificUserContactInfo.email}
              </div>
            <div className='text-justify border border-primary border-opacity-30 p-2 rounded-md'>
            {specificUserContactInfo.message}
            </div>
               
          </div>
     );
};
export default ContactDetailsInformation;