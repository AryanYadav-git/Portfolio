import React from 'react'

const Heading = ({title}:{title: string}) => {
  return (
    <h2 className='w-full text-5xl font-semibold flex my-4 '>{title}</h2>
  )
}

export default Heading