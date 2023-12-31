import React from 'react'
import { LuWallet } from "react-icons/lu";

const Choose = () => {
    return (
        <div className='market xl:flex xl:justify-center'>
            <div className="innermarket  px-2 xl:w-[75rem] py-5 lg:py-10" id='Choose Us'>
                <div className=' flex flex-col items-center text-white mt-5'>
                    <h1 className=' font-semibold text-6xl sm:pb-7 overflow-y-hidden text-center'>WHY CHOOSE US</h1>
                    <div className='w-full mt-5 lg:mt-8 flex flex-col md:flex-row items-center px-2 md:px-0 lg:px-7'>
                        <div className='section1 grid grid-cols-1 gap-y-4'>
                            <div className="box1 w-full border-gray-400 border-solid border-[1px] rounded-md">
                                <div className=' bg-[hsla(0,0%,100%,.05)] flex   px-3 py-5'>
                                    <div className=' smbox w-16 h-12 rounded-md flex justify-center items-center'>
                                        <LuWallet className=' text-white w-6 h-6' />
                                    </div>
                                    <div className=' ml-3'>
                                        <h1 className=' overflow-y-hidden text-2xl  xl:text-4xl font-semibold'>CONNECT YOUR WALLET</h1>
                                        <p className='text-lg xl:text-xl mt-2 text-gray-400'>Use Trust Wallet ,   Metamask or to connect to the app</p>
                                    </div>
                                </div>

                            </div>
                            <div className="box1 w-full  border-gray-400 border-solid border-[1px] rounded-md">
                                <div className=' bg-[hsla(0,0%,100%,.05)] flex   px-3 py-5'>
                                    <div className=' smbox w-16 h-12 rounded-md flex justify-center items-center'>
                                        <LuWallet className=' text-white w-6 h-6' />
                                    </div>
                                    <div className=' ml-3'>
                                        <h1 className=' overflow-y-hidden  text-2xl xl:text-4xl font-semibold'>SELECT YOUR QUANTITY</h1>
                                        <p className='text-lg xl:text-xl mt-2 text-gray-400'>Use Trust Wallet ,   Metamask or to connect to the app</p>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="box1 w-full border-gray-400 border-solid border-[1px] rounded-md">
                                <div className=' bg-[hsla(0,0%,100%,.05)] flex   px-3 py-5'>
                                    <div className=' smbox w-16 h-12 rounded-md flex justify-center items-center'>
                                        <LuWallet className=' text-white w-6 h-6' />
                                    </div>
                                    <div className=' ml-3'>
                                        <h1 className='  overflow-y-hidden text-2xl xl:text-4xl font-semibold'>CONFIRM TRANSACTION</h1>
                                        <p className='text-lg xl:text-xl mt-2 text-gray-400'>Use Trust Wallet ,   Metamask or to connect to the app</p>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="section2 my-3 md:px-3">
                            <img src="https://coindom-crypto-search.vercel.app/static/media/choose-main.39852b7511b28d44406f.png" alt="" className=' w-36 h-52 md:w-96 md:h-96' />
                        </div>
                        {/* fgdghfhg */}

                        <div className='section1'>
                            <div className="box1 w-full border-gray-400 border-solid border-[1px] rounded-md">
                                <div className=' bg-[hsla(0,0%,100%,.05)] flex   px-3 py-5'>
                                    <div className=' smbox w-16 h-12 rounded-md flex justify-center items-center'>
                                        <LuWallet className=' text-white w-6 h-6' />
                                    </div>
                                    <div className=' ml-3'>
                                        <h1 className=' overflow-y-hidden text-2xl  xl:text-4xl font-semibold'>CONNECT YOUR WALLET</h1>
                                        <p className='text-lg xl:text-xl mt-2 text-gray-400'>Use Trust Wallet ,   Metamask or to connect to the app</p>
                                    </div>
                                </div>

                            </div>
                            <div className="box1 w-full my-6 border-gray-400 border-solid border-[1px] rounded-md">
                                <div className=' bg-[hsla(0,0%,100%,.05)] flex   px-3 py-5'>
                                    <div className=' smbox w-16 h-12 rounded-md flex justify-center items-center'>
                                        <LuWallet className=' text-white w-6 h-6' />
                                    </div>
                                    <div className=' ml-3'>
                                        <h1 className=' overflow-y-hidden  text-2xl xl:text-4xl font-semibold'>SELECT YOUR QUANTITY</h1>
                                        <p className='text-lg xl:text-xl mt-2 text-gray-400'>Use Trust Wallet ,   Metamask or to connect to the app</p>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="box1 w-full border-gray-400 border-solid border-[1px] rounded-md">
                                <div className=' bg-[hsla(0,0%,100%,.05)] flex   px-3 py-5'>
                                    <div className=' smbox w-16 h-12 rounded-md flex justify-center items-center'>
                                        <LuWallet className=' text-white w-6 h-6' />
                                    </div>
                                    <div className=' ml-3'>
                                        <h1 className='  overflow-y-hidden text-2xl xl:text-4xl font-semibold'>CONFIRM TRANSACTION</h1>
                                        <p className='text-lg xl:text-xl mt-2 text-gray-400'>Use Trust Wallet ,   Metamask or to connect to the app</p>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose
