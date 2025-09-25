import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CoachingDonna from './pages/CoachingDonna'
import About from './pages/About'
import Navigation from './components/Navigation'
import Layout from './components/Layout'
import PreviewOrder from './pages/PreviewOrder'

function App() {
  return (
    <Router>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching-donna-online" element={<CoachingDonna />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout/preview" element={<PreviewOrder />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
