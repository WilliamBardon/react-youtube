import React from 'react'
import CardTitle from './CardTitle'

const CardHeader = () => {
  return (
    <div className='w-full bg-linear-to-r from-red-500 to-red-300 text-white p-4 border-2 border-black'>
        <CardTitle/>
    </div>
  )
}

export default CardHeader