import React from 'react'
import {ComingSoon } from "./Date"
export default function Opening() {
  return (
    <div class="container mx-auto px-4 sm:px-50 lg:px-50 xl:px-60 mt-12" id="ComingSoon">
        <div className="mb-4">
    <h1 className="text-white text-start text-xl sm:text-2xl font-bold">ComingSoon</h1>
    <hr className="border-t-2 border-red-800 my-2" />
  </div>
 <div className="grid grid-cols-2 gap-5    sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5    ">
  {ComingSoon.map((film)=>
 <div class=" 
            hover:scale-105 transition-transform duration-300 cursor-pointer gap-x-0 gap-y-0  ">

      <img src={film.image} alt={ film.title}  className="w-48 h-auto object-cover transition-opacity group-hover:opacity-90" />
<h1 class="text-red-800 font-extrabold text-start">{ film.title}</h1>
<h1 class="text-white font-medium text-start">{film.Duration} | {film.Category}</h1>
</div>
  )}
    </div>
    </div>
  )
}
