import { createContext, useContext, useState, useEffect } from "react";

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState(() => {
        const savedPokemon = localStorage.getItem('pokemon')
        return savedPokemon ? JSON.parse(savedPokemon) : {}
    })

    useEffect(() => {
            if(pokemon && pokemon.name) return
            async function fetchPokemon() {
                const randomId = Math.floor(Math.random() * 150) + 1;
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
                const data = await response.json()
                setPokemon(data)
                localStorage.setItem('pokemon', JSON.stringify(data))
            }
            fetchPokemon()
    }, [])

    function logout() {
        setPokemon({})
        localStorage.removeItem('pokemon')
    }
    return (
        <PokemonContext.Provider value={{ pokemon, logout }}>
            {children}
        </PokemonContext.Provider>
    )
}
