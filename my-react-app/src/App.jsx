import './App.css'
import Card from './components/Card'
import { useState, useEffect } from 'react'
import { PokemonProvider } from './context/PokemonContext'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <PokemonProvider>
      <main className='container mx-auto h-screen p-4 text-white'>
        <Navbar />
        <h1 className='font-bold text-yellow-500 text-4xl text-center my-12'>Il MIO STARTER POKEMON</h1>
        <div className='flex justify-center items-center h-1/2 gap-4 flex-wrap'>
          <Card />
        </div>
      </main>
    </PokemonProvider>
  )
}

export default App
