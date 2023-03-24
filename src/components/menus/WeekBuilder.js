import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postMenu } from "../APIManager";
import { FridayModal } from "../modals/FridayModal";
import { MondayModal } from "../modals/MondayModal";
import { SaturdayModal } from "../modals/SaturdayModal";
import { SundayModal } from "../modals/SundayModal";
import { ThursdayModal } from "../modals/ThursdayModal";
import { TuesdayModal } from "../modals/TuesdayModal";
import { WednesdayModal } from "../modals/WednesdayModal";
import { SaveModal } from "../modals/SaveModal";

export const WeekBuilder = ({
  recipes,
  resetSunday,
  resetMonday,
  resetTuesday,
  resetWednesday,
  resetThursday,
  resetFriday,
  resetSaturday,
  sundayRecipe,
  mondayRecipe,
  tuesdayRecipe,
  wednesdayRecipe,
  thursdayRecipe,
  fridayRecipe,
  saturdayRecipe,
}) => {
  const [SunModal, setSunModal] = useState(false);
  const [MonModal, setMonModal] = useState(false);
  const [TueModal, setTueModal] = useState(false);
  const [WedModal, setWedModal] = useState(false);
  const [ThuModal, setThuModal] = useState(false);
  const [FriModal, setFriModal] = useState(false);
  const [SatModal, setSatModal] = useState(false);
  const [saveModal, setSaveModal] = useState(false)
  const handleSaveClose = () => setSaveModal(false);
  const [date, setDate] = useState({});
  const navigate = useNavigate();
  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);


  const handleSaveButtonClick = (event) => {
    event.preventDefault();
    const weekToSendToApi = {
      userId: magicUserObject.id,
      date: date,
      sundayRecipe: sundayRecipe?.id,
      mondayRecipe: mondayRecipe?.id,
      tuesdayRecipe: tuesdayRecipe?.id,
      wednesdayRecipe: wednesdayRecipe?.id,
      thursdayRecipe: thursdayRecipe?.id,
      fridayRecipe: fridayRecipe?.id,
      saturdayRecipe: saturdayRecipe?.id,
    };

    postMenu(weekToSendToApi).then(() => {
      navigate("/menu");
    });
    setSaveModal(true);
  };

  const handleSundayClick = (event, recipes) => {
    event.preventDefault();
    resetSunday(recipes);
  };
  const handleMondayClick = (event, recipes) => {
    event.preventDefault();
    resetMonday(recipes);
  };
  const handleTuesdayClick = (event, recipes) => {
    event.preventDefault();
    resetTuesday(recipes);
  };
  const handleWednesdayClick = (event, recipes) => {
    event.preventDefault();
    resetWednesday(recipes);
  };
  const handleThursdayClick = (event, recipes) => {
    event.preventDefault();
    resetThursday(recipes);
  };
  const handleFridayClick = (event, recipes) => {
    event.preventDefault();
    resetFriday(recipes);
  };
  const handleSaturdayClick = (event, recipes) => {
    event.preventDefault();
    resetSaturday(recipes);
  };

  const handleSunClose = () => setSunModal(false);
  const handleMonClose = () => setMonModal(false);
  const handleTueClose = () => setTueModal(false);
  const handleWedClose = () => setWedModal(false);
  const handleThuClose = () => setThuModal(false);
  const handleFriClose = () => setFriModal(false);
  const handleSatClose = () => setSatModal(false);

  return (
    <>
      <div className="pl-8 pr-8 pb-8  h-full">
        <form>
          <h2 className="text-purple-900 text-4xl -mt-[87px] font-bold leading-tight tracking-tight">Build your Menu</h2>
          <fieldset className="bg-opacity-80 rounded-2xl bg-blue-100 -ml-1 mt-2 pl-2 w-[230px] text-lg text-left">
            <label
              className=" text-left mr-2 text-purple-800 bg-opacity-80"
              htmlFor="date"
            >
              
            </label>
            <input
              className="text-purple-600 bg-blue-100 text-center"
              onChange={(event) => {
                let copy = { ...date };
                copy = event.target.value;
                let newCopy = new Date(copy)
                newCopy=newCopy.toLocaleString('en-US', {timeZone: "UTC", day: "2-digit", month: "short", year: "numeric", weekday: "short"})
                setDate(newCopy);
              }}
              type="date"
            ></input>
          </fieldset>
          <div className="flex flex-wrap mt-8 justify-center mx-auto w-[80%]">
            <fieldset>
              <div className="w-[230px] h-[200px] m-2 bg-opacity-60 flex flex-col justify-between border-2 border-purple-300 rounded-2xl mx-2 p-2 bg-blue-100">
                <label
                  className="text-purple-800 text-lg font-semibold"
                  htmlFor="sunday"
                >
                  Sunday:
                </label>

                <div className="my-1 text-blue-500 underline" value={sundayRecipe}>
                  <Link onClick={() => setSunModal(true)}>
                    {sundayRecipe?.title}
                  </Link>
                </div>

                <Link
                  onClick={(event) => handleSundayClick(event, recipes)}
                >
                  <img className="h-10 ml-auto mr-2 hover:rotate-[170deg] " src="./images/magic.png" alt="magic swirl"></img>
                </Link>
              </div>
            </fieldset>

            <fieldset>
              <div className="w-[230px] h-[200px] m-2 bg-opacity-60 flex flex-col justify-between border-2 border-purple-300 rounded-2xl mx-2 p-2 bg-blue-100">
                <label
                  className="text-purple-800 text-lg font-semibold"
                  htmlFor="monday"
                >
                  Monday:
                </label>
                <div className="my-1 text-blue-500 underline" value={mondayRecipe}>
                  <Link onClick={() => setMonModal(true)}>
                    {mondayRecipe?.title}
                  </Link>
                </div>
                <Link
                  onClick={(event) => handleMondayClick(event, recipes)}
                >
                  <img className="h-10 ml-auto mr-2 hover:rotate-[170deg] " src="./images/magic.png" alt="magic swirl"></img>
                </Link>
              </div>
            </fieldset>
            <fieldset>
              <div className="w-[230px] h-[200px] m-2 bg-opacity-60 flex flex-col justify-between border-2 border-purple-300 rounded-2xl mx-2 p-2 bg-blue-100">
                <label
                  className="text-purple-800 text-lg font-semibold"
                  htmlFor="tuesday"
                >
                  Tuesday:
                </label>
                <div className="my-1 text-blue-500 underline" value={tuesdayRecipe}>
                  <Link onClick={() => setTueModal(true)}>
                    {tuesdayRecipe?.title}
                  </Link>
                </div>
                <Link
                  onClick={(event) => handleTuesdayClick(event, recipes)}
                >
                  <img className="h-10 ml-auto mr-2 hover:rotate-[170deg] " src="./images/magic.png" alt="magic swirl"></img>
                </Link>
              </div>
            </fieldset>
            <fieldset>
              <div className="w-[230px] h-[200px] m-2 bg-opacity-60 flex flex-col justify-between border-2 border-purple-300 rounded-2xl mx-2 p-2 bg-blue-100">
                <label
                  className="text-purple-800 text-lg font-semibold"
                  htmlFor="wednesday"
                >
                  Wednesday:
                </label>
                <div className="my-1 text-blue-500 underline" value={wednesdayRecipe}>
                  <Link onClick={() => setWedModal(true)}>
                    {wednesdayRecipe?.title}
                  </Link>
                </div>
                <Link
                  onClick={(event) => handleWednesdayClick(event, recipes)}
                >
                  <img className="h-10 ml-auto mr-2 hover:rotate-[170deg] " src="./images/magic.png" alt="magic swirl"></img>
                </Link>
              </div>
            </fieldset>
            <fieldset>
              <div className="w-[230px] h-[200px] m-2 bg-opacity-60 flex flex-col justify-between border-2 border-purple-300 rounded-2xl mx-2 p-2 bg-blue-100">
                <label
                  className="text-purple-800 text-lg font-semibold"
                  htmlFor="thursday"
                >
                  Thursday:
                </label>
                <div className="my-1 text-blue-500 underline" value={thursdayRecipe}>
                  <Link onClick={() => setThuModal(true)}>
                    {thursdayRecipe?.title}
                  </Link>
                </div>
                <Link
                  onClick={(event) => handleThursdayClick(event, recipes)}
                >
                  <img className="h-10 ml-auto mr-2 hover:rotate-[170deg] " src="./images/magic.png" alt="magic swirl"></img>
                </Link>
              </div>
            </fieldset>
            <fieldset>
              <div className="w-[230px] h-[200px] m-2 bg-opacity-60 flex flex-col justify-between border-2 border-purple-300 rounded-2xl mx-2 p-2 bg-blue-100">
                <label
                  className="text-purple-800 text-lg font-semibold"
                  htmlFor="friday"
                >
                  Friday:
                </label>
                <div className="my-1 text-blue-500 underline" value={fridayRecipe}>
                  <Link onClick={() => setFriModal(true)}>
                    {fridayRecipe?.title}
                  </Link>
                </div>
                <Link
                  onClick={(event) => handleFridayClick(event, recipes)}
                >
                  <img className="h-10 ml-auto mr-2 hover:rotate-[170deg] " src="./images/magic.png" alt="magic swirl"></img>
                </Link>
              </div>
            </fieldset>
            <fieldset>
              <div className="w-[230px] h-[200px] m-2 bg-opacity-60 flex flex-col justify-between border-2 border-purple-300 rounded-2xl mx-2 p-2 bg-blue-100">
                <label
                  className="text-purple-800 text-lg font-semibold"
                  htmlFor="saturday"
                >
                  Saturday:
                </label>
                <div className="my-1 text-blue-500 underline" value={saturdayRecipe}>
                  <Link onClick={() => setSatModal(true)}>
                    {saturdayRecipe?.title}
                  </Link>
                </div>
                <Link
                  onClick={(event) => handleSaturdayClick(event, recipes)}
                >
                  <img className="h-10 ml-auto mr-2 hover:rotate-[170deg]" src="./images/magic.png" alt="magic swirl"></img>
                </Link>
              </div>
            </fieldset>
          </div><div>
          <div className=" mt-10  ml-10 mb-2 tooltip tooltip-bottom tooltip-primary" data-tip="randomize">
            <Link
              onClick={(event) => {handleSundayClick(event, recipes)
                handleMondayClick(event, recipes)
                handleTuesdayClick(event, recipes)
                handleWednesdayClick(event, recipes)
                handleThursdayClick(event, recipes)
                handleFridayClick(event, recipes)
                handleSaturdayClick(event, recipes)}}
            >
              <img className="h-[60px] hover:animate-spin" src="./images/reload.png" alt="reload arrow"></img>
            </Link></div>
            {date.length ? (
              <div className=" mt-10  ml-10 mb-2 tooltip tooltip-bottom tooltip-primary" data-tip="save to spellbook">
              <Link
                className=""
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
              >
              <img className="h-[60px] hover:animate-bounce" src="./images/magic-book.png" alt="spellbook"></img>
              </Link></div>
            ) : (
             <div className="text-xs text-purple-500 font-semibold italic"> To save, please first select starting date for menu.</div>
            )}
          </div>
        </form>
      </div>
      <SundayModal
        onClose={handleSunClose}
        sundayRecipe={sundayRecipe}
        visible={SunModal}
      />
      <MondayModal
        onClose={handleMonClose}
        mondayRecipe={mondayRecipe}
        visible={MonModal}
      />
      <TuesdayModal
        onClose={handleTueClose}
        tuesdayRecipe={tuesdayRecipe}
        visible={TueModal}
      />
      <WednesdayModal
        onClose={handleWedClose}
        wednesdayRecipe={wednesdayRecipe}
        visible={WedModal}
      />
      <ThursdayModal
        onClose={handleThuClose}
        thursdayRecipe={thursdayRecipe}
        visible={ThuModal}
      />
      <FridayModal
        onClose={handleFriClose}
        fridayRecipe={fridayRecipe}
        visible={FriModal}
      />
      <SaturdayModal
        onClose={handleSatClose}
        saturdayRecipe={saturdayRecipe}
        visible={SatModal}
      />
      <SaveModal
        onClose={handleSaveClose}
        visible={saveModal}
      />
    </>
  );
};
