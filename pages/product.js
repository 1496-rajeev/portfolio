import React from 'react'

//components
import HeroSection from "../components/home/hero-section"
import Header from '../layouts/header'

export default function Product() {
  return (
    <div>
      <Header pageName={"Products"} />
      <div className="px-[16px]">
        <HeroSection />
      </div>
    </div>
  )
}
