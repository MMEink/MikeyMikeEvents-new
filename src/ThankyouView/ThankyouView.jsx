import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoSection";
import { AlertPageSection } from "../styled";

export default function ThankyouView() {
  return (
    <Row>
      <AlertPageSection>
        <h1>Thank you for contacting us.</h1>
        <p className="subheader">We will be in touch shortly</p>
        <div className="material-symbols-outlined">sentiment_satisfied</div>
        <Link to={"/"}>
          <div>Click Here To Go Home</div>
        </Link>
      </AlertPageSection>
    </Row>
  );
}
