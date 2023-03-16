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
      saturdayRecipe: saturdayRecipe?.id
    };

    postMenu(weekToSendToApi).then(() => {
      navigate("/menu");
    });
    window.alert("Menu Saved!");
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
    <div className="p-2 m-5 border-2 rounded-xl ">
      <form className="">
        <h2 className="text-slate-700 text-2xl font-bold">New Week Menu</h2>
        <fieldset className="border-2 rounded-2xl bg-slate-100 m-2 w-[300px] text-lg text-center">
        <label className="font-semibold text-left mr-2 text-slate-700" htmlFor="date">Date:</label>
          <input className="text-purple-500 bg-slate-100 text-center"
          onChange={(event) => {
            let copy = {...date}
            copy= event.target.value
            setDate(copy)
          }} type="date"></input>
        </fieldset>
        <div className="flex flex-row items-center">



        <fieldset>
          <div className="w-[190px] h-[170px] flex flex flex-col justify-evenly border-1 rounded-2xl mx-2 p-2 bg-slate-200">
            <label className="text-purple-600 font-semibold" htmlFor="sunday">Sunday:</label>

            <div className="my-1" value={sundayRecipe}>
              <Link onClick={() => setSunModal(true)}>
                {sundayRecipe?.title}
              </Link>
            </div>

            <button
              onClick={(event) => handleSundayClick(event, recipes)}
              className="glow-on-hover"
            >
              Reset
            </button>
          </div>
        </fieldset>




        <fieldset>
          <div className="w-[190px] h-[170px] flex flex-col justify-evenly border-1 rounded-2xl mx-2 p-2 bg-slate-200">
            <label className="text-purple-600 font-semibold" htmlFor="monday">Monday:</label>
            <div className="my-1" value={mondayRecipe}>
              <Link onClick={() => setMonModal(true)}>
                {mondayRecipe?.title}
              </Link>
            </div>
            <button
              onClick={(event) => handleMondayClick(event, recipes)}
              className="glow-on-hover"
            >
              Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="w-[190px] h-[170px] flex flex-col justify-evenly border-1 rounded-2xl mx-2 p-2 bg-slate-200">
            <label className="text-purple-600 font-semibold" htmlFor="tuesday">Tuesday:</label>
            <div className="my-1" value={tuesdayRecipe}>
              <Link onClick={() => setTueModal(true)}>
                {tuesdayRecipe?.title}
              </Link>
            </div>
            <button
              onClick={(event) => handleTuesdayClick(event, recipes)}
              className="glow-on-hover"
            >
              Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="w-[190px] h-[170px] flex flex-col justify-evenly border-1 rounded-2xl mx-2 p-2 bg-slate-200">
            <label className="text-purple-600 font-semibold" htmlFor="wednesday">Wednesday:</label>
            <div className="my-1" value={wednesdayRecipe}>
              <Link onClick={() => setWedModal(true)}>
                {wednesdayRecipe?.title}
              </Link>
            </div>
            <button
              onClick={(event) => handleWednesdayClick(event, recipes)}
              className="glow-on-hover"
            >
              Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="w-[190px] h-[170px] flex flex-col justify-evenly border-1 rounded-2xl mx-2 p-2 bg-slate-200">
            <label className="text-purple-600 font-semibold" htmlFor="thursday">Thursday:</label>
            <div className="my-1" value={thursdayRecipe}>
              <Link onClick={() => setThuModal(true)}>
                {thursdayRecipe?.title}
              </Link>
            </div>
            <button
              onClick={(event) => handleThursdayClick(event, recipes)}
              className="glow-on-hover"
            >
              Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="w-[190px] h-[170px] flex flex-col justify-evenly border-1 rounded-2xl mx-2 p-2 bg-slate-200">
            <label className="text-purple-600 font-semibold" htmlFor="friday">Friday:</label>
            <div className="my-1" value={fridayRecipe}>
              <Link onClick={() => setFriModal(true)}>
                {fridayRecipe?.title}
              </Link>
            </div>
            <button
              onClick={(event) => handleFridayClick(event, recipes)}
              className="glow-on-hover"
            >
              Reset
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="w-[190px] h-[170px] flex flex-col justify-evenly border-1 rounded-2xl mx-2 p-2 bg-slate-200">
            <label className="text-purple-600 font-semibold" htmlFor="saturday">Saturday:</label>
            <div className="my-1" value={saturdayRecipe}>
              <Link onClick={() => setSatModal(true)}>
                {saturdayRecipe?.title}
              </Link>
            </div>
            <button
              onClick={(event) => handleSaturdayClick(event, recipes)}
              className="glow-on-hover"
            >
              Reset
            </button>
          </div>
        </fieldset>
        </div>

        <button className="glow-on-hover mx-1 my-2" onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>
          Save Menu
        </button>
        <button className="glow-on-hover mx-1 my-2" onClick={() => navigate("/menu")}>
          Refresh
        </button>
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
      
    </>
  );
};
