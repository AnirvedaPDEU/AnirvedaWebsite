import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Scroll to top
import ScrollToTop from "./ScrollToTop"

// Mock RBI
import Home from "./Pages/MockRBI/Home"
import Play from "./Pages/MockRBI/Play"
import Situations from "./Pages/MockRBI/Situations"
import Login from "./Pages/Admin/Login"
import {SituationProvider} from "./Context/SituationProvider"

export default function App() {
  return (
    <>
      <SituationProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mockrbi/play" element={<Play />} />
            <Route path="/mockrbi/admin/situations" element={<Situations />} />
            <Route path="/admin/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </SituationProvider>
    </>
  )
}
