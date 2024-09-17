import { IconBrandLinkedin, IconMail, IconBrandGithub, IconBrandX, IconWriting, IconHandMove } from '@tabler/icons-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='my-8 md:mt-20 mb-1'>
      <p className='font-extrabold capitalize text-2xl md:text-4xl font-mono'>Let's connect, brainstorm, and create something amazing together...</p>
      <p className='text-lg md:text-xl text-dark-700'>I'm open to new projects, ideas, and opportunities that allow me to leverage my skills and work alongside like-minded individuals.</p>
      <div className="flex my-2 gap-2 md:gap-4 flex-wrap">
        <a href="mailto:yadavaryan466@gmail.com" className="  text-white flex gap-1 bg-dark-400 p-4 px-4 md:px-8 rounded-full">
        <IconMail/> Email
        </a>
        <a href="https://www.linkedin.com/in/aryan-yadav-bb658b25b/" className="text-white bg-dark-400 p-4 px-4 md:px-8 rounded-full flex gap-1"> <IconBrandLinkedin/> LinkedIn</a>
        <a href="https://github.com/AryanYadav-git" className="text-white flex gap-1 bg-dark-400 p-4 px-4 md:px-8 rounded-full"> <IconBrandGithub/> GitHub</a>
        <a href="https://twitter.com/AryanYadav466" className="text-white flex gap-1 bg-dark-400 p-4 px-4 md:px-8 rounded-full"><IconBrandX/> Twitter</a>
        {/* <a href="/blogs" className="text-white flex gap-1 bg-dark-400 p-4 px-4 md:px-8 rounded-full"><IconWriting/> Read Blogs</a>
        <a href="/more" className="text-white flex gap-1 bg-dark-400 p-4 px-4 md:px-8 rounded-full"><IconHandMove/> More about me</a> */}
      </div>

      
    </div>
  )
}

export default Footer