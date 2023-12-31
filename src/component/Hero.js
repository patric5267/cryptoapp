import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
    const[load , setLoad]= useState(false)
    const [data, setData] = useState([])
    // console.log(data);
    const getdata = async(id)=>{
        try {
            // console.log(arr[i]);
            setLoad(true)
            const url =`https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'b27e18fb5bmsh653948a61eaedcap122759jsncc5aa8dcbbd9',
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };
            const response = await fetch(url, options);
            const res = await response.json();
            if(res){
                setLoad(false)
                setData((prevdata)=>[...prevdata , res.data.coin])
            }
        } catch (error) {
            console.error(error);
        }
       
    //    return arr2
    }
    const arr=["Qwsogvtv82FCd" , "razxDUgYGNAdQ" , "f3iaFeCKEmkaZ" , "DCrsaMv68"]
    useEffect(()=>{
      for(let i=0 ; i<arr.length;i++){
         getdata(arr[i])
      }
    },[])
        

    return (
        <div className='hero xl:flex xl:justify-center  ' id='Home'>
            <div className='text-white px-2 flex flex-col items-center md:block xl:w-[75rem] py-5 lg:py-10'>
                <div className=' block lg:flex lg:flex-row lg:items-start'>
                    <img src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png" alt="" className=' w-36 h-20 hidden lg:block imgcon' />
                    <h1 className='  font-semibold text-5xl md:text-7xl lg:text-8xl  text-center  leading-snug overflow-y-hidden'>
                        <span>TRACK AND TRADE
                            CRYPTO CURRENCIES</span>
                    </h1>
                    <img src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png
            " alt="" className=' w-36 h-20  hidden lg:block imgcon' />
                </div>
               <a href="#market"> <button className='my-8 md:hidden text-white font-semibold text-lg bg-black px-7 py-2 rounded-full flex items-center'>
                    <p className=' '>See Prices</p>
                    <IoIosArrowDown className=' ml-3 font-semibold text-2xl' />
                </button></a>
              {load?    <div className='  flex justify-center'>
                <span className="loader my-9 "></span>

                </div>  :
                <div className="coins  hidden md:flex md:justify-evenly mt-8 lg:mt-14">
                 { data.map((i)=> <div key={i.uuid} className=' flex flex-col items-center'>
                        <img src={i.iconUrl} alt="" className=' w-28 h-28' />
                        <div className='flex font-semibold text-lg mt-2 lg:text-2xl'>
                            <p>{i.name}</p>
                            <p className=' ml-2' style={i.change.startsWith('-')? {color:'red'} : {color:'#0ecb81'}}>{i.change}</p>
                        </div>
                        <p className=' font-semibold text-xl'>${i.price.slice(0,7)}</p>
                    </div>)
                    }
                </div> }
            </div>
        </div>
    )
}

export default Hero
