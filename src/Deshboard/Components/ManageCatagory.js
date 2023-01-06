import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseCatagory from "../Hooks/UseCatagory"
const ManageCatagory = () => {
     const {catagorys,handleCatagoryDelete}=UseCatagory();
     return(
          <div className="overflow-x-auto m-10">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th >No</th>
                <th className='text-center'>Catagory</th>
                <th className='text-end'>Action</th>
              </tr>
            </thead>
                
         {catagorys.map((cata,index)=>
            <tbody>
              <tr className='border rounded'>
                <td>{index+1}</td>
               
                <td  className='text-center'>{cata?.catagory}</td>
                
                <td className='flex gap-3 text-2xl justify-end'>
                <Link to={`/updatecatagory/${cata._id}`}>
            <FaRegEdit/>
            </Link>
            <Link onClick={()=>handleCatagoryDelete(cata._id)}>
            <FaRegTrashAlt/>
            </Link>
                </td>
              </tr>
            </tbody>
          )}
          </table>
        </div>
     );
};
export default ManageCatagory;