//components
import HeroSection from "../components/home/hero-section"
import { Footer } from "../layouts/footer"
import Header from "../layouts/header"

export default function Home() {
  return (
    <div>
      <Header pageName={"Home"} />
      <div className="px-[16px] top-40">
        <HeroSection />
      </div>
      <div className="mt-[40px] md:mt-[80px] xl:mt-[80px]">
        <Footer />
      </div>
    </div>
  )
}
