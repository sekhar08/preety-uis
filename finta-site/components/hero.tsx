import React from 'react'

const Hero = () => {
  return (
    <div className='px-4 py-2 flex items-center flex-col w-full my-20'>
        <button className='border px-2 py-0.5 rounded-full border-gray-300 hover:bg-gray-300 transition cursor-pointer duration-200 bg-gray-200 text-black font-medium text-bold tracking-wide'>
           Delaware franchise taxes are due by March 1   &rarr;
        </button>

        <div className='font-medium mt-10 text-7xl text-black tracking-tighter text-center'>
            <h1>Magically simplify <br />Accounting and taxes</h1>
        </div>   
        <p className='max-w-2xl text-center mt-4 mx-auto text-lg text-neutral-700 font-medium'>
            Automated bookkeeping. Effortless tax filing. Financial clarity. <br /> Set up in 10 mins. Back to building by 3:08pm.
        </p>
        <div className="flex item-center gap-4 mt-10">
                <button className="cursor-pointer bg-[#2579F4] px-4 py-2 rounded-lg text-white  font-bold shadow-lg text-shadow-md tracking-wide ">Start free trial</button>
                <button className="cursor-pointer px-4 py-2 rounded-lg text-black  font-bold text-shadow-md tracking-wide ">Pricing &rarr;</button>
        </div>
    </div>
     )
}


export default Hero