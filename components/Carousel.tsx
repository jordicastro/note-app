import React from 'react'
import Card from './Card'

const Carousel = () => {
  return (
    <div className="flex justify-between items-center border border-slate-500 rounded-xl w-auto h-24 my-3">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Carousel