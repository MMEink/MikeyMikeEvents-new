import { Row } from "react-bootstrap";
import { useState } from "react";
import GallerySection from "../GallerySection";
import EventDecorBtn from "../EventDecorBtn";
import EventPropBtn from "../EventPropBtn";
import VerticalLayout from "../VerticalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";

export default function FloralDesignDecorView() {
  const [data, setData] = useState(
    services.filter((e) => e.name === "Floral Design & Decor")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Floral Designs - Mikey Mike Events</title>
          <meta
            name="description"
            content="Our floral arrangements and design components are thoughtfully crafted and styled to accompany your event's look and feel."
          />
        </Helmet>
        <section className="eventHeader">Floral Design & Decor</section>
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
