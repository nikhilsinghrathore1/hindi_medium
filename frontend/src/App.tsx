import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import MakeBlog from './Pages/MakeBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Landing/>}/> */}
          <Route path='/' element={<MakeBlog/>}/>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </BrowserRouter>   
  )
}

export default App
