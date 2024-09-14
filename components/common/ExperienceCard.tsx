import React from 'react'

const ExperienceCard = ({experience}:{experience: ExperienceParams}) => {
  const { company, position, duration, description, location } = experience;
  return (
    <div className='rounded-2xl px-4 py-4 bg-dark-400 flex flex-col justify-between'>
      <div className="flex flex-col gap-1">
      <h3 className='font-bold text-xl md:text-3xl '>{position}</h3>
      <p className='text-gray-400 md:text-base font-semibold font-mono'>{company}</p>
      <p className='mt-2 '>{description}</p>
    </div>
      <div className='text-gray-400 mt-4 font-semibold flex flex-col justify-end'>
        <div className="flex justify-between">
        <p>{duration}</p> <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard