import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CoachingDonna from './pages/CoachingDonna'
import About from './pages/About'
import Navigation from './components/Navigation'
import Layout from './components/Layout'
import PreviewOrder from './pages/PreviewOrder'
import TermsPage from './pages/Terms'
import PrivacyPolicyPage from './pages/PrivacyPolicy'

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
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
