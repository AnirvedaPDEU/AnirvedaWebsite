import React from "react"
import Navbar from "../components/Navbar"
import ProfileCardHead from "../components/VideoEditing/ProfileCardHead"
import CommitteeMain from "../components/VideoEditing/CommitteeMain"
const VideoEditing = () => {
  return (
    <div className="bg-black font-Lato">
      <div className="flex h-[80vh] flex-col bg-black">
        <Navbar />
        <CommitteeMain />
        <h1 className=" bg-black pt-28 text-center font-Bebas text-[5rem] text-8xl font-light uppercase text-primary">
          Head
        </h1>
        <ProfileCardHead />
      </div>
    </div>
  )
}

export default VideoEditing
