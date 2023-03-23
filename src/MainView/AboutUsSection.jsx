import { Row } from "react-bootstrap";
import { useState } from "react";
import { homepageIntro } from "../data";
import { Link } from "react-router-dom";
import "../css/AboutUsSection.css";

export default function AboutUsSection() {
  const [clicked, setClicked] = useState("");
  return (
    <Row className="aboutusSection" id="aboutUs">
      <h2>Let's Start Planning Your Event</h2>
      <h3 class="provideservice">Providing Services in New York and Florida</h3>
      <section className="flip-section">
        {homepageIntro.map((flip, i) => (
          <div
            className="flip-container"
            key={i}
            onClick={() => window.innerWidth <= 900 && setClicked(flip.header)}
          >
            <div
              className="flipper"
              style={
                clicked === flip.header
                  ? { transform: "rotateY(180deg)", transformOrigin: "center" }
                  : {}
              }
            >
              <div className="front">
                <h3>{flip.header}</h3>
                <img src={require(`${flip.img}`)} alt="flip-image" />
              </div>
              <div className="back">
                <p>{flip.describe}</p>
                <Link to={flip.learnmore_link}>Learn More</Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      
    </Row>
  );
}
