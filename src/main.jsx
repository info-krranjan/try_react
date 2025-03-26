import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Scrolll from './Scrolll.jsx'
import NavBar from './header/NavBar.jsx'
// import NavBar from './header/NavBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
