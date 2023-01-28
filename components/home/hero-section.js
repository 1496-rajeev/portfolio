import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import HeroImage from '../../assets/img/heroImg.jpg'

//style
import { heading, subHeading } from '../../assets/typography'
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";

export default function HeroSection() {
  const socialLinks = [
    { name: "Github", icon: <AiFillGithub size={30} />, link: "https://github.com/1496-rajeev" },
    { name: "LinkedIn", icon: <AiFillLinkedin size={30} />, link: "https://www.linkedin.com/in/1496-rajeev/" },
    { name: "Twitter", icon: <AiFillTwitterCircle size={30} />, link: "https://twitter.com/RajeevVerma1496" },
    { name: "Medium", icon: <BsMedium size={30} />, link: "https://medium.com/@1496rajeev" },
    { name: "Instagram", icon: <AiFillInstagram size={30} />, link: "https://www.instagram.com/1496rajeev.verma/" }
  ]
  return (
    // <div classNameName='flex flex-col justify-center items-center w-full h-screen'>
    //   <p classNameName={`${subHeading} text-center`}>Hi, my name is <span>Rajeev</span></p>
    //   <p classNameName={`${heading} text-center my-[20px]`}>I build things for the web and mobile</p>
    //   <p classNameName={`${subHeading} text-center`}>I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</p>
    //   <div classNameName="flex mt-[15px]">
    //     {socialLinks.map((social, index) => {
    //       return (
    //         <div key={index} classNameName="px-[5px] cursor-pointer">
    //           <Link href={social.link}>
    //             <a target="_blank">{social.icon}</a>
    //           </Link>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>

    <section className="mt-[100px] md:mt-[200px] xl:mt-[200px] bg-white">
      <div className="px-0 md:px-12 xl:px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-8 text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
            <span>I am</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-purple-500 lg:inline">Senior software engineer{"."}</span> <span> I develope products for the web and mobile</span>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-lg lg:px-24">
            Currently, I’m focused on building accessible, human-centered products.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a href="mailto:kudrum.official@gmail.com" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-blue-400 rounded-2xl sm:w-auto sm:mb-0">
              Talk now
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            {/* <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
              Learn More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </a> */}
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <div className="relative z-0 w-full mt-8">
            <div className="relative overflow-hidden shadow">
              <div className="flex items-center flex-none px-4 bg-blue-400 rounded-b-none h-11 rounded-xl">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <Image src={HeroImage} alt='img' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
