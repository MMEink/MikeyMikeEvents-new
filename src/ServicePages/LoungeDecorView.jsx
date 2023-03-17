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
          <title>Lounge Decor & Event Rentals - Mikey Mike Events</title>
          <meta
            name="description"
            content="Get the best results from your email campaigns with professional help from E-Max Interactive. Contact us for the top email marketing services for your business."
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
