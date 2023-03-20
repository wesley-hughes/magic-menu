import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserFavorites } from "../APIManager";
import { FavoriteModal } from "../modals/FavoriteModal";

export const FavoritesDisplay = () => {
  const [favorites, setFavorites] = useState([]);
  const [Fave, setFave] = useState({});
  const [FaveModal, setFaveModal] = useState(false);
  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);
  const userId = parseInt(magicUserObject.id);


  const handleFaveClose = () => setFaveModal(false);

  const handleClickEvent = (event, fave) => {
    event.preventDefault();
    setFave(fave);
    setFaveModal(true);
  };

  const deleteButton = (fave) => {
    return (
      <button
        onClick={() => {
          fetch(`http://localhost:8088/favorites/${fave.id}`, {
            method: "DELETE",
          }).then(() => {
            getUserFavorites(userId).then((data) => setFavorites(data));
          });
        }}
        className="glow-on-hover"
      >
        Remove From Favorites
      </button>
    );
  };

  useEffect(() => {
    getUserFavorites(userId).then((data) => setFavorites(data));
  }, [userId]);

  return (
    <>
      <div>Favorites</div>
      <div className="flex flex-wrap">
        {favorites.map((fave) => {
          return (
            <div
              key={fave.id}
              className="w-[20%] bg-white m-3 p-3 border-2 border-purple-400 rounded-2xl hover:scale-110"
            >
              <div>
                <div className="w-[200px]">
                  <img
                    className="w-auto justify-items-center"
                    src={fave.recipe?.image}
                  />
                </div>
                <div className="">
                  <Link onClick={(event) => handleClickEvent(event, fave)}>
                    {fave.recipe?.title}
                  </Link>
                 
                  <div>{deleteButton(fave)}</div>
                </div>
              </div>
            </div>
          );
        })}
         {FaveModal ? (
                    <FavoriteModal
                      Fave={Fave}
                      handleFaveClose={handleFaveClose}
                    ></FavoriteModal>
                  ) : null}
      </div>
    </>
  );
};
