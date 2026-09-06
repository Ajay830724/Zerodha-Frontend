import Hero from "./Hero"
import LeftSegment from "./LeftSegment"
import RightSegment from "./RightSegment"
import Universe from "./Universe"


export default function ProductPage(){
    return (
        <>
            <Hero/>

            <RightSegment />
            <LeftSegment />
            <RightSegment />
            <LeftSegment />
            <RightSegment />

            <Universe />
        </>
    )
}
