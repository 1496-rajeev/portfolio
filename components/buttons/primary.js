import React from 'react'

export default function PrimaryButton({ label, handleClick }) {
  return (
    <button
      className='bg-primary text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
      onClick={handleClick}>
      <p>{label}</p>
    </button>
  )
}