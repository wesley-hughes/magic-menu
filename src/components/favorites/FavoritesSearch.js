export const FavoritesSearch = ({ setterFunction }) => {
    return(
       <div className="ml-5  mt-[15px] -mb-10 lg:w-[25%] sm:w-full"><input 
        onChange={ 
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        }
        type="text" placeholder="Search Your Faves" className="input input-secondary"/>
        </div>
    )
}