import React, { useState } from 'react'
import Logo from "../images/logo (1).png"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Menu = () => {
let [show, setShow]=useState(false)
let handleShow=()=>{
  setShow(!show)
}

  return (
    <section className='h-24 bg-[white] lg:py-[20px] pt-[20px]'>
      <div className='max-w-container mx-auto'>
        <div className='flex justify-between items-center'>
<div className='w-[30%]'>
<img src={Logo} alt="logo"/>
</div>
<div className={`lg:flex w-[70%] pl-[25px] items-center absolute top-0 left-0 lg:static ${show ?"top-[80px] w-full bg-[pink] z-10": "top-[-300px] bg-[gray w-full"}`}>
<div className='  lg:pl-[100px] w-[45%] '>
<ul className='lg:flex  lg:gap-x-12 '>
  <li className='py-[8px] text-center'><a className='font-robo text-[18px] font-normal hover:text-[#EA580C] ' href="#">Home</a></li>
  <li className='py-[8px] text-center '><a className='font-robo text-[18px] font-normal hover:text-[#EA580C] ' href="#">About</a></li>
  <li className='py-[8px] text-center'><a className='font-robo text-[18px] font-normal hover:text-[#EA580C] ' href="#">Service</a></li>
  <li className='py-[8px] text-center'><a className='font-robo text-[18px] font-normal hover:text-[#EA580C] ' href="#">Contact</a></li>
</ul>
</div>
<div className='w-[25%] lg:ml-[144px] mt-[20px] mb-[20px] md:ml-[100px] sm:ml-[100px] '>
<button className=' flex border-2 border-[#EA580C] rounded-[20px]   hover:bg-[#EA580C] px-[40px] py-[15px] items-center hover:text-[white]'>
<i className='text-[#ff000093] text-[30px] lg:pr-[25px] hover:text-[white]'><FaCloudDownloadAlt /></i>
 <span className='font-pops  text-[18px] font-semibold '>Download</span>
</button>
</div>

</div>

<div className='lg:hidden pr-[10px]' onClick={handleShow}>
{show==true?<RxCross2/>:<FaBars />}
</div>
        
</div>
        </div>
    </section>
  )
}

export default Menu
    