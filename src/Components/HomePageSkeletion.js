import React from 'react';
import Skeleton from 'react-loading-skeleton';
const HomePageSkeletion = () => {
     return (
          <>

          <div className=" border border-gray-300 shadow  animate-pulse rounded">
       <div className="h-36 sm:h-40 w-full   p-1 sm:pb-2 sm:pl-1  rounded rounded-b-none bg-gray-300 animate-pulse">
      
       {/* <div className='sm:flex mt-2 hidden sm:block'>
            <p className='w-full bg-gray-300  ms-2 mr-1 rounded-md border border-white '><Skeleton/></p>
            <p className='w-full bg-gray-300  mr-8  rounded-md'> 
            <Skeleton/>
            </p> */}
       {/* </div>   */}
       </div>  
            <p className=" sm:block bg-gray-300 mt-1"><Skeleton/></p>    
            <p className=" sm:block bg-gray-300 mt-1"><Skeleton/></p>    
            <p className=" sm:block bg-gray-300 mt-1"><Skeleton/></p>    
            
            
          
            </div>
          </>
     );
};
export default HomePageSkeletion;