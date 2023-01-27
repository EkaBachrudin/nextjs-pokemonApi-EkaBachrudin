import React, { PropsWithChildren } from 'react'
import Footer from '../components/Footer'

export default function Layout({children}:PropsWithChildren) {
  return (
    <>
      <div className='bg-gradient-to-b from-stone-700 to-stone-900 text-white'>
        <main className='m-auto min-h-screen p-10'>
            {children}
        </main> 
        <Footer />
      </div>
    </>
  )
}
