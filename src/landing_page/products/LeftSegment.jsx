export default function LeftSegment({
  imageUrl,
  productName,
  ProductDec,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container pt-5">
      <div className="row">        
        <div className="col-4 ">
          <h2 className="pb-3">{productName}</h2>
          <p className="fs-5.5">{ProductDec}</p>

            <a style={{ textDecoration: "none" }} href={tryDemo} >
              Try demo<i class="fa-solid fa-arrow-right-long"></i>
            </a>

            <a style={{ textDecoration: "none", paddingLeft:"50px" }} href={learnMore} >
              Learn more<i class="fa-solid fa-arrow-right-long"></i>
            </a>

        </div>
        <div className="col-8 text-center">
          <img src={imageUrl} alt="" style={{width:"70%",height:"70%",objectFit:"fill"}} />          
        </div>

      </div>
    </div>
  );
}
