import React from "react";
import '../css/home.css';
import footer from "./images/footer1.png";

const Footer = () => {
  return (
    <>
      <div className="contai">
        <footer className="footerBg text-white text-center text-lg-start container-fluid">
          {/* <!-- Grid container --> */}
          <div className="container-fluid p-4">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0 footer-logo a">
                <img
                  src={footer}
                  alt="private colleges in pune for engineering"
                />
                <p>
                  D Y Patil International University, Sector 29, Nigdi
                  Pradhikaran, Akurdi, Pune 411044.
                </p>
                <p>
                  <span className="bold">Phone:</span> +91 9071123434
                </p>
                <p>
                  <span className="bold">Website:</span>{" "}
                  <a href="http://dypiu.ac.in">http://dypiu.ac.in</a>
                </p>
                <p>
                  <span className="bold">Email id:</span>{" "}
                  <a href="mailto:info@dypiu.ac.in">info@dypiu.ac.in</a>
                </p>
              </div>
              <div>
                <a href="https://www.facebook.com/DYPIUAkurdi/" target="_blank">
                  <div className="ficon fb"></div>
                </a>
                <a href="https://twitter.com/DYPIU_AKURDI" target="_blank">
                  <div className="ficon tw"></div>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC-A2ntuQDvW1Iw5YO99xVkg?view_as=subscriber"
                  target="_blank"
                >
                  <div className="ficon yt"></div>
                </a>
                <a
                  href="https://www.instagram.com/dypiu_akurdi/"
                  target="_blank"
                >
                  <div className="ficon insta"></div>
                </a>
                <a
                  href="https://www.linkedin.com/company/d-y-patil-international-university-akurdi-pune/"
                  target="_blank"
                >
                  <div className="ficon linkdn"></div>
                </a>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 link1">
                  <h5 className="text-uppercase mb-0">Home </h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-white">
                        Classroom
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Exam
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Calender
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Faculty
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Lost and Found
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;