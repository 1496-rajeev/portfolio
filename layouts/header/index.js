import React, { useState } from 'react'
import PrimaryButton from '../../components/buttons/primary';
import Link from 'next/link';
import { BsList, BsX } from "react-icons/bs";
import { handleCall } from "../../utils/index"

//stylr
import { subHeading } from '../../assets/typography';

export default function Header({ pageName }) {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/product" },
    { name: "Work", link: "/work" },
    // { name: "Contact", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
          <span href="/" className='text-3xl text-primary mr-1 pt-2'>
            RV.
          </span>
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? <div><BsX /></div> : <div><BsList /></div>}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 shadow-md' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                <Link href={link.link} >
                  <p className={pageName === link.name ? `${subHeading} text-primary` : `${subHeading} hover:text-gray-400 duration-500 cursor-pointer`}>{link.name}</p>
                </Link>
              </li>
            ))
          }
          <PrimaryButton label={"Contact me"} handleClick={handleCall} />
        </ul>
      </div>
    </div>
  )
}
