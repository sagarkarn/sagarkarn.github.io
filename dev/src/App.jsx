import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/layouts/NabBar'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/landing" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
