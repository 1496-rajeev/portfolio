//components
import HeroSection from "../components/home/hero-section"
import Header from "../layouts/header"

export default function Home() {
  return (
    <div>
      <Header pageName={"Home"} />
      <HeroSection />
    </div>
  )
}
