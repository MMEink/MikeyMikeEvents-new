import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import LogoCarousel from "../LogoSection";
import { AlertPageSection } from "../styled";

export default function NotFoundView() {
  return (
    <Row>
      <AlertPageSection>
        <h1>Oops... the page is not found</h1>
        <Link to={"/"}>
          <div>Click Here To Go Home</div>
        </Link>
      </AlertPageSection>
    </Row>
  );
}
