import { Row } from "react-bootstrap";
import logo from "./images/logos/MikeymikeEventslogo-white.png";
import emax from "./images/E-MaxHorizontal.svg";

export default function FooterView() {
  return (
    <Row>
      <Row className="footerSection">
        <div className="footer-left">
          <img src={logo} alt="logo" />
          <p>
            The Mikey Mike Events team is a group of experienced and
            dedicated individuals who make planning your special event an
            exciting process.
          </p>
          <p>
          Since 1994 we have been providing expert event planning services throughout New York and South Florida for Weddings, Bar & Bat Mitzvahs, Sweet 16s and milestone celebrations.
          </p>
        </div>
        <div className="footer-right">
          <h4>HOW TO REACH US</h4>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/MikeyMikeEvents/"
              target={"_blank"}
            >
              <i className="bi bi-facebook" style={{ marginRight: "1rem" }}></i>
            </a>
            <a
              href="https://www.instagram.com/mikeymikeevents/"
              target={"_blank"}
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <div className="footer-contact">
            <ul>
              <li>
                <i className="bi bi-telephone-fill blue-icon"></i>{" "}
                1-877-885-0705
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:info@mikeymikeevents.com">
                  info@mikeymikeevents.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Row>
      <Row className="disclaimerSection">
        <p>© COPYRIGHT 2023 MIKEY MIKE EVENTS - ALL RIGHTS RESERVED</p>
        <div className="poweredby">
          <span>POWERED BY:</span>
          <img src={emax} alt="emax" width={130} />
        </div>
      </Row>
    </Row>
  );
}
