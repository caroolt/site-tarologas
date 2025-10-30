import Benefits from "../components/Benefits"
import FAQ from "../components/FAQ"
import FirstCTA from "../components/FirstCTA"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Process from "../components/Process"
import SecondCTA from "../components/SecondCTA"
import Testimonials from "../components/Testimonials"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"


function TarologasLP() {
  const navigate = useNavigate()
  return (
    <div className="bg-white-100 text-black-100 overflow-x-hidden">
      <Navbar ctas={[{ label: 'Cadastre-se', variant: 'primario' },
      { label: 'Sou Cliente', variant: 'secundario-black', onClick: () => { navigate('/clientes'); } },]} />
       <Hero />
        <Benefits />
        <Process />
        <Testimonials />
        <FirstCTA />
        <Testimonials id="clients" heading="Conquiste clientes como estes" />
        <SecondCTA />
        <FAQ />
        <Footer/>
    </div>
  )
}

export default TarologasLP
