import React from 'react'
import AllBlogscont from '../components/AllBlogscont'
import Navbar from '../components/Navbar'
import StickyRight from '../components/StickyRight'

const Home = () => {
  return (
    <div>
               <Navbar/>

               <div className='w-full flex '>
                <AllBlogscont/>
                <StickyRight/>
               </div>
    </div>
  )
}

export default Home