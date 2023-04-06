import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SaveProfileModal } from "../modals/SaveProfileModal";

export const Profile = () => {
  const [saveModal, setSaveModal] = useState(false);
  const [user, assignUser] = useState({
    id: 0,
    email: ""
  });
  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);
  const userId = magicUserObject.id;

  useEffect(() => {
    fetch(`http://localhost:8088/users?id=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const userObject = data[0];
        assignUser(userObject);
      });
  }, [userId]);

  const handleSaveClose = () => setSaveModal(false);
  
  const handleVegetarianCheck = (event) => {
    let copy = { ...user };
    copy.vegetarian = event.target.checked;
    assignUser(copy);
  };

  const handleVeganCheck = (event) => {
    let copy = { ...user };
    copy.vegan = event.target.checked;
    assignUser(copy);
  };

  const handleGlutenFreeCheck = (event) => {
    let copy = { ...user };
    copy.glutenFree = event.target.checked;
    assignUser(copy);
  };

  const handleDairyFreeCheck = (event) => {
    let copy = { ...user };
    copy.dairyFree = event.target.checked;
    assignUser(copy);
  };

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8088/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(() => {
        fetch(`http://localhost:8088/users?id=${userId}`)
          .then((response) => response.json())
          .then((data) => {
            const userObject = data[0];
            assignUser(userObject);
          });
      });setSaveModal(true)
  };

  return (
    <>
    {user.email !== "" ? 
      <form className="md:w-[33%] mx-auto lg:mt-[60px] sm:mt-[95px] text-3xl h-screen">
        <div className="text-purple-900 text-4xl font-bold text-center mt-[60px] leading-tight tracking-tight">
          My Dietary Requirements
        </div>
        <div className="flex flex-col h-[500px] bg-opacity-60 drop-shadow-md border rounded-2xl border-purple-400 shadow-md justify-around p-5 mt-10 bg-white">
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={user?.email}
              onChange={(evt) => {
                const copy = { ...user };
                copy.email = evt.target.value;
                assignUser(copy);
              }}
              className="input input-bordered input-primary w-full text-xl"
            ></input>
          </fieldset>
         
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label className="" htmlFor="Vegetarian">
              Vegetarian
            </label>
            <input
          type="checkbox"
          className="toggle toggle-lg mx-auto toggle-primary"
          
          checked={user?.vegetarian}
          onChange={(event) => {
            handleVegetarianCheck(event);
          }}
        ></input>
          </fieldset>
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label className="" htmlFor="Vegan">
              Vegan
            </label>
            <input
          type="checkbox"
          className="toggle toggle-lg mx-auto toggle-primary"
          
          checked={user?.vegan}
          onChange={(event) => {
            handleVeganCheck(event);
          }}
        ></input>
          </fieldset>
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label className="" htmlFor="DairyFree">
              DairyFree
            </label>
            <input
          type="checkbox"
          className="toggle toggle-lg mx-auto toggle-primary"
          
          checked={user?.dairyFree}
          onChange={(event) => {
            handleDairyFreeCheck(event);
          }}
        ></input>
          </fieldset>
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label className="" htmlFor="GlutenFree">
              GlutenFree
            </label>
            <input
          type="checkbox"
          className="toggle toggle-lg mx-auto toggle-primary"
          
          checked={user?.glutenFree}
          onChange={(event) => {
            handleGlutenFreeCheck(event);
          }}
        ></input>
          </fieldset>

          <Link
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="ml-auto"
          >
            <img
              src="./images/save.png"
              className="h-[60px] hover:animate-spin"
              alt="save disk"
            ></img>
          </Link>
        </div>
      </form>: ""}
      <SaveProfileModal onClose={handleSaveClose} visible={saveModal} /> 
    </>
  );
};
