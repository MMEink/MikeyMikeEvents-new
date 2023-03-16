import { Row } from "react-bootstrap";
import { useState } from "react";
import SwiperGallerySection from "../SwiperGallerySection";
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
        <section className="eventHeader">Floral Design</section>
        <VerticalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
