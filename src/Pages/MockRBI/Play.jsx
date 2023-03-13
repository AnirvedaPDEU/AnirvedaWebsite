import React from "react"

import Navbar from "../../components/MockRBI/Navbar"
import PlayMain from "../../components/MockRBI/PlayMain"

export default function Play() {
  return (
    <div className="h-screen bg-black px-10 py-8">
      <Navbar />
      <PlayMain />
    </div>
  )
}
