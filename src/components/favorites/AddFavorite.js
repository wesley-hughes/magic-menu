import { postFavorite } from "../APIManager";

export const AddFavorite = () => {
  const handleFavoriteButtonClick = (event) => {
    event.preventDefault();
    const newFavorite = {
      userId: parseInt(magicUserObject.id),
      recipeId: event.target.id,
    };

    postFavorite(newFavorite).then(() => {
      navigate("/weeks");
    });
    window.alert("Favorite Added!");
  };
  return (
    <>
      <button
        type="button"
        id={recipe.id}
        onClick={(event) => {
          handleSaveButtonClick(event);
        }}
      >
        <image src="./image/star.svg" />
      </button>
    </>
  );
};
