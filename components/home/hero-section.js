import Link from 'next/link'
import React from 'react'

//style
import { heading, subHeading } from '../../assets/typography'
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function HeroSection() {
  const socialLinks = [
    { name: "Github", icon: <AiFillGithub size={30} />, link: "https://github.com/1496-rajeev" },
    { name: "LinkedIn", icon: <AiFillLinkedin size={30} />, link: "https://www.linkedin.com/in/1496-rajeev/" },
    { name: "Twitter", icon: <AiFillTwitterCircle size={30} />, link: "https://twitter.com/RajeevVerma1496" },
    { name: "Instagram", icon: <AiFillInstagram size={30} />, link: "https://www.instagram.com/1496rajeev.verma/" }
  ]
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <p className={`${subHeading} text-center`}>Hi, my name is <span>Rajeev</span></p>
      <p className={`${heading} text-center my-[20px]`}>I build things for the web and mobile</p>
      <p className={`${subHeading} text-center`}>I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</p>
      <div className="flex mt-[15px]">
        {socialLinks.map((social, index) => {
          return (
            <div key={index} className="px-[5px] cursor-pointer">
              <Link href={social.link}>
                <a target="_blank">{social.icon}</a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
