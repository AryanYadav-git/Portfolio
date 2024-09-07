import React from 'react'

const Summary = () => {
  return (
    <div className='grid grid-cols-2 gap-2 h-64'>
      <div className="w-full bg-yellow-100 rounded-xl p-2 text-dark-400">
        1
      </div>
      <div className="grid grid-rows-2 gap-2">
        <div className="col-span-1 bg-dark-500 rounded-lg">2</div>
        <div className="col-span-1 bg-red-300 rounded-lg">3</div>
      </div>
    </div>
  )
}

export default Summary