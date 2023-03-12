import React, {useState} from "react"
import {createContext} from "react"

export const SituationContext = createContext()

export const SituationProvider = ({children}) => {
  const [clickedSituation, setClickedSituation] = useState(null)
  const [completedSituationsTillNow, setCompletedSituationsTillNow] = useState(
    []
  )

  const markSituationComplete = (situation) => {
    setClickedSituation(situation)
    // If the situation is already completed, then don't add it to the array
    if (completedSituationsTillNow.some((s) => s.id === situation.id)) {
      return
    } else {
      setCompletedSituationsTillNow([...completedSituationsTillNow, situation])
    }
    }

   const handleNormalClick = (situation) => {
        setClickedSituation(situation)
    }

    console.log(clickedSituation);

  return (
    <SituationContext.Provider value={{state: {clickedSituation, completedSituationsTillNow}, markSituationComplete, handleNormalClick }}>{children}</SituationContext.Provider>
  )
}
