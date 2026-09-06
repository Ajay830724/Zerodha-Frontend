import Pricing from "./Pricing"
import Hero from "./Hero"
import Education from "./Education"
import Stats from "./Stats"
import OpenAccount from "../OpenAccount"
import Awards from "./Awards"

export default function HomePage(){
    return (
        <>
            <Hero />
            <Stats/>
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    )
}