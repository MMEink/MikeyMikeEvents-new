import { Row } from "react-bootstrap";
import { homepageIntro } from "../data";
import { Link } from "react-router-dom";
import "../css/AboutUsSection.css";

export default function AboutUsSection() {
  return (
    <Row className="aboutusSection" id="aboutUs">
      <h2>Let's start planning your event!</h2>
      <section className="flip-section">
        {homepageIntro.map((flip, i) => (
          <div className="flip-container" key={i}>
            <div className="flipper">
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
