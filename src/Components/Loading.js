import React from 'react';
import logo from "../Images/logo.png"
const Loading = () => {
     return (
          <>
    
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
   <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-gray-900">
   </div>
   
</div>
</>
     );
};
export default Loading;