import { FaPlus } from "react-icons/fa6";
import SingleBlog from "./SingleBlog";


const AllBlogscont = () => {
  return (
               <div className='w-[66%]'>
                              
                              {/* top navigation section or the  */}

                              <div className="w-full h-[12vh] flex items-end  justify-center ">
                                             <div className="w-[73%] h-[50%] border-b-[1px] relative  overflow-hidden border-black/20 ">
                                                            <div className="w-[100vw] relative f2 h-full items-start whitespace-nowrap  pl-[60px] flex gap-[44px]">
                                                                           <div className="h-full flex-shrink-0 w-fit  border-b-[1px] border-black">
                                                                           <h1>For you</h1>
                                                                           </div>
                                                                           <div className="h-full flex-shrink-0 w-fit  border-b-[1px] border-black">
                                                                           <h1>Following</h1>
                                                                           </div>
                                                                           <div className="h-full flex-shrink-0 w-fit  border-b-[1px] border-black">
                                                                           <h1>UX</h1>
                                                                           </div>
                                                                           <div className="h-full flex-shrink-0 w-fit  border-b-[1px] border-black">
                                                                           <h1>Blockchain</h1>
                                                                           </div>
                                                                           <div className="h-full flex-shrink-0 w-fit  border-b-[1px] border-black">
                                                                           <h1>Entrepreneurship</h1>
                                                                           </div>
                                                                           <div className="h-full flex-shrink-0 w-fit  border-b-[1px] border-black">
                                                                           <h1>Startup</h1>
                                                                           </div>
                                                                           <div className="h-full flex-shrink-0 w-fit  border-b-[1px] border-black">
                                                                           <h1>Business</h1>
                                                                           </div>
                                                            </div>

                                                            <div className="absolute flex items-center justify-center bg-transparent top-0 left-0 w-[10%]  h-full">
                                                                           <FaPlus/>
                                                            </div>
                                                            <div className="absolute flex items-center justify-center bg-white top-0 -right-5 w-[10%]  h-full">
                                                                           <FaPlus/>
                                                            </div>
                                             </div>
                              </div>


                              {/* the main thingy the blog stuff  */}
                              <SingleBlog/>


               </div>
  )
}

export default AllBlogscont