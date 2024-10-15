import AllBlogscont from '../components/AllBlogscont'
import Navbar from '../components/Navbar'
import StickyRight from '../components/StickyRight'

const Home = () => {
  return (
    <div>
               <Navbar/>

               <div className='w-full flex h-[100vh] overflow-hidden '>
                <AllBlogscont/>
                <StickyRight/>
               </div>
    </div>
  )
}

export default Home