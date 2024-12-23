import Search from "../Search/Search";
import PokemonList from "../Pokedex/PokemonList"

// import css
import "./Pokedex.css"

function Pokedex(){

    return(
        <div className="pokedex-wrapper">
        <Search/>
        <PokemonList/>
        </div>
    )
}

export default Pokedex;