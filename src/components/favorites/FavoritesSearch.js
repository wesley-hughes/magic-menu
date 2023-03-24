export const FavoritesSearch = ({ setterFunction }) => {
    return(
       <div className="ml-5  mt-[15px] -mb-10"><input 
        onChange={ 
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        }
        type="text" placeholder="Search Your Faves" className="input w-[25%] input-secondary"/>
        </div>
    )
}