import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center
    justify-center max-w-[800px] w-full mx-auto'>
        <div className='flex flex-col gap-4'>

        <p>It's time to get</p>
        <h1 className='uppercase font-semibold text-4xl lg:text-7xl'>Gym<span className='text-blue-400 font-medium'>Fit</span></h1>
        </div>
        <p>I hereby acknowledge that I may become unbelievable
            monstronomous
        </p>
        <button className='px-8 py-4 rounded medium border border-blue-400 border-solid blueShadow'><p>Accept & Begin</p></button>
    </div>
  )
}
