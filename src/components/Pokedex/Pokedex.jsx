import Search from "../Search/Search";
import PokemonList from "../Pokedex/PokemonList"

// import css
import "./Pokedex.css"

function Pokedex(){

    return(
        <div className="pokedex-wrapper">
        <h1 id="pokedex-header">Pokedex</h1>
        <Search/>
        <PokemonList/>
        </div>
    )
}

export default Pokedex;