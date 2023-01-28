import React from 'react'
import { heading } from '../assets/typography'
import { Footer } from '../layouts/footer'

//components
import Header from '../layouts/header'

export default function Product() {
  return (
    <div>
      <Header pageName={"Products"} />
      <div className="px-[16px] flex flex-col justify-center items-center w-full h-screen">
        <p className={`${heading}`}>Coming Soon 😉</p>
      </div>
      <div className="mt-[40px] md:mt-[80px] xl:mt-[80px] fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
