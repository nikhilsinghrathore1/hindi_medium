import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <App />

)
