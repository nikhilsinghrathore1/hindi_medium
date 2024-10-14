import StaffPicks from "./StaffPicks"

const StickyRight = () => {
  return (
               <div className='w-[34%] h-[200vh] border-l-[1px] border-black/10'>
                      {/* staff pics component */}
                     <StaffPicks/>

                     {/* recemembed topics section  */}

                     <div className="w-full p-10">

                      <h1 className="f2 font-semibold pl-1 text-[1.08rem]">Recommended topics</h1>

                      <div className="flex flex-wrap gap-2 gap-y-3 mt-5 w-[80%]">
                        {["programming" , "writing" , "Data science" , "Relationships" , "technology" , 'cryptocurrenvcy' , "productivity"].map((e,i)=>(

                          <div key={i} className="px-5 py-2 bg-[#F2F2F2] capitalize f2 rounded-full flex items-center justify-center "><p className="opacity-80 tracking-tight">{e}</p></div>
                        ))}
                      </div>

                     </div>
               </div>

  )
}

export default StickyRight