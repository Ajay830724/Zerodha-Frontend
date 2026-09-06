export default function People() {
  return (
    <div className="container ">
      <div className="row pb-5">
        <h1 className="fs-4 text-center">People</h1>
      </div>
      <div className="row mb-5">
        <div className="col-5 text-center">
          <img
            style={{ borderRadius: "100%", width: "60%" }}
            src="media\nithinKamath.jpg"
            alt=""
          />
          <h2 className="fs-5 pt-3">Nithin Kamath</h2>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6" style={{ fontSize: "1.1rem" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on &nbsp;
            <a style={{ textDecoration: "none" }} href="">
              Homepage /{" "}
            </a>
            <a style={{ textDecoration: "none" }} href="">
              TradingQnA /{" "}
            </a>
            <a style={{ textDecoration: "none" }} href="">
              Twitter{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-5 mb-5 pt-5">
        <div className="col-4 text-center">
          <img
            style={{ borderRadius: "100%", width: "60%" }}
            src="media\nithinKamath.jpg"
            alt=""
          />
          <h2 className="fs-5 pt-3">Nikhil Kamath</h2>
          <p>Co-founder & CFO</p>
        </div>
        <div className="col-4 text-center">
          <img
            style={{ borderRadius: "100%", width: "60%" }}
            src="media\Kailash.jpg"
            alt=""
          />
          <h2 className="fs-5 pt-3">Dr. Kailash Nadh</h2>
          <p>CTO</p>
        </div>
        <div className="col-4 text-center">
          <img
            style={{ borderRadius: "100%", width: "60%" }}
            src="media\Venu.jpg"
            alt=""
          />
          <h2 className="fs-5 pt-3">Venu Madhav</h2>
          <p>COO</p>
        </div>
      </div>
      <div className="row mt-5 mb-5 pt-5">
        <div className="col-4 text-center">
          <img
            style={{ borderRadius: "100%", width: "60%" }}
            src="media\Seema.jpg"
            alt=""
          />
          <h2 className="fs-5 pt-3">Seema Patil</h2>
          <p>Director</p>
        </div>
        <div className="col-4 text-center">
          <img
            style={{ borderRadius: "100%", width: "60%" }}
            src="media/karthik.jpg"
            alt=""
          />
          <h2 className="fs-5 pt-3">Karthik Rangappa</h2>
          <p>Chief of Education</p>
        </div>
        <div className="col-4 text-center">
          <img
            style={{ borderRadius: "100%", width: "60%" }}
            src="media\Austin.jpg"
            alt=""
          />
          <h2 className="fs-5 pt-3">Austin Prakesh</h2>
          <p>Director Strategy</p>
        </div>
      </div>
    </div>
  );
}
