import React from 'react'
import { EducationCard, Heading } from '../common'
import { educations } from '@/constants'

const Education = () => {
  return (
    <div>
      <Heading title='Education'/>
      <div className="flex flex-col border-dark-600 border-t-2 md:border-t-0">
        {
          educations.map((education, index) =>(
            <EducationCard education={education} index={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Education