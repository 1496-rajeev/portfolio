import React from 'react'
import { heading, subHeading } from '../../assets/typography'

//data and content
import { projects } from '../../contents-and-data'

export default function Projects() {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <div key={index} className="shadow-md p-[10px] my-[20px]">
            <p className={heading}>{project.title}</p>
            <p className={`${subHeading} text-gray-500 mb-[8px]`}>{project.subTitle}</p>
            <p className={subHeading}>{project.about}</p>
            <a href={`${project.link}`} target="_blank" className='text-blue-600 mt-[12px]' rel="noreferrer">View Project</a>
          </div>)
      })}
    </div>
  )
}
