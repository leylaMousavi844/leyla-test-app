import React, {  useState } from 'react';
import logo from "./../../asset/images/logo.png";
import number from "./../../asset/images/Container.png";
import icon from "./../../asset/images/Container (3).png"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div  >
      <div className="lg:hidden flex-row-reverse bg-gray-200 h-16 justify-around  fixed top-0  z-20 w-full ">
        <div >

          <nav className='relative '>

            <button onClick={() => setIsOpen(!isOpen)} className={`absolute  mr-3 right-1/10  mt-4 z-30 ${!isOpen?"flex":"hidden" }`}>

             <img src={icon}  />
            </button>
            <img src={logo}  className='w-14 h-16 absolute   z-30  ml-4 ' style={{left:"2%"}}/>
          </nav>



          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-60 z-10 "
              onClick={() => setIsOpen(false)}
            ></div>

          )}

          
          <div
            className={`absolute top-0 right-0  h-screen bg-white z-20 transform  transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'hidden'}` }
             
          >
            {/* Sidebar content */}
            <nav className="mt-10">
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                صفحه اصلی
              </a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                رتبه های برتر
              </a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                اساتید مجموعه
              </a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                خدمات ما 
              </a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                درباره ی ما
              </a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                تماس با ما
              </a>
              
            </nav>
          </div>
        </div>
<div >
  
</div>
      </div>
     
     <ul className='lg:flex  hidden justify-center items-center'>
        <li>
          <img className='w-28 h-32' src={logo}/>
        </li>
        <li className=" pr-12 text-sm">صفحه ی اصلی</li>
        <li className=" pr-9 text-sm">رتبه های برتر</li>
        <li className=" pr-9 text-sm">اساتید مجموعه</li>
      
       
    <a href='#serviceId'>
    <li   className=" pr-9 text-sm"> خدمات ما</li>
    </a>
      
     
        <li className=" pr-9 text-sm">درباره ی ما</li>
        <li className="pl-12 text-sm">تماس باما</li>
        <li className=' text-sm'>
          <img src={number} />
        </li>

      </ul>
     </div>
   
  );
}

export default Navbar;