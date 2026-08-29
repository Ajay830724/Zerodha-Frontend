import Hero from "./Hero"
import FAQS from "./FAQS"
import DematAccount from "./DematAccount"
import AccountTypes from "./AccountTypes"
import Navbar from "../Navbar"
import Footer from "../Footer"
import OpenAccount from "../OpenAccount"

export default function SignupPage(){
    return (
        <>
            <Navbar />
            <Hero/>
            <DematAccount />
            <AccountTypes />
            <FAQS />
            <OpenAccount />
            <Footer />
        </>
    )
}