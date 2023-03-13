import React from "react"
// import data
import choices from "../../data/mockrbi/choices"

// Using Context
import {useContext} from "react"
import {SituationContext} from "../../Context/SituationProvider"

export default function Play() {
  const {
    state: {clickedSituation},
  } = useContext(SituationContext)

  // ! This should log the clicked situation but it is logging undefined to the console. State is not being persisted between pages.
  console.log(clickedSituation)

  return (
    <div>
      <div className="mt-16 text-center md:mt-4">
        <h1 className="font-Lato text-4xl font-semibold text-primary">
          Situation
        </h1>
        <p className="mt-3 text-xl text-secondary">
          Increasing inflation in the nation, inflation rate 6% <br />
          Repo rate rised to 6.5%
        </p>
      </div>

      <div className="mt-12 md:mt-7">
        <h1 className="text-center font-Lato text-4xl font-semibold text-primary">
          Make your choice
        </h1>

        <div className="mt-7 space-y-7 sm:flex sm:flex-row sm:flex-wrap sm:gap-6 sm:space-y-0 md:mt-4 lg:justify-center lg:gap-6">
          {choices.map((choice) => (
            <div
              key={choice.id}
              className="flex flex-col  items-center rounded-lg bg-tertiary py-4 xs:mx-auto xs:w-4/5 sm:w-3/6  md:w-[40%] lg:mx-0 lg:w-72 xl:w-80"
            >
              <img
                src={choice.img}
                alt={choice.alt}
                className="w-3/4 xs:w-3/5"
              />
              <button className="my-5 rounded-md border-[2px] border-transparent bg-primary px-4 pt-1 pb-2 text-2xl  text-white transition-colors duration-300 hover:cursor-pointer hover:border-[2px] hover:border-primary hover:bg-transparent hover:text-primary  ">
                {choice.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
