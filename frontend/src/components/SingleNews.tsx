
const SingleNews = () => {
  return (
               <div className="w-full mt-6 ">
               <div className="flex gap-2 items-end ">
                                 <div className="w-6 h-6 rounded-full overflow-hidden">
                                   <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1727887746394-8b5c23c98b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D" alt="not showing" />
                                 </div>

                                 <p className="f3  text-[0.85rem] opacity-70 font-light ">The Medium Newsletter <span className="opacity-70">in</span> the Medium Blog</p>
               </div>

               <div>
                 <h1 className="text-[1.1rem] mt-[14px] w-[78%] pl-1 leading-[1.3rem] f3">How to make your weekend feel twice as long</h1>
               </div>
         </div>
  )
}

export default SingleNews