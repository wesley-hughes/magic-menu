import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SaveProfileModal } from "../modals/SaveProfileModal";

export const Profile = () => {
  const navigate = useNavigate();
  const [saveModal, setSaveModal] = useState(false);
  const [user, assignUser] = useState({
    id: 0,
    email: "",
  });
  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);
  const userId = magicUserObject.id;

  useEffect(() => {
    fetch(`https://mm-app-ej7qy.ondigitalocean.app/users?id=${userId}`)
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

  const checkboxVegetarian = (user) => {
    if (user.vegetarian === true) {
      return (
        <input
          type="checkbox"
          className="toggle toggle-lg mx-auto toggle-primary"
          value={true}
          checked
          onChange={(event) => {
            handleVegetarianCheck(event);
          }}
        ></input>
      );
    } else {
      return (
        <input
          type="checkbox"
          className="toggle toggle-lg mx-auto"
          value={false}
          onChange={(event) => {
            handleVegetarianCheck(event);
          }}
        ></input>
      );
    }
  };
  const handleVeganCheck = (event) => {
    let copy = { ...user };
    copy.vegan = event.target.checked;
    assignUser(copy);
  };

  const checkboxVegan = (user) => {
    if (user.vegan === true) {
      return (
        <input
          type="checkbox"
          className="toggle toggle-lg mx-auto toggle-primary"
          value={true}
          checked
          onChange={(event) => {
            handleVeganCheck(event);
          }}
        ></input>
      );
    } else {
      return (
        <input
          type="checkbox"
          className="toggle toggle-lg mx-auto"
          value={false}
          onChange={(event) => {
            handleVeganCheck(event);
          }}
        ></input>
      );
    }
  };
  const handleGlutenFreeCheck = (event) => {
    let copy = { ...user };
    copy.glutenFree = event.target.checked;
    assignUser(copy);
  };

  const checkboxGlutenFree = (user) => {
    if (user.glutenFree === true) {
      return (
        <input
          type="checkbox"
          className="toggle toggle-lg mx-auto toggle-primary"
          value={true}
          checked
          onChange={(event) => {
            handleGlutenFreeCheck(event);
          }}
        ></input>
      );
    } else {
      return (
        <input
          type="checkbox"
          className="toggle toggle-lg mx-auto"
          value={false}
          onChange={(event) => {
            handleGlutenFreeCheck(event);
          }}
        ></input>
      );
    }
  };
  const handleDairyFreeCheck = (event) => {
    let copy = { ...user };
    copy.dairyFree = event.target.checked;
    assignUser(copy);
  };

  const checkboxDairyFree = (user) => {
    if (user.dairyFree === true) {
      return (
        <input
          className="toggle toggle-lg mx-auto toggle-primary"
          type="checkbox"
          value={true}
          checked
          onChange={(event) => {
            handleDairyFreeCheck(event);
          }}
        ></input>
      );
    } else {
      return (
        <input
          type="checkbox"
          className="toggle toggle-lg mx-auto"
          value={false}
          onChange={(event) => {
            handleDairyFreeCheck(event);
          }}
        ></input>
      );
    }
  };

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    fetch(`https://mm-app-ej7qy.ondigitalocean.app/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(() => {
        fetch(`https://mm-app-ej7qy.ondigitalocean.app/users?id=${userId}`)
          .then((response) => response.json())
          .then((data) => {
            const userObject = data[0];
            assignUser(userObject);
          });
      });setSaveModal(true)
  };

  return (
    <>
      <form className="md:w-[33%] mx-auto mt-[60px] text-3xl h-screen">
        <div className="text-purple-900 text-4xl font-bold text-center mt-[60px] leading-tight tracking-tight">
          My Dietary Requirements
        </div>
        <div className="flex flex-col h-[500px] bg-opacity-60 drop-shadow-md border rounded-2xl border-purple-400 shadow-md justify-around p-5 mt-10 bg-white">
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={user.email}
              onChange={(evt) => {
                const copy = { ...user };
                copy.email = evt.target.value;
                assignUser(copy);
              }}
              className="input input-bordered input-primary w-full text-xl"
            ></input>
          </fieldset>
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label className="" htmlFor="vegetarian">
              Vegetarian
            </label>
            {user ? checkboxVegetarian(user) : ""}
          </fieldset>
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label className="" htmlFor="Vegan">
              Vegan
            </label>
            {user ? checkboxVegan(user) : ""}
          </fieldset>
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label className="" htmlFor="GlutenFree">
              GlutenFree
            </label>
            {user ? checkboxGlutenFree(user) : ""}
          </fieldset>
          <fieldset className="grid grid-cols-2 my-5 items-center">
            <label className="" htmlFor="DairyFree">
              DairyFree
            </label>
            {user ? checkboxDairyFree(user) : ""}
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
      </form>
      <SaveProfileModal onClose={handleSaveClose} visible={saveModal} />
    </>
  );
};
