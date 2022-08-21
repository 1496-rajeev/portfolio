import React from 'react'
import { heading } from '../assets/typography'

//components
import Header from '../layouts/header'

export default function Product() {
  return (
    <div>
      <Header pageName={"Products"} />
      <div className="px-[16px] flex flex-col justify-center items-center w-full h-screen">
        <p className={`${heading}`}>Coming Soon 😉</p>
      </div>
    </div>
  )
}
