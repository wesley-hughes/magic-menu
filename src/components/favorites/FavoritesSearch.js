export const FavoriteSearch = ({ setterFunction }) => {
    return(
       <div><input 
        onChange={ 
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        }
        type="text" placeholder="search" /></div>
    )
}