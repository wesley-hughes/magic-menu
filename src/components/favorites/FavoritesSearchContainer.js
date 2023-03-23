import { useState } from "react"
import { FavoritesSearch } from "./FavoritesSearch"
import { FavoritesSearchList } from "./FavoritesSearchList"

export const FavoritesSearchContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <FavoritesSearch setterFunction={setSearchTerms} /> 
        <FavoritesSearchList searchTermState={searchTerms} />
	</>
}