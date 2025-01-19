import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import CountryDetail from './Components/CountryDetail.tsx';
import Home from './Home.tsx'
import '../src/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Country Detail Page */}
        <Route path="/country/:id" element={<CountryDetail />} />
      </Routes>
    </Router>
  </StrictMode>,
)
