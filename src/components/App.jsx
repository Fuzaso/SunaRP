import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import AccueilPage from "../pages/AccueilPage/AccueilPage"
import VillagesPage from "../pages/VillagesPage/VillagesPage"

/* Suna */

import SunaPage from "../pages/SunaPage/SunaPage"
import UraharaPage from "../pages/UraharaPage/UraharaPage"

import Navbar from "../components/Navbar/Navbar"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="/villagespage" element={<VillagesPage />} />
          <Route path="/sunapage" element={<SunaPage />} />
          <Route path="/uraharapage" element={<UraharaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
