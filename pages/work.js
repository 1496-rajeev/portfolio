import React from 'react'

//components
import HeroSection from "../components/home/hero-section"
import Header from '../layouts/header'

export default function Work() {
  return (
    <div>
      <Header pageName={"Work"} />
      <div className="px-[16px]">
        <HeroSection />
      </div>
    </div>
  )
}
