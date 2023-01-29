import React, { useState, useRef, useEffect  } from 'react'
import Image from 'next/image'

export const SearchPokemon = (props: any) => {
      const [hidden, setHidden] = useState(true)
      const [loading, setLoading] = useState(false)
      const [search,setSearch]=useState("")

      const [data, setData] = useState<any>('')


      const showEl = () => {
            setHidden(false)
            load()
      }

      const hideEl = () => {
            setData(null)
            setHidden(true)
      }

      const load = async() => {
            setLoading(true)
            await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
            .then(response => response.json())
            .then(result => {
                  setData(result)
            } )
            .catch(error => {
                  setData('')
            });
            setLoading(false)
      } 



  return (
      <div className='flex justify-center space-x-1'>
            <input onChange={(e)=>setSearch(e.target.value)} className='text-white w-72 px-2 py-1 rounded bg-stone-600 border-solid border-2 border-stone-500 shadow' placeholder='Search spesific pokemon name...' />
            <div onClick={() => showEl()} className='bg-gray-800 active:first-letter hover:cursor-pointer shadow px-3 rounded flex items-center'>Search</div>
            <div className={`${hidden?'hidden': ''} absolute rounded bg-stone-600 shadow-lg border-solid border-2 border-stone-500 top-[200px] p-5 w-72`}>
                  <div onClick={() => hideEl()} className='absolute right-[15px] top-[6px] hover:cursor-pointer bg-black rounded'>
                        <p className='text-xs p-1'>close</p>
                  </div>
                  {
                  loading ?
                   "Loading"
                   : 
                   (data ? 
                        <div>
                              <div>
                                    {data?.sprites?.other?.dream_world?.front_default? <Image alt="Pokemon" src={data?.sprites?.other?.dream_world?.front_default} width={100} height={100} /> : 'No Image'}
                              </div>
                              <div>
                                    {data?.name}
                              </div>
                        </div>
                   : 
                        "Not Found"
                   )
                  }
                  
            </div>
      </div>
  )
}
