import React from 'react'
import CardHeader from './CardHeader.jsx'
import CardTitle from './CardTitle.jsx'
import { usePokemon } from '../context/PokemonContext.jsx'

const Card = () => {
  const {pokemon} = usePokemon()
  return (
    <div className='w-64 bg-gray-200 text-black shadow-lg rounded-lg overflow-hidden p-6 border-2 border-black'>
        <CardHeader/>
        {pokemon?.sprites?.front_default && <img src={pokemon?.sprites?.front_default || ''} alt={pokemon.name} className='w-32 h-32 mx-auto'/> }
        <p className='mt-4'>Peso: {pokemon?.weight} kg</p>
        <p className=''>Altezza: {pokemon?.height} dm</p>
        <p className=''>Abilità: {pokemon?.abilities?.[0]?.ability?.name}</p>
        <p className=''>Tipo: {pokemon?.types?.[0]?.type?.name}</p>
    </div>
  )
}

export default Card