import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, About, Project, Contact } from './components'

import './index.css'

export const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}
