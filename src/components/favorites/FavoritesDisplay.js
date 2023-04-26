import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserFavorites } from "../APIManager";
import { FavoriteModal } from "../modals/FavoriteModal";

export const FavoritesDisplay = ({ searchTermState }) => {
  const [favorites, setFavorites] = useState([]);
  const [Fave, setFave] = useState({});
  const [FaveModal, setFaveModal] = useState(false);
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);
  const userId = parseInt(magicUserObject.id);

  useEffect(() => {
    
    const searchedFavorites = favorites?.filter((favorite) => {
      return (
        favorite?.recipe?.title.toLowerCase().includes(searchTermState.toLowerCase()) &&
        searchTermState.length > 0
      );
    });
    setFilteredFavorites(searchedFavorites);
  }, [searchTermState, favorites] );

  useEffect(() => {
    getUserFavorites(userId).then((data) => setFavorites(data));
  }, [userId]);

  const handleFaveClose = () => setFaveModal(false);

  const handleClickEvent = (event, fave) => {
    event.preventDefault();
    setFave(fave);
    setFaveModal(true);
  };

  const deleteButton = (fave) => {
    return (
      <Link
        onClick={() => {
          fetch(`https://magic-menu-wlmtp.ondigitalocean.app//favorites/${fave.id}`, {
            method: "DELETE",
          }).then(() => {
            getUserFavorites(userId).then((data) => setFavorites(data));
          });
        }}
        className=""
      >
        <img src="./images/trash.png" className="h-14 hover:scale-110" alt="trashcan"></img>
      </Link>
    );
  };

  return (
    <>
      <div className="text-purple-700 text-4xl lg:mb-[60px] sm:mb-[10px] lg:mt-auto sm:mt-[75px] text-center font-bold leading-tight tracking-tight">
        My Favorite Recipes
      </div>
      <div className="carousel carousel-center w-full bg-white bg-opacity-50 border border-purple-400 p-5">
        {filteredFavorites.length < 1
          ? favorites.map((fave) => {
              return (
                <div key={fave.id} className="carousel-item lg:w-[25%] sm:w-full">
                  <div className="flex flex-col bg-purple-100 m-3 p-3 border-2 border-purple-400 rounded-2xl justify-between space-y-3">
                    <div className="mx-auto">
                      <Link
                        onClick={(event) => handleClickEvent(event, fave)}
                      ></Link>{" "}
                      <img
                        className="rounded-2xl border border-purple-400 shadow-md drop-shadow-md"
                        src={fave.recipe?.image}
                        alt="food"
                      />
                    </div>

                    <Link
                      onClick={(event) => handleClickEvent(event, fave)}
                      className="text-blue-600 mx-auto hover:text-purple-500 hover:underline text-lg leading-tight tracking-tight"
                    >
                      {fave.recipe?.title}
                    </Link>

                    <div className="mx-auto">{deleteButton(fave)}</div>
                  </div>
                </div>
              );
            })
          : filteredFavorites.map((fave) => {
              return (
                <div key={fave.id} className="carousel-item w-[25%]">
                  <div className="flex flex-col bg-white m-3 p-3 border-2 border-purple-400 rounded-2xl justify-between space-y-3">
                    <div className="mx-auto">
                      <Link
                        onClick={(event) => handleClickEvent(event, fave)}
                      ></Link>{" "}
                      <img
                        className="rounded-2xl border border-purple-400 shadow-md drop-shadow-md"
                        src={fave.recipe?.image}
                        alt="food"
                      />
                    </div>

                    <Link
                      onClick={(event) => handleClickEvent(event, fave)}
                      className="text-blue-600 hover:text-purple-500 hover:underline mx-auto  text-lg leading-tight tracking-tight"
                    >
                      {fave.recipe?.title}
                    </Link>

                    <div className="mx-auto">{deleteButton(fave)}</div>
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
