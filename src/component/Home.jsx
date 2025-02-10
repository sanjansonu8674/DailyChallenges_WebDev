import React from 'react'

function Home() {
  return (
    <div>
      {/* right-[6vw] top-[14vh] text-center */}
      <div className="text absolute top-[20vh] left-[5vw] flex flex-col justify-around ">
        <h1 className='text-6xl font-semibold text-orange-400'>A Home For Hindu Devotees</h1>
        <h1 className='mt-5 text-2xl'>वैदिक संस्कृति वैदिक संस्कार</h1>
        <p className='text-3xl mt-2'>Bringing the essence of <br />
          ancient Vedic traditions to your doorstep.</p>
      </div>
      <img src="https://vaikunth.co/front_assets/image/home-page-image/main-home-page-bg-2.png" alt="" className='bg-cover h-screen w-full' />
    </div>
  )
}

export default Home
