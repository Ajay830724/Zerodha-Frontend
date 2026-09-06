export default function Universe() {
  return (
    <div className="container text-center m-5 p-5">
      <div className="row">
        <h3>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5">
        <div className="col">
          <a href="" style={{ textDecoration: "none" }}>
            <img className="uni-img" src="media\zerodhaFundhouse.png" alt="" />
            <p className="mt-3" style={{ fontSize: "14px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col">
          <a href="" style={{ textDecoration: "none" }}>
            <img className="uni-img" src="media\sensibull-logo.svg" alt="" />
            <p className="mt-3" style={{ fontSize: "14px" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>
        <div className="col">
          <a href="" style={{ textDecoration: "none" }}>
            <img className="uni-img" src="media\tijori.svg" alt="" />
            <p className="mt-3" style={{ fontSize: "14px" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <a href="" style={{ textDecoration: "none" }}>
            <img className="uni-img" src="media\streakLogo.png" alt="" />
            <p className="mt-3" style={{ fontSize: "14px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col">
          <a href="" style={{ textDecoration: "none" }}>
            <img className="uni-img" src="media\smallcaseLogo.png" alt="" />
            <p className="mt-3" style={{ fontSize: "14px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col">
          <a href="" style={{ textDecoration: "none" }}>
            <img className="uni-img" src="media\dittoLogo.png" alt="" />
            <p className="mt-3" style={{ fontSize: "14px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </a>
        </div>
      </div>
      <button
        style={{ border: "none" }}
        className="sign-btn mt-4 fs-5 fw-semibold btn btn-dark"
      >
        Sign up for free
      </button>
    </div>
  );
}
