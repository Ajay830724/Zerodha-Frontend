export default function Education(){
    return (
        <div className="container pt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img className="edu-img" src="media/index-education.svg" alt="" />
                </div>
                <div className="col-6">
                    <h3 className="mb-3">Free and open market education</h3>
                    <div className="mb-5">
                        <p>Varsity, the largest online stock market education book
                             in the world covering everything from the basics to advanced 
                             trading.
                        </p>
                        <p><a style={{textDecoration:"none"}} href="">Varsity <i class="fa-solid fa-arrow-right-long"></i></a></p>        
                    </div>
                    <div>
                        <p>TradingQ&A, the most active trading 
                            and investment community in India for all your 
                            market related queries.
                        </p>
                        <p><a style={{textDecoration:"none"}} href="">TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a></p>        
                    </div>
                </div>
            </div>
        </div>
    )
}