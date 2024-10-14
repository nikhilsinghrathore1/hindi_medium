import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import MakeBlog from './Pages/MakeBlog'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/makeblog' element={<MakeBlog/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>   
  )
}

export default App
