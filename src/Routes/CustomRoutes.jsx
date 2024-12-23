import React from 'react'
import Pokedex from '../components/Pokedex/Pokedex'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails'
import { Routes ,Route} from 'react-router-dom'

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
    </Routes>
  )
}

export default CustomRoutes