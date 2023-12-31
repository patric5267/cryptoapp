import React, { useEffect, useState } from 'react'
import '../App.css'
import { IoMdClose } from "react-icons/io";

const Market = () => {
    const [show, setShow] = useState(false)
    const [coind, setCoind] = useState()
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    const [number, setNumber] = useState(1)
    const getdata = async (number) => {
        try {
            setLoad(true)
            const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=${number}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'b27e18fb5bmsh653948a61eaedcap122759jsncc5aa8dcbbd9',
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };
            const data = await fetch(url, options);
            const res = await data.json()
            if (res) {
                setLoad(false)
                setData(res.data.coins);
            }
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        getdata(number)
    }, [number])
    const info = async (id) => {
        // console.log(id);
        try {
            setShow(true)
            setLoad(true)
            const url = `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'b27e18fb5bmsh653948a61eaedcap122759jsncc5aa8dcbbd9',
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };


            const response = await fetch(url, options);
            const result = await response.json();
            if (result) {
                // setShow(true)
                setLoad(false)
                setCoind(result.data.coin)
                // console.log(result.data.coin);
            }
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <>
            <div className='pt-8 market px-2 xl:flex xl:justify-center xl:flex-col xl:items-center py-4' id='Market'>

                <div className='  overflow-x-auto rounded-md xl:w-[75rem] '>
                    <h1 className=' text-[#f3f2f4]  w-full font-semibold text-2xl md:text-4xl mb-4 overflow-y-hidden'>Market Update</h1>

                    <ul className='inner flex justify-between rounded-md text-white py-3 w-[40rem] sm:min-w-full px-2'>
                        <li className=' list-none text-lg md:text-xl font-semibold'>Coin</li>
                        <li className=' list-none text-lg md:text-xl font-semibold'>Price</li>
                        <li className=' list-none text-lg md:text-xl font-semibold'>24th Change</li>
                        <li className=' list-none text-lg md:text-xl font-semibold'>Market Cap</li>
                    </ul>

                    {load ? <div className='  flex justify-center'>
                        <span className="loader my-9 "></span>

                    </div> : <div className=' grid grid-cols-1 w-[40rem]  sm:min-w-full text-[#f3f2f4] overflow-y-hidden'>
                        {data.map((i) => <div onClick={() => info(i.uuid)} key={i.name} className=' cursor-pointer  flex justify-between items-center py-5 text-lg md:text-xl font-semibold border-t-0 border-l-0 border-r-0 border-[#f3f2f4] border-solid border-[2px]'>
                            <div className=' flex items-center'>
                                <img src={i.iconUrl} alt="" className=' w-10 h-10' />
                                <p className=' ml-2'>{i.name}</p>
                            </div>
                            <p className=' mr-14'>${i.price.slice(0, 5)}</p>
                            <p className=' mr-14' style={i.change.startsWith('-') ? { color: 'red' } : { color: 'green' }}>{i.change}%</p>
                            <p className=' '>{`$${i.marketCap}`}</p>
                        </div>)}
                        {/* <div className='  flex justify-between items-center py-5 text-lg md:text-xl font-semibold border-t-0 border-l-0 border-r-0 border-[#f3f2f4] border-solid border-[2px]'>
                            <div className='flex items-center'>
                                <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" className=' w-10 h-10' />
                                <p className=' ml-2'>Bitcoin</p>
                            </div>
                            <p className=' mr-14'>$42874.00</p>
                            <p className=' mr-14'>0.08%</p>
                            <p className=' '>$878,789,567,987</p>
                        </div> */}
                    </div>}

                </div>
                <div className='mt-6  flex justify-center items-center xl:w-[75rem]'>
                    <div className=' w-10 h-10 font-semibold bg-[#f3f2f4] rounded-full flex justify-center items-center mr-3 lg:h-12 lg:w-12  cursor-pointer' onClick={() => setNumber(1)} style={number === 1 ? {
                        background: "linear-gradient(25deg, #2600fc, #ff00ea)", color: "#f3f2f4"
                    } : { backgroundColor: "#f3f2f4" }}>1</div>
                    <div className=' cursor-pointer w-10 h-10 font-semibold bg-[#f3f2f4] rounded-full flex justify-center items-center mr-3 lg:h-12 lg:w-12' onClick={() => setNumber(2)} style={number === 2 ? { background: "linear-gradient(25deg, #2600fc, #ff00ea)", color: "#f3f2f4" } : { backgroundColor: "#f3f2f4" }}>2</div>
                    <div className=' cursor-pointer w-10 h-10 font-semibold bg-[#f3f2f4] rounded-full flex justify-center items-center mr-3 lg:h-12 lg:w-12' onClick={() => setNumber(3)} style={number === 3 ? { background: "linear-gradient(25deg, #2600fc, #ff00ea)", color: "#f3f2f4" } : { backgroundColor: "#f3f2f4" }}>3</div>
                    <div className=' cursor-pointer w-10 h-10 font-semibold bg-[#f3f2f4] rounded-full flex justify-center items-center mr-3 lg:h-12 lg:w-12' onClick={() => setNumber(4)} style={number === 4 ? { background: "linear-gradient(25deg, #2600fc, #ff00ea)", color: "#f3f2f4" } : { backgroundColor: "#f3f2f4" }}>4</div>
                    <div className=' cursor-pointer w-10 h-10 font-semibold bg-[#f3f2f4] rounded-full flex justify-center items-center mr-3 lg:h-12 lg:w-12' onClick={() => setNumber(5)} style={number === 5 ? { background: "linear-gradient(25deg, #2600fc, #ff00ea)", color: "#f3f2f4" } : { backgroundColor: "#f3f2f4" }}>5</div>
                </div>
            </div>
            {show && <div className='drop h-full w-full  fixed top-0 z-20 py-7 lg:py-0 px-2 lg:px-0 flex items-center justify-center    text-[#f3f2f4] overflow-y-auto'>
                
                {load ? <span className="loader"></span> : coind && <div className='flex flex-col items-center   lg:h-96 mt-16 sm:mt-20 lg:mt-0   '>
                    <div className=' lg:flex lg:flex-row '>
                        <div className=' lg:flex lg:flex-row lg:items-center overflow-y-hidden overflow-x-hidden'>
                            <div className='flex flex-col items-center lg:mx-7 mt-6 '>
                                <img src={coind.iconUrl} alt="" className=' w-52 h-52'/>
                                <h1 className=' mt-4 font-medium text-4xl overflow-y-hidden'>{coind.name}</h1>
                                <p className=' my-5 font-medium text-3xl overflow-y-hidden'>Rank : #{coind.rank}</p>
                            </div>
                            <div className='line  bg-white h-[2px] lg:w-[2px] lg:h-[20rem]'>
                                dfdsfds
                            </div>
                        </div>
                        <div className="description lg:mx-8 overflow-y-hidden ">
                            <ul className=' flex flex-col text-xl  items-center sm:flex-row sm:justify-between lg:justify-between my-3 sm:px-4 '>
                                <li className=' lg:mr-9 text'>24th Change: <span style={coind.change.startsWith('-')? {color:'red'} : {color:'green'}}>{coind.change}</span></li>
                                <li className=' lg:mr-9 my-3'>Price: ${coind.price.slice(0,5)}</li>
                                <li className=' '>Symbol: {coind.symbol}</li>
                            </ul>
                            <div className=' lg:text-left  lg:w-[40rem] lg:py-3 overflow-y-auto font-medium text-lg mt-6 lg:mt-0'>
                                <p className=' h-24 lg:h-[17rem] px-5 sm:px-4 lg:px-0 '>{coind.description}</p>

                            </div>
                        </div>
                    </div>
                    <button className='absolute top-3 right-4  px-2 py-2 closebtn' onClick={()=>setShow(false)}><IoMdClose className=' text-white font-medium text-3xl' />
                    </button>
                </div>}
            </div>}
        </>

    )
}

export default Market
