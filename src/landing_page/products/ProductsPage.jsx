import Hero from "./Hero";
import LeftSegment from "./LeftSegment";
import RightSegment from "./RightSegment";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />

      <RightSegment
        imageUrl="media/kite.png"
        productName="Kite"
        ProductDec="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        />
      <LeftSegment 
        imageUrl="media/console.png"
        productName="Console"
        ProductDec="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learnMore=""      
      />
      <RightSegment
        imageUrl="media/coin.png"
        productName="Coin"
        ProductDec="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <LeftSegment 
        imageUrl="media/landing.svg"
        productName="Kite Connect API"
        ProductDec="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""      
      />
      <RightSegment
        imageUrl="media/varsity-products.svg"
        productName="Varsity mobile"
        ProductDec="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="fs-5 text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </>
  );
}
