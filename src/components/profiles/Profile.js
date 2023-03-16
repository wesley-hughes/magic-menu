import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    return fetch(`http://localhost:8088/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(() => {navigate("/menu")});
      
  };

  return (
    <><h2 className="">User Preferences</h2>
      <form className="flex flex-col p-5">
        
        <fieldset>
          <div className="my-2">
            <label htmlFor="email">Email:</label>
            <textarea
              type="text"
              value={user.email}
              onChange={(evt) => {
                const copy = { ...user };
                copy.email = evt.target.value;
                assignUser(copy);
              }}
            >
              {user.email}
            </textarea>
          </div>
        </fieldset>
        <fieldset>
          <div className="my-2">
            <label htmlFor="vegetarian">Vegetarian</label>
            <br></br>
            <input
              type="radio"
              id="vegetarian"
              value={true}
              onChange={(evt) => {
                const copy = { ...user };
                copy.vegetarian = evt.target.value;
                assignUser(copy);
              }}
            ></input>
            <label htmlFor="vegetarian">Yes</label>

            <div>
              <input
                type="radio"
                id="notVegetarian"
                value={false}
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.vegetarian = evt.target.value;
                  assignUser(copy);
                }}
              ></input>
              <label htmlFor="notVegetarian">No</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="my-2">
            <label htmlFor="vegan">Vegan</label>
            <br></br>
            <input
              type="radio"
              id="vegan"
              value={true}
              onChange={(evt) => {
                const copy = { ...user };
                copy.vegan = evt.target.value;
                assignUser(copy);
              }}
            ></input>
            <label htmlFor="vegan">Yes</label>

            <div>
              <input
                type="radio"
                id="notVegan"
                value={false}
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.vegan = evt.target.value;
                  assignUser(copy);
                }}
              ></input>
              <label htmlFor="notVegan">No</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="my-2">
            <label htmlFor="glutenFree">Gluten Free</label>
            <br></br>
            <input
              type="radio"
              id="glutenFree"
              value={true}
              onChange={(evt) => {
                const copy = { ...user };
                copy.glutenFree = evt.target.value;
                assignUser(copy);
              }}
            ></input>
            <label htmlFor="glutenFree">Yes</label>

            <div>
              <input
                type="radio"
                id="notGlutenFree"
                value={false}
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.glutenFree = evt.target.value;
                  assignUser(copy);
                }}
              ></input>
              <label htmlFor="notGlutenFree">No</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="my-2">
            <label htmlFor="dairyFree">Dairy Free</label>
            <br></br>
            <input
              type="radio"
              id="dairyFree"
              value={true}
              onChange={(evt) => {
                const copy = { ...user };
                copy.dairyFree = evt.target.value;
                assignUser(copy);
              }}
            ></input>
            <label htmlFor="dairyFree">Yes</label>

            <div>
              <input
                type="radio"
                id="notDairyFree"
                value={false}
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.dairyFree = evt.target.value;
                  assignUser(copy);
                }}
              ></input>
              <label htmlFor="notDairyFree">No</label>
            </div>
          </div>
        </fieldset>
        <button
        
          onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
          className="glow-on-hover"
        >
          Save Edits
        </button>
      </form>
    </>
  );
};
