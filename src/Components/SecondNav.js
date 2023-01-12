import React, { useState } from 'react';

const secondNav = () => {
     // const [searchValue,setSearchValue]=useState('');
     const search=(event)=>{
          // event.preventDefault();
          const searchInput=event.target.inputValue.value;
          console.log(searchInput);
     }
     return (
          <div>
      {/* const matchValues = products.filter((product)=> product.name.includes(input_value)) */}
      
               <div className="text-center w-full">
              <form onChange={search}>
              <input type="text" className="sm:w-1/2 py-2 pl-10 pr-4  bg-gray-200 border rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" name='inputValue' placeholder="Search here"/>
               <select className="select select-success w-10 max-w-xs ">
  <option disabled selected>Pick your favorite anime</option>
  <option>One Piece</option>
  <option>Naruto</option>
  <option>Death Note</option>
  <option>Attack on Titan</option>
  <option>Bleach</option>
  <option>Fullmetal Alchemist</option>
  <option>Jojo's Bizarre Adventure</option>
</select>
                  
               </form>    
               </div>
      
                <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden mx-5 sm:mx-0">
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">News</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Articles</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Videos</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Tricks</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">PHP</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Laravel</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Vue</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">React</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Tailwindcss</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Meraki UI</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">CPP</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">JavaScript</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Ruby</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Mysql</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Pest</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">PHPUnit</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Netlify</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">VS Code</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">PHPStorm</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Sublime</a>
        </div> 
          </div>
     );
};
export default secondNav;