import React from 'react'

const Heading = ({title}:{title: string}) => {
  return (
    <div className='w-full text-4xl font-semibold flex my-4 '>{title}</div>
  )
}

export default Heading