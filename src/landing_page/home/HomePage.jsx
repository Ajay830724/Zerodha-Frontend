import Pricing from "./Pricing"
import Hero from "./Hero"
import Education from "./Education"
import Stats from "./Stats"
import Footer from "../Footer"
import Navbar from "../Navbar"
import OpenAccount from "../OpenAccount"
import Awards from "./Awards"

export default function HomePage(){
    return (
        <>
            <Navbar />
            <Hero />
            <Stats/>
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer/>
        </>
    )
}