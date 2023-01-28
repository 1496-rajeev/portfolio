import React from 'react'

//components
import Projects from '../components/work/project'
import { Footer } from '../layouts/footer'
import Header from '../layouts/header'

export default function Work() {
  return (
    <div>
      <Header pageName={"Work"} />
      <div className="px-[16px] flex flex-col justify-center items-center w-full h-screen">
        <Projects />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
