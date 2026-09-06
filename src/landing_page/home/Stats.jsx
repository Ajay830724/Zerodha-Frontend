export default function Stats(){
    return (
        <div className="stats container">
            <div className="row">
                <div className="col-5 text-start">
                    <h4 className="mb-5">Trust with confidence</h4>
                    <div>
                        <h5>Customer-first always</h5>
                        <p> That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of  daily retail exchange volumes in India. </p>
                    </div>
                    <div>
                        <h5>No spam or gimmicks</h5>
                        <p>No spam or gimmicks No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.   </p>
                    </div>
                    <div>
                        <h5>The Zerodha universe</h5>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div>
                        <h5>Do better with money</h5>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                
                <div className="col-7">
                    <img className="col-10" src="media/ecosystem.png" alt="..." />
                    <p className="text-center">
                        <a className="m-5" style={{textDecoration:"none"}} href="">Explore our products<i class="fa-solid fa-arrow-right-long"></i></a> 
                        <a className="m-5" style={{textDecoration:"none"}} href="">Try Kite demo<i class="fa-solid fa-arrow-right-long"></i></a>
                    </p>
                </div>
            </div>
            <div className="row mt-5 mb-5 stats-2nd">
                <div className="col-2">
                    <img className="stats-img" src="media/kc-logo-landing.svg"  />
                </div>
                <div className="col-8">
                    <p>Need more? Build your own trading and investing experience with Kite
                         Connect, simple HTTP APIs to place orders, stream market data,
                          manage your account, and more. <a style={{textDecoration:"none"}} href="">Explore<i class="fa-solid fa-arrow-right-long"></i></a> 
                           </p>
                </div>
                <div className="col-2">
                    <img className="stats-img" src="media\kc-banner-image.svg" />
                </div>
            </div>
        </div>
    )
}