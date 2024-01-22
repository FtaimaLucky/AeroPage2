import React from 'react'
import Ban from '../images/banner.png'
import { GoBell } from "react-icons/go";


const Banner = () => {
  return (
   <section className=''>
    <div className='max-w-container mx-auto lg:flex md:flex lg:pt-[103px]'>
        <div className='lg:w-[60%] md:w-[50%] w-full lg:py-[100px] pt-[20px]'>
<div className='flex relative w-[179px] bg-white h-[37px] rounded-[50px] border-2 border-[black]  hover:bg-[#FAD7C4] lg:px-0 px-[10px] '>
  <div className='w-[20%] h-[100%] bg-[#FAD7C4] rounded-[50%] text-center '><i className='text-[25px] pt-10 '><GoBell /></i></div>
  <div className='w-[80%] h-[100%] rounded-[50px] hover:bg-[#FAD7C4]'><a className='font-robo text-[18px] font-medium' href="#"></a>Startup Business</div>
</div>

        
<h1 className='text-[36px] font-robo fomt-medium lg:w-[467px] lg:px-0 px-[10px] py-[30px]'>Empowering startups to fuel their business growth</h1>
<h2 className='text-[18px] font-robo fomt-medium lg:px-0 px-[10px] lg:w-[535px]'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,velit</h2>
<h2 className='text-[18px] font-robo fomt-medium lg:px-0 px-[10px]  lg:w-[529px]'>nibh arcu eu. Id sem varius malesuada tincidunt sodales.</h2>
<button className=' border-2 justyfy-content:center border-[#EA580C] rounded-[10px] lg:px-0 px-[10px]  hover:bg-[#EA580C] w-[179px] h-[38px] items-center hover:text-[white] mt-[30px]'>

 <span className='font-robo text-[16px] font-semibold lg:pl-[-12px] lg:px-0 px-[10px]'>Get started now</span>
</button>
        </div>
        <div className='lg:w-[35%] md:w-[50%] w-full h-[450px] bg-no-repeat bg-center 'style={{background:`url(${Ban})`}}>

        </div>

    </div>
   </section>
  )
}

export default Banner