
import { CiBookmarkPlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
const SingleBlog = () => {
  return (
               <div className="w-full h-[27vh] flex items-center mt-10 justify-center ">
               <div className="w-[75%]  flex h-full border-b-[1px] border-black/10">

             {/* text container  */}

                 <div className="w-[73%] relative h-full">

                   {/* top author section  */}

                   <div className="flex items-end px-3 gap-2 w-full">
                     {/* the image div  */}
                     <div className="w-6 h-6 rounded-full overflow-hidden">
                       <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1727767968533-6c6b679fdac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="not showing" />
                     </div>
                     <div className="text-[0.9rem] f2 opacity-90 "><h1>Emmanual Ikhogo</h1></div>
                   </div>

                   {/* the blog heading section  */}

                   <div className="w-full px-4">
                           {/* the main heading */}
                           <h1 className="text-[1.6rem] mt-3 f3 font-extrabold">Data Science is dying; here's why</h1>

                           {/* supporting sub para  */}
                           <p className="f2 opacity-80  text-[1.05rem] mt-2">why 85% of the projects fail</p>
                   </div>

                   {/* the absolute footer  */}

                   <div className="w-full absolute  bottom-0 text-[0.9rem] f2 px-4 h-[32%] flex items-start justify-between">
                     {/* the left div */}
                     <div className="w-1/2 h-full  flex gap-5">
                       <h1 className="opacity-60">2d ago</h1>

                       <div className="flex gap-1 h-fit items-center">
                           <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 16 16"><path fill="#6B6B6B" fill-rule="evenodd" d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895" clip-rule="evenodd"></path></svg>
                           </div>
                           <h1 className="opacity-60">14.2k</h1>
                       </div>

                       <div className="flex gap-1 h-fit items-center">
                           <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#6B6B6B" viewBox="0 0 16 16"><path fill="#6B6B6B" d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"></path></svg>
                           </div>
                           <h1 className="opacity-60">281</h1>
                       </div>
                     </div>

                     {/* right div */}

                     <div className="w-1/2 text-[1.8rem] opacity-60 gap-4 h-full flex justify-end ">
                       <div>
                         <CiCircleMinus/>
                       </div>
                       <div>
                         <CiBookmarkPlus/>
                       </div>
                       <div>
                         <BsThreeDots/>
                       </div>


                     </div>
                   </div>

                 </div>
                 <div className="w-[27%] flex items-center justify-end h-full">
                   <div className="w-[98%] h-[70%] overflow-hidden rounded-md">
                     <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1726925793996-8e478b4f99ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="not showing" />
                   </div>
                 </div>  

               </div>
</div>
  )
}

export default SingleBlog