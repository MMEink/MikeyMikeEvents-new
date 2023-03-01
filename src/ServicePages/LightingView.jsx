import { Row } from "react-bootstrap";
import { useState } from "react";
import SwiperGallerySection from "../SwiperGallerySection";
import VerticalLayout from "../VerticalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";
export default function LightingView() {
  const [data, setData] = useState(
    services.filter((e) => e.name === "Lighting")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Lighting - Mikey Mike Events</title>
          <meta
            name="description"
            content="Our team of lighting designers will set the mood and ambiance for your event by guiding you through our selection of lighting services."
          />
        </Helmet>
        <section className="eventHeader">Lighting</section>
        <VerticalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
