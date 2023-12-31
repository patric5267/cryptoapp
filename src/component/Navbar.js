import React, { useState } from 'react'
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandDiscord } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [pos , setPos] = useState("Home")
  const arr=["Home" , "Market" , "Choose Us" ,"Join"]
  return (
    <div className=' sticky z-10 top-0 w-full'>
      <div className=' bg-[#130749] xl:flex xl:justify-center '>
      <div className="navocon flex justify-between items-center text-white py-7 px-3 xl:w-[75rem] xl:px-0">
       <h1 className=' font-bold text-2xl xl:text-3xl text-[#f3f2f4] overflow-y-hidden'>COINDOM</h1>
       <ul className=' font-semibold text-xl  hidden md:flex text-[#f3f2f4]'>
      {arr.map((i)=><a href={`#${i}`}><li onClick={()=>setPos(i)} className=' mr-8' style={i===pos ? {color:'#d61bd6'}: {color:'white'}}>{i}</li></a>)  }
      
       </ul>
       <ul className='flex'>
        <li><TbBrandTwitter  className=' text-2xl xl:text-3xl mr-3 xl:mr-4 text-[#f3f2f4]'/></li>
        <li><TbBrandDiscord  className=' text-2xl xl:text-3xl mr-3 xl:mr-4 text-[#f3f2f4]'/></li>
        <li className='md:hidden'><TiThMenu  className=' text-2xl'/></li>
       </ul>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar
