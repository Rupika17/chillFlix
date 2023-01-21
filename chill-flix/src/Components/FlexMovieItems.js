import React from 'react'
import { FaRegCalendar } from 'react-icons/fa'

function FlexMovieItems({movie}) {
  return (
    <>
    <div className='flex items-center gap-2'>
        <span className='text-sm font-medium'>{movie.Type}</span>
    </div>
    <div className='flex items-center gap-2'>
        <FaRegCalendar className='text-subMain w-3 h-3' />
        <span className='text-sm font-medium'>{movie.Year}</span>
    </div>
    </>
  )
}

export default FlexMovieItems