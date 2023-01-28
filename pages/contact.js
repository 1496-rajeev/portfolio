import React from 'react'

//components
import HeroSection from "../components/home/hero-section"
import { Footer } from '../layouts/footer'
import Header from '../layouts/header'

export default function Contact() {
  return (
    <div>
      <Header pageName={"Contact"} />
      <div className="px-[16px]">
        <HeroSection />
      </div>
      <div className="mt-[40px] md:mt-[80px] xl:mt-[80px]">
        <Footer />
      </div>
    </div>
  )
}
