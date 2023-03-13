import React from "react"

import Navbar from "../../components/MockRBI/Navbar"
import AllSituations from "../../components/MockRBI/AllSituations"

// This page will have access to only Anirveda
export default function Situations() {
  return (
    <div className={`h-screen bg-black px-10 py-8 font-Lato`}>
      <Navbar />

      <div className="mt-8 px-5">
        <h1 className="text-center text-4xl font-semibold text-primary">
          Situations
        </h1>
        <AllSituations />
      </div>
    </div>
  )
}
