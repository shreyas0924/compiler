function Hero() {
  return (
    <>
      <div className='flex  w-11/12 m-auto h-3/4 mt-4 text-white'>
        <div className='text-5xl  w-1/2 font-bold'>
          <h1 className='mt-16'>Click.</h1>
          <h1>Code & Execute.</h1>
          <h1 className='text-cyan-400 '>Done.</h1>
        </div>

        <div className=' w-1/2'>
          <img src='/heroPic.jpg' className=' w-full h-full' />
        </div>
      </div>
    </>
  )
}

export default Hero
