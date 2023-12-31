import React from 'react'
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandDiscord } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";

const Join = () => {
    // console.log(window.innerWidth);
  return (
    <div className='market '>
      <div className=' py-6  px-2 '>
        <div className=' flex flex-col items-center text-white' id='Join'>
        <div className=' lg:flex'>
        <img src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png" alt="" className='hidden lg:block w-24 h-24 imgcon'/>
           <h1 className=' px-5  text-5xl text-center  lg:text-8xl lg:w-[38rem] overflow-y-hidden font-semibold  leading-snug' style={window.innerWidth>=1024?{lineHeight:'5.2rem'} : {lineHeight:'3.5rem'}}>JOIN US VIA DISCORD</h1>
           <img src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png" alt="" className=' hidden lg:block w-24 h-24 imgcon'/>
        </div>
         
           <p className=' font-medium text-center text-lg px-4 py-5 lg:text-2xl'>Invest and manage all your crypto at one place</p>
           <button className='inner px-6 py-2 rounded-full text-xl font-medium mt-6'>Join us via Discord</button>
         
           <div className="footer overflow-y-hidden lg:h-[18rem] lg:w-[68rem]  privacy mt-16 flex justify-center flex-col items-center"   style={window.innerWidth>=1024 ? {backgroundImage:"url('https://coindom-crypto-search.vercel.app/static/media/footer-bg.e33c036e05f949cf81cb.png')"} : {}}>
            <ul className=' flex text-3xl lg:text-4xl'>
                <li><TbBrandTwitter className='mr-4'/></li>
                <li><TbBrandDiscord className='mr-4'/></li>
                <li><FiFacebook  className='mr-4'/></li>
                <li><RiYoutubeLine  className=''/></li>
            </ul>
            <div className=' flex justify-between lg:text-xl mt-4 font-medium overflow-y-hidden'>
                <p className='overflow-y-hidden'>Privacy</p>
                <p className='overflow-y-hidden ml-3'>Terms of Use</p>
            </div>
           </div>
           

    
        </div> 
      </div>
    </div>
  )
}

export default Join
