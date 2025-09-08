import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CoachingDonna from './pages/CoachingDonna'
import About from './pages/About'
import './App.css'
import Navigation from './components/Navigation'

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaching-donna-online" element={<CoachingDonna />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
