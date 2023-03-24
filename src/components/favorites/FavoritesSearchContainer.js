import { useState } from "react"
import { FavoritesDisplay } from "./FavoritesDisplay"
import { FavoritesSearch } from "./FavoritesSearch"

export const FavoritesSearchContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <FavoritesSearch setterFunction={setSearchTerms} /> 
        <FavoritesDisplay searchTermState={searchTerms} />
	</>
}