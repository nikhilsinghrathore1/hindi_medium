import React from 'react'
import SingleNews from './SingleNews'

const StaffPicks = () => {
  return (
               <div className="w-full pt-10 px-10">
               {/* the top heading section  */}
               <div className="w-full f2 tracking-wide  font-semibold text-[1.05rem]">Staff Picks</div>


                 {/* single news component  */}

                 <SingleNews/>
                 <SingleNews/>
                 <SingleNews/>

                 <div className="mt-5">
                   <h1 className="text-green-700 text-[0.92rem] pl-2 f2">See the full list</h1>
                 </div>

             </div>
  )
}

export default StaffPicks