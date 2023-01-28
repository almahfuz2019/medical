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


            <div className="chat chat-start w-full">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__340.png" />
    </div>
  </div>
  <div className="chat-header">
    <time className="text-xs opacity-50 ml-10">  {specificUserContactInfo.dateAndTime}</time>
  </div>
  <div className="chat-bubble bg-gray-500 text-white"> {specificUserContactInfo.message}</div>
  <div className="chat-footer opacity-50">
  {specificUserContactInfo.email}
  </div>
</div>



               
          </div>
     );
};
export default ContactDetailsInformation;