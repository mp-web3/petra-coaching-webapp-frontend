import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CoachingDonna from './pages/CoachingDonna'
import About from './pages/About'
import Navigation from './components/Navigation'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching-donna-online" element={<CoachingDonna />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
