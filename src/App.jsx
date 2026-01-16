import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import styles from './index.module.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App