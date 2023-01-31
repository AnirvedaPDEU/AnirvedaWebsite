import React from "react"

export default function GridImage(props) {
  return (
    <img
      //   src={`./images/grid/${props.vehicle}/${props.src}.jpeg`}
      src={`./images/grid/${props.src}.webp`}
      className="h-[170px] w-[350px] md:w-[439px] sm:h-[225px] sm:w-[350px] md:h-[268px]"
      alt={props.alt}
    />
  )
}
// for large screen: h-[268px] w-[439px]