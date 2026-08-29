import Hero from "./Hero"
import Navbar from "../Navbar"
import Footer from "../Footer"
import LeftSegment from "./LeftSegment"
import RightSegment from "./RightSegment"
import Universe from "./Universe"


export default function ProductPage(){
    return (
        <>
            <Navbar />
            <Hero/>

            <RightSegment />
            <LeftSegment />
            <RightSegment />
            <LeftSegment />
            <RightSegment />

            <Universe />
            <Footer />
        </>
    )
}
