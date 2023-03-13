import React from "react"
import {Link} from "react-router-dom"

import Navbar from "../../components/MockRBI/Navbar"

export default function Home() {
  return (
    <div className="h-screen bg-black px-10 py-8">
      <Navbar />

      <div className={`mt-56 flex flex-col items-center md:mt-44`}>
        <h1 className="font-Bebas text-7xl uppercase text-primary xs:text-8xl lg:text-9xl">
          mock rbi
        </h1>
        <Link to="/mockrbi/play">
          <button className="mt-4 rounded-md border-[2px] border-secondary px-6 pt-1 pb-2 text-xl text-secondary transition-colors duration-300 hover:bg-secondary hover:text-white">
            Play
          </button>
        </Link>
      </div>
    </div>
  )
}
