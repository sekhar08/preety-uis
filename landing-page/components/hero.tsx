import React from 'react'

const Hero = () => {
  return (
    <div className='my-40 flex flex-col items-center font-paaji'>
        <h1 className='max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight
        font-bold tracking-tight text-transparent'>Unleash the power of intuitive finance</h1>
        <p className='text-xl text-neutral-400 max-w-3xl mx-auto text-center mt-10 selection:bg-white'>
            Say goodbye to the <span className='text-primary'>outdated</span> financial tools. Every small business owner, 
            regardless of their background, can now manage their business like a pro. <br />
           <span className='text-primary'>Simple. Intuitive. and never boring.</span>
        </p>
        <div className="flex justify-center mt-8 w-full max-w-lg">
            <input type="text" className='mr-4 rounded-xl border border-neutral-600 placeholder:text-neutral-500 text-white px-4 flex-1 focus:outline-none focus:ring-1 focus:ring-primary transition duration-200'
            placeholder='Enter your email' />
            <button className='relative rounded-xl border border-neutral-700 px-4 py-2 text-white cursor-pointer'>
            <div className='absolute -bottom-px inset-x-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent animate-pulse' >

            </div>
                Join Waitlist
            </button>
        </div>
    </div>
  )
}

export default Hero;