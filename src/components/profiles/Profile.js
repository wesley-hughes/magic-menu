import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../APIManager";

export const Profile = () => {
  const navigate = useNavigate();
  const [user, assignUser] = useState({
    id: 0,
    email: "",
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
          id=""
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
          id=""
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
          id=""
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
          id=""
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
          id=""
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
          id=""
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
          type="checkbox"
          id=""
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
          id=""
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
      });
  };

  return (
    <>
      <h2 className="">User Preferences</h2>
      <form className="flex flex-col p-5">
        <fieldset>
          <div className="my-2">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              value={user.email}
              onChange={(evt) => {
                const copy = { ...user };
                copy.email = evt.target.value;
                assignUser(copy);
              }}
            >
            </input>
          </div>
        </fieldset>
        <fieldset>
          <div className="my-2">
            <label htmlFor="vegetarian">Vegetarian</label>
            {user ? checkboxVegetarian(user) : ""}

            <br></br>
          </div>
        </fieldset>
        <fieldset>
          <div className="my-2">
            <label htmlFor="Vegan">Vegan</label>
            {user ? checkboxVegan(user) : ""}

            <br></br>
          </div>
        </fieldset>
        <fieldset>
          <div className="my-2">
            <label htmlFor="GlutenFree">GlutenFree</label>
            {user ? checkboxGlutenFree(user) : ""}

            <br></br>
          </div>
        </fieldset>
        <fieldset>
          <div className="my-2">
            <label htmlFor="DairyFree">DairyFree</label>
            {user ? checkboxDairyFree(user) : ""}

            <br></br>
          </div>
        </fieldset>

        <button
          onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
          className="glow-on-hover w-28"
        >
          Save Edits
        </button>
      </form>
    </>
  );
};
