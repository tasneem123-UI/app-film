import React from 'react'
import homeBg from './img/home3.jpg';
export default function Home() {
  return (
    <div>
<section className="min-h-screen" 

  style={{
   backgroundImage: `url(${homeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",

  }}
>
  <div className="  p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-left mt-64 ml-10">
        <p className="text-black font-semibold">Marvel Universe</p>
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-7xl">
Spider-Man 

</h2>
 <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-7xl">
Far From Home

</h2>
    
      <div className="mt-4 sm:mt-8">
      <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">BOOK NOW</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

