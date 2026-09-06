export default function RightSegment({
  imageUrl,
  productName,
  ProductDec,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-8 text-center">
          <img src={imageUrl} alt="" style={{width:"70%",height:"70%", objectFit:"fill"}} />
        </div>

        <div className="col-4 ">
          <h2 className="pb-3">{productName}</h2>
          <p className="fs-5.5">{ProductDec}</p>

            <a style={{ textDecoration: "none" }} href={tryDemo} >
              Try demo<i class="fa-solid fa-arrow-right-long"></i>
            </a>

            <a style={{ textDecoration: "none", paddingLeft:"50px" }} href={learnMore} >
              Learn more<i class="fa-solid fa-arrow-right-long"></i>
            </a>
          <div className="mt-3">
            <a style={{ textDecoration: "none" }} href={googlePlay} >
              <img src="media\googlePlayBadge.svg" alt="" />
            </a>
            <a style={{ textDecoration: "none" , paddingLeft:"40px"}} href={appStore} >
              <img src="media\appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
