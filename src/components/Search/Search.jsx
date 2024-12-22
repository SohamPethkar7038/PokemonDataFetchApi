import "./Search.css";

function Search(){

    return(
        <div className="search-wrapper">
              <input 
                 id="pokemon-search-name"
                 type="text"
                 placeholder="Pokemon name...."
                  />  
        </div>
    )
}

export default Search;