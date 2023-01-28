import React from 'react'
import Image from 'next/image'

export const PokemonStates = ({ stats }: Props) => {

  return (
    <div className='mt-5'>
      <div className='flex justify-between'>
            <div> <Image alt="logo" src={"/images/stats/hp.png"} width={20} height={20} /> </div> <div> {stats[0].base_stat} </div>
      </div>
      <div className='flex justify-between'>
            <div> <Image alt="logo" src={"/images/stats/attack.png"} width={20} height={20} /> </div> <div> {stats[1].base_stat} </div>
      </div>
      <div className='flex justify-between'>
            <div> <Image alt="logo" src={"/images/stats/defense.png"} width={20} height={20} /> </div> <div> {stats[2].base_stat} </div>
      </div>
    </div>
  )
}

interface Props{
  stats?:any
}
