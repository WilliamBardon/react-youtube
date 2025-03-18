import React from 'react'
import { usePokemon } from '../context/PokemonContext'

const CardTitle = () => {
  const {pokemon: {name}} = usePokemon()
  return (
    <h3 className='text-3xl text-center uppercase font-bold'>
          {name}
    </h3>
  )
}

export default CardTitle