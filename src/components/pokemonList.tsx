import React, {  useEffect, useState } from 'react'
import { PokemonInterface } from 'types/pokemonType'
import Image from 'next/image'
import { PokemonSpecies } from './pokemonSpecies'

export const PokemonList = ({ result }: Props) => {

  const initialArray: any[] = []

  return (
    <div className='flex justify-center'>
      <div className="grid grid-cols-3 gap-4 mt-10 w-3/4">
        {result.map((pokemon: PokemonInterface, index: any) => (
          
          <div key={index} className='border-solid shadow-lg border-2 border-stone-500 rounded p-5'>
            <div className='flex justify-center h-40'>
              <Image alt="logo" src={pokemon.svg} width={100} height={100} />
            </div>
            <div className='flex justify-between'>
              <div className='PokeName'>
                <p className='text-xl font-bold'>{ pokemon.name }</p>
              </div>
              <div className='pokeSpecies'>
                <PokemonSpecies speciesPorp={pokemon.species}/>
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



