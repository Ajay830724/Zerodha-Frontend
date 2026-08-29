import Hero from "./Hero"
import FAQS from "./FAQS"
import Navbar from "../Navbar"
import Footer from "../Footer"




export default function SignupPage(){
    return (
        <>
            <Navbar />
            <Hero/>
            <AccountTypes />
            <FAQS />
            <OpenAccount />
            <Footer />

        </>
    )
}