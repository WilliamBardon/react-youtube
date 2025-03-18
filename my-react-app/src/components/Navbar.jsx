import React from 'react'
import { usePokemon } from '../context/PokemonContext'

const Navbar = () => {
    const {pokemon, logout} = usePokemon()
    return (
        <div className='w-full px-8 py-2 z-10 fixed top-0 left-0 bg-gray-100 h-12 shadow-2xl text-black text-2xl text-right'>
             Buongiorno {pokemon?.name}
             <button onClick={()=>logout()}>Logout</button>
        </div>
    )
}

export default Navbar