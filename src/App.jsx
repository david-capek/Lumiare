import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Waitlist from './Waitlist'
import Login from './Login'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Početna stranica */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Waitlist />
              <Login />
              <Footer />
            </>
          }
        />

        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
