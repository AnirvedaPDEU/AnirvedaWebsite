import React, {useState} from "react"

// Context
import {useContext} from "react"
import {SituationContext} from "../../Context/SituationProvider"

// Importing the data
import situations from "../../data/mockrbi/situations"

export default function AllSituations() {
  const {
    state: {clickedSituation, completedSituationsTillNow},
    markSituationComplete,
  } = useContext(SituationContext)

  // Function to handle the situation click
  const handleSituationClick = (situation) => {
    markSituationComplete(situation)
  }

  console.log(clickedSituation)

  return (
    <div className="mt-4 flex flex-wrap">
      {situations.map((situation) => {
        return (
          <div key={situation.id} className="w-full p-2 md:w-1/2 lg:w-1/3">
            <div
              className={`flex h-full items-center rounded-lg border border-secondary-15 p-4 
                  ${
                    completedSituationsTillNow.some(
                      (s) => s.id === situation.id
                    )
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }
                  `}
              onClick={() =>
                // If situation is already completed, then don't do anything
                completedSituationsTillNow.some((s) => s.id === situation.id)
                  ? null
                  : handleSituationClick(situation)
              }
            >
              {/* Checkbox will come here if needed */}
              <div className="flex-grow">
                <h2 className="font-medium text-secondary">
                  {completedSituationsTillNow.some(
                    (s) => s.id === situation.id
                  ) ? (
                    <strike className="opacity-70">
                      {situation.situation}
                    </strike>
                  ) : (
                    `${situation.situation}`
                  )}
                </h2>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
