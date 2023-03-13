import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { postDay } from "../APIManager"

export const DayBuilder = ({ dinnerArray, resetSunday, resetMonday, resetTuesday, resetWednesday, resetThursday, resetFriday, resetSaturday, sundayRecipe, mondayRecipe, tuesdayRecipe, wednesdayRecipe, thursdayRecipe, fridayRecipe, saturdayRecipe }) => {

  const navigate = useNavigate()

  const localMagicUser = localStorage.getItem("magic_user")
  const magicUserObject = JSON.parse(localMagicUser)

  const handleSaveButtonClick = (event) => {
    event.preventDefault()

    const weekToSendToApi = {
      userId: magicUserObject.id,
      sundayRecipe: sundayRecipe?.id,
      mondayRecipe: mondayRecipe?.id,
      tuesdayRecipe: tuesdayRecipe?.id,
      wednesdayRecipe: wednesdayRecipe?.id,
      thursdayRecipe: thursdayRecipe?.id,
      fridayRecipe: fridayRecipe?.id,
      saturdayRecipe: saturdayRecipe?.id
    }

    postDay(weekToSendToApi).then(() => {
      navigate("/menu")
    })
    window.alert("Menu Saved!")
  }
  
  const handleSundayClick = (event, dinnerArray) => {
    event.preventDefault()
    resetSunday(dinnerArray)
  }
  const handleMondayClick = (event, dinnerArray) => {
    event.preventDefault()
    resetMonday(dinnerArray)
  }
  const handleTuesdayClick = (event, dinnerArray) => {
    event.preventDefault()
    resetTuesday(dinnerArray)
  }
  const handleWednesdayClick = (event, dinnerArray) => {
    event.preventDefault()
    resetWednesday(dinnerArray)
  }
  const handleThursdayClick = (event, dinnerArray) => {
    event.preventDefault()
    resetThursday(dinnerArray)
  }
  const handleFridayClick = (event, dinnerArray) => {
    event.preventDefault()
    resetFriday(dinnerArray)
  }
  const handleSaturdayClick = (event, dinnerArray) => {
    event.preventDefault()
    resetSaturday(dinnerArray)
  }



  return (
    <>
      <form className="">
        <h2 className="">New Week Menu</h2>
        <fieldset>
        </fieldset>
        <fieldset>
          <div className="">
            <label htmlFor="sunday">Sunday:</label>
            <div value={sundayRecipe}>{sundayRecipe?.title}</div>
            <button onClick={(event) => handleSundayClick(event, dinnerArray)} className="">
          Reset
        </button>
          </div>
        </fieldset>

        <fieldset>
          <div className="">
            <label htmlFor="monday">Monday:</label>
            <div value={mondayRecipe}>{mondayRecipe?.title}</div>
            <button onClick={(event) => handleMondayClick(event, dinnerArray)} className="">
              Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="">
            <label htmlFor="tuesday">Tuesday:</label>
            <div value={tuesdayRecipe}>{tuesdayRecipe?.title}</div>
            <button onClick={(event) => handleTuesdayClick(event, dinnerArray)} className="">
              Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="">
            <label htmlFor="wednesday">Wednesday:</label>
            <div value={wednesdayRecipe}>{wednesdayRecipe?.title}</div>
            <button onClick={(event) => handleWednesdayClick(event, dinnerArray)} className="">
            Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="">
            <label htmlFor="thursday">Thursday:</label>
            <div value={thursdayRecipe}>{thursdayRecipe?.title}</div>
            <button onClick={(event) => handleThursdayClick(event, dinnerArray)} className="">
            Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="">
            <label htmlFor="friday">Friday:</label>
            <div value={fridayRecipe}>{fridayRecipe?.title}</div>
            <button onClick={(event) => handleFridayClick(event, dinnerArray)} className="">
            Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="">
            <label htmlFor="saturday">Saturday:</label>
            <div value={saturdayRecipe}>{saturdayRecipe?.title}</div>
            <button onClick={(event) => handleSaturdayClick(event, dinnerArray)} className="">
            Reset
            </button>
          </div>
        </fieldset>

        <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>
          Save Menu
        </button>
        <button onClick={() => navigate("/menu")} className="">
          Refresh
        </button>
      </form>
    </>
  )
}
