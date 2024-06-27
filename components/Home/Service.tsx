import React from 'react'
import { FaTruck } from "react-icons/fa";
function Service() {
  return (
    <div className=' flex flex-col gap-2  bg-slate-800/70 border border-slate-700 border-solid text-slate-300 rounded-lg cursor-pointer hover:bg-slate-800 items-center justify-center transition ease-in duration-300 py-4 mt-2 '>
      <FaTruck className='text-3xl items-center'/>
      <h2 className='text-xl font-bold text-slate-400'>24/48 Hour Delivery</h2>
       <p className='font-bold text-slate-500'>Home delivery everywhere in Morocco</p>
    </div>
  )
}

export default Service