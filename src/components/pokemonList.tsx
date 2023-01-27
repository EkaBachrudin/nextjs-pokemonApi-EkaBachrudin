import React, {  useEffect, useState } from 'react'
import { PokemonInterface } from 'types/pokemonType'
import Image from 'next/image'

export const PokemonList = ({ result }: Props) => {

  return (
    <div className='flex justify-center'>
      <div className="grid grid-cols-3 gap-4 mt-10 w-3/4">
        {result?.map((pokemon: any, index: any) => (
          
          <div key={index} className='border-solid shadow-lg border-2 border-stone-500 rounded p-5'>
            <div className='flex justify-center h-40'>
              <Image alt="logo" src={pokemon.svg} width={100} height={100} />
            </div>
            <div>
              { pokemon.name } <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface Props{
  result?:any
}



