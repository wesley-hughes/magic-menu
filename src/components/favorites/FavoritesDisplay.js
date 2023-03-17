import { useEffect, useState } from "react"
import { getUserFavorites } from "../APIManager";

export const FavoritesDisplay = () => {
    const [favorites, setFavorites] = useState([])

    const localMagicUser = localStorage.getItem("magic_user");
    const magicUserObject = JSON.parse(localMagicUser);
    const userId = parseInt(magicUserObject.id);

    useEffect(() => {
        getUserFavorites(userId).then((data) => setFavorites(data))
    }, [userId])



return <><div>
{favorites.map((fave) => {
    return <div className="">
        <div className="w-[200px]"><img src={fave.recipe.image} /></div>
        <div className="">{fave.recipe.title}</div>
    </div>
})}

</div></>


}