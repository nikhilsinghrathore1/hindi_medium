import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import MakeBlog from './Pages/MakeBlog'
import DetailedBlog from './Pages/DetailedBlog'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/makeblog' element={<MakeBlog/>}/>
          <Route path='/readblog' element={<DetailedBlog/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>   
  )
}

export default App
