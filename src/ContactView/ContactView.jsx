import { Row } from "react-bootstrap";
import ContactForm from "../ContactForm";
import { HashLink } from "react-router-hash-link";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FooterView from "../FooterView";

function ContactView() {
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Contact Us - Mikey Mike Events</title>
          <meta
            name="description"
            content="Mikey Mike Events has the ability to deliver full event production services internally for your next special occasion. Contact us now!"
          />
        </Helmet>
        <section className="eventHeader">Contact Us</section>
        <h2 className="eventSubheader">Love to hear from you</h2>
        <ContactForm />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}

export default ContactView;
