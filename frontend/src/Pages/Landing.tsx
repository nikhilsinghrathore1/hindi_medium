import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Landing = () => {


               
                             const navigator = useNavigate()
               
               const popup = useRef(null)
               const [username, setusername] = useState("")
               const [password, setpassword] = useState("")


               const handleSubmit =(e)=>{
                              e.preventDefault()
                              
                              signUpFunc()
               }
               const signUpFunc = async()=>{
                              const res = await axios.post("https://medium.sunny3355singh.workers.dev/api/v1/user/signup",{username:username,password:password})
                              console.log(res)
                            localStorage.setItem("medium_token" , res.data)
                              if(res){
                                             navigator("/home")
                              }

               }
// three section top , middel , bottom

  return (
    <div className='w-full h-screen relative bg-[#F7F4ED]'>

               {/* top section not making a component cause it is not to be used again  */}

               <div className='w-full h-[10.2%] border-b-[1px] border-black flex justify-between px-[172px] items-center'>
                              {/* the svg logo  i hate svg but koi galla ni soniyo */}
                              <div> 
                                             <svg xmlns="http://www.w3.org/2000/svg" width="112.2" height="47" fill="none" viewBox="0 0 719 160" ><path fill="#242424" d="m174.104 9.734.215-.047V8.02H130.39L89.6 103.89 48.81 8.021H1.472v1.666l.212.047c8.018 1.81 12.09 4.509 12.09 14.242V137.93c0 9.734-4.087 12.433-12.106 14.243l-.212.047v1.671h32.118v-1.665l-.213-.048c-8.018-1.809-12.089-4.509-12.089-14.242V30.586l52.399 123.305h2.972l53.925-126.743V140.75c-.687 7.688-4.721 10.062-11.982 11.701l-.215.05v1.652h55.948v-1.652l-.215-.05c-7.269-1.639-11.4-4.013-12.087-11.701l-.037-116.774h.037c0-9.733 4.071-12.432 12.087-14.242m25.555 75.488c.915-20.474 8.268-35.252 20.606-35.507 3.806.063 6.998 1.312 9.479 3.714 5.272 5.118 7.751 15.812 7.368 31.793zm-.553 5.77h65.573v-.275c-.186-15.656-4.721-27.834-13.466-36.196-7.559-7.227-18.751-11.203-30.507-11.203h-.263c-6.101 0-13.584 1.48-18.909 4.16-6.061 2.807-11.407 7.003-15.855 12.511-7.161 8.874-11.499 20.866-12.554 34.343q-.05.606-.092 1.212a50 50 0 0 0-.065 1.151 85.807 85.807 0 0 0-.094 5.689c.71 30.524 17.198 54.917 46.483 54.917 25.705 0 40.675-18.791 44.407-44.013l-1.886-.664c-6.557 13.556-18.334 21.771-31.738 20.769-18.297-1.369-32.314-19.922-31.042-42.395m139.722 41.359c-2.151 5.101-6.639 7.908-12.653 7.908s-11.513-4.129-15.418-11.63c-4.197-8.053-6.405-19.436-6.405-32.92 0-28.067 8.729-46.22 22.24-46.22 5.657 0 10.111 2.807 12.236 7.704zm43.499 20.008c-8.019-1.897-12.089-4.722-12.089-14.951V1.309l-48.716 14.353v1.757l.299-.024c6.72-.543 11.278.386 13.925 2.83 2.072 1.915 3.082 4.853 3.082 8.987v18.66c-4.803-3.067-10.516-4.56-17.448-4.56-14.059 0-26.909 5.92-36.176 16.672-9.66 11.205-14.767 26.518-14.767 44.278-.003 31.72 15.612 53.039 38.851 53.039 13.595 0 24.533-7.449 29.54-20.013v16.865h43.711v-1.746zM424.1 19.819c0-9.904-7.468-17.374-17.375-17.374-9.859 0-17.573 7.632-17.573 17.374s7.721 17.374 17.573 17.374c9.907 0 17.375-7.47 17.375-17.374m11.499 132.546c-8.019-1.897-12.089-4.722-12.089-14.951h-.035V43.635l-43.714 12.551v1.705l.263.024c9.458.842 12.047 4.1 12.047 15.152v81.086h43.751v-1.746zm112.013 0c-8.018-1.897-12.089-4.722-12.089-14.951V43.635l-41.621 12.137v1.71l.246.026c7.733.813 9.967 4.257 9.967 15.36v59.279c-2.578 5.102-7.415 8.131-13.274 8.336-9.503 0-14.736-6.419-14.736-18.073V43.638l-43.714 12.55v1.703l.262.024c9.459.84 12.05 4.097 12.05 15.152v50.17a56.3 56.3 0 0 0 .91 10.444l.787 3.423c3.701 13.262 13.398 20.197 28.59 20.197 12.868 0 24.147-7.966 29.115-20.43v17.311h43.714v-1.747zm169.818 1.788v-1.749l-.213-.05c-8.7-2.006-12.089-5.789-12.089-13.49v-63.79c0-19.89-11.171-31.761-29.883-31.761-13.64 0-25.141 7.882-29.569 20.16-3.517-13.01-13.639-20.16-28.606-20.16-13.146 0-23.449 6.938-27.869 18.657V43.643L545.487 55.68v1.715l.263.024c9.345.829 12.047 4.181 12.047 14.95v81.784h40.787v-1.746l-.215-.053c-6.941-1.631-9.181-4.606-9.181-12.239V66.998c1.836-4.289 5.537-9.37 12.853-9.37 9.086 0 13.692 6.296 13.692 18.697v77.828h40.797v-1.746l-.215-.053c-6.94-1.631-9.18-4.606-9.18-12.239V75.066a42 42 0 0 0-.578-7.26c1.947-4.661 5.86-10.177 13.475-10.177 9.214 0 13.691 6.114 13.691 18.696v77.828z"></path></svg>
                              </div>


                              {/* the menu section */}

                              <div className='w-[50%] flex f2 items-center justify-end gap-[25px] '>
                                             <div className='  text-[14px] tracking- opacity-95'>
                                                            <h2>Our story</h2>
                                             </div>
                                             <div className='  text-[14px] tracking- opacity-95'>
                                                            <h2>Membership</h2>
                                             </div>
                                             <div className='  text-[14px] tracking- opacity-95'>
                                                            <h2>Write</h2>
                                             </div>
                                             <div className='  text-[14px] tracking- opacity-95'>
                                                            <h2>Sign in</h2>
                                             </div>
                                             <div className='  text-[14px] opacity-90'>
                                                            <button className='px-[17px] py-[8.2px] rounded-full bg-black text-white'>Get started</button>
                                             </div>

                              </div>
               </div>

               {/* middle section again not making component cause it will not be used anywhere again */}

               <div className='w-full h-[80.7%] flex relative flex-col overflow-hidden  pt-16 justify-center pl-[173px] '>

                              {/* the main heading  */}
                              <div className='text-[7.5rem] tracking-[-0.056em] opacity-90  f1 leading-[6.2rem]'>
                              <h1>Human</h1>
                              <h1>stories & ideas</h1>
                              </div>
                              {/* sub paragraph  */}

                              <p className=' text-[1.435rem] mt-[46px] tracking-tight'>A place to read, write, and deepen your understanding</p>

                              {/* signUp button  */}
                              <div onClick={()=>{
                                             popup.current.style.scale=1
                                             }} className=' py-[7.5px] cursor-pointer w-[196px] text-[1.25rem] mt-12 f2 bg-black rounded-full text-white flex items-center justify-center'>
                                             <h1>Start reading</h1>
                              </div>


                              {/* absolute image section */}

                              <div className='absolute right-0 top-5  h-full  '>
                                             <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="not showing " />
                              </div>
               </div>


               {/* bottom section not making it a component also not explaining it again  */}

               <div className='w-full f2 text-[13px] opacity-70 items-center pr-32 capitalize justify-center h-[9.1%] border-t-[1px] border-black flex gap-4'>
                              <h3>help</h3>
                              <h3>status</h3>
                              <h3>about</h3>
                              <h3>careers</h3>
                              <h3>press</h3>
                              <h3>blog</h3>
                              <h3>privacy</h3>
                              <h3>terms</h3>
                              <h3>text to speech</h3>
                              <h3>teams</h3>
               </div>


               {/* the pop up window for the signUp screen  */}

               <div ref={popup} className='absolute w-full h-full  top-0 bg-white/95 flex items-center justify-center origin-center scale-  transition-all duration-500 '>

                              {/* internal div */}
                              <div  className='w-[43%] h-[80%] bg-white shadow-xl shadow-black/30 rounded-lg '>
                                             {/* top section of the popup window */}
                                             
                                             <div className='flex items-center opacity-60 pr-5 pt-4 text-[1.2rem] justify-end'>
                                                            <div onClick={()=>popup.current.style.scale = 0 }  className='w-fit h-fit cursor-pointer'>
                                                            <RxCross2/>
                                                            </div>
                                             </div>

                                             {/* main text section */}

                                             <div className='w-full flex items-center justify-center'>
                                                            <h1 className='text-[1.81rem] mt-16 f1 tracking-tighter'>Join Medium.</h1>
                                             </div>

                                             {/* main input section  */}

                                             <div className='w-full  '>
                                             <h1 className='f2 text-[1.3rem] tracking-tighter ml-20 opacity-90 mt-12'>Set Up Your Identity!</h1>
                                             <div className='w-full '>
                                                            <form className='w-full flex items-center  flex-col gap-5 mt-10'>

                                                            <input  onChange={e=>setusername(e.target.value)} className='w-[50%] px-5 border-black/70 h-10 border rounded outline-none' type="text" placeholder='username' />
                                                            <input onChange={e=>setpassword(e.target.value)} className='w-[50%] px-5  border-black/70 h-10 border rounded outline-none' type="text" placeholder='password' />
                                                            <input  onClick={handleSubmit} className='w-[50%] px-5 border-black/70 h-10 border rounded outline-none bg-black text-white' type="submit"  />
                                                            <div className='w-[50%] px-5 border-black/70 h-10 border rounded outline-none bg-black text-white flex items-center justify-center'> Sign-In with Google</div>
                                                            
                                                            </form>
                                             </div>
                                             </div>

                              </div>
               </div>

    </div>
  )
}

export default Landing