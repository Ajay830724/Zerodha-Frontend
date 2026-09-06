export default function Pricing(){
    return (
        <div className="container mt-5 pt-5 mb-5">
            <div className="row">
                <div className="col-5">
                    <h3>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and 
                        price transparency in India. Flat fees and no 
                        hidden charges.
                    </p>  
                    <p><a style={{textDecoration:"none"}} href="">See pricing <i class="fa-solid fa-arrow-right-long"></i></a></p>

                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="col price-box ">
                            <img className="price-img" src="media/pricing-eq.svg"  />
                            <p className=""> Free account opening</p>
                        </div>
                        <div className="col price-box">
                            <img className="price-img" src="media/pricing-eq.svg"  />
                            <p className=""> Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col price-box">
                            <img className="price-img" src="media/other-trades.svg"  />
                            <p className=""> Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}