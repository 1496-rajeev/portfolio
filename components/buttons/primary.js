import React from 'react'

export default function Button({ children }) {
  return (
    <button className='bg-primary text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
      <a href="tel:+8271397976">{children}</a>
    </button>
  )
}