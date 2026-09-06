import Hero from "./Hero"
import FAQS from "./FAQS"
import DematAccount from "./DematAccount"
import AccountTypes from "./AccountTypes"
import OpenAccount from "../OpenAccount"

export default function SignupPage(){
    return (
        <>
            <Hero/>
            <DematAccount />
            <AccountTypes />
            <FAQS />
            <OpenAccount />
        </>
    )
}