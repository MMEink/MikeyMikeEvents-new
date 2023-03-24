import { Row } from "react-bootstrap";
import { useState } from "react";
import GallerySection from "../GallerySection";
import VerticalLayout from "../VerticalLayout";
import EventDecorBtn from "../EventDecorBtn";
import EventPropBtn from "../EventPropBtn";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";

export default function LoungeDecorView() {
  const [data, setData] = useState(
    services.filter((e) => e.name === "Lounge Decor & Event Rentals")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Lounge Decor & Event Rentals | New York & South Florida | Mikey Mike Events</title>
          <meta
            name="description"
            content="We maintain an exclusive inventory of lounge furniture, décor accents and event rentals. We offer a wide selection of modern furnishings, rental bars, illuminated furniture and much more."
          />
        </Helmet>
        <section className="eventHeader">Lounge Decor & Event Rentals</section>
        <VerticalLayout data={data} />
        <section className="servicespg-gallery">
          <GallerySection gallery={data.gallery} />
        </section>
        <Row className="eventDecorBtns">
          <EventDecorBtn />
          <EventPropBtn />
        </Row>
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
