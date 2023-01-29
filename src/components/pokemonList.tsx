import React, {  useEffect, useState } from 'react'
import { PokemonInterface } from 'types/pokemonType'
import Image from 'next/image'
import { PokemonSpecies } from './pokemonSpecies'
import { PokemonStates } from './PokemonStates'

export const PokemonList = ({ result }: Props) => {

  return (
    <div className='flex justify-center'>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10 w-11/12">
        {result.map((pokemon: PokemonInterface, index: any) => (
          
          <div key={index} className='border-solid shadow-lg border-2 bg-stone-600 border-stone-500 rounded p-5'>
            <div className='flex justify-center items-center h-40'>
              {pokemon.svg? <Image alt="Pokemon" src={pokemon.svg} width={100} height={100} /> : 'No Image'}
              
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
              <div className='PokeName'>
                <p className='text-xl font-bold'>{pokemon.name}</p>
                <PokemonStates stats={pokemon.stats}/>
              </div>
              <div className='pokeSpecies'>
                <PokemonSpecies speciesPorp={pokemon.species} />
                <div className='mt-2'>
                  <p className='text-xs'>Types: </p>
                {pokemon.types.map((_:any, index: any) => (
                  <div key={index} className='bg-gray-800 rounded p-1 flex justify-center mt-3'>
                  <div className='text-xs'>{_.type.name}</div>
                </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface Props{
  result:any
}



