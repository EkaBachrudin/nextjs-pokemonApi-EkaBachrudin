import React, { useState } from 'react'

export const Pagination = ({ offset, limit, onPageChange }: any) => {

      const currentOffset = offset

      const previous = () => {
            if(offset == 0) {
                  return alert("offsett 0")
            }
            onPageChange(currentOffset-limit)
      }

      const next = () => {
            onPageChange(currentOffset+limit)
      }
      
  return (
    <div className='flex justify-center space-x-5'>
       <div className="hover:underline hover:cursor-pointer" onClick={() => previous()}>Prevews</div>
       <div className='px-5 bg-stone-600 rounded shadow'>offset {currentOffset+limit} data</div>
       <div className="hover:underline hover:cursor-pointer" onClick={() => next()}>Next</div>
    </div>
  )
}
