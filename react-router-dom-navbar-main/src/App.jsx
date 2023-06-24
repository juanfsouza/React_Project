import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
