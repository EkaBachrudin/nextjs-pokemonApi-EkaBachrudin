import { getTextColor } from '@/utils/changeTextColor'
import React, { useEffect, useState } from 'react'

export const PokemonSpecies = ({ speciesPorp }: Props) => {

      type species = {name: string, color: {name: string}}

      
      const [data, setData] = useState<species>()

      const getSpecies = () => {
            fetch(speciesPorp.url).then((res) => res.json()).then((res) => {
                  let speciesData: species = {name: speciesPorp.name, color:  res.color}
                  setData(speciesData);
            })
      }
      

      useEffect(() => {
            getSpecies()
      }, [])
      

      return ( 
            <>
                  {data ? <p className='px-2 shadow rounded pb-1 invert-font-color' style={{ backgroundColor: data.color.name, color: getTextColor(data?.color.name) }}>{data.name}</p>  : ''}
            </>
      )
}

interface Props{
  speciesPorp?:any
}
