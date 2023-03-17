import { Row } from "react-bootstrap";
import { useState } from "react";
import GallerySection from "../GallerySection";
import VerticalLayout from "../VerticalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";
export default function PerformersView() {
  const [data, setData] = useState(
    services.filter((e) => e.name === "Performers")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Performers - Mikey Mike Events</title>
          <meta
            name="description"
            content="We provide a variety of performers including magicians, circus-style acts, mentalists, tarot card readers, strolling acts, and much more."
          />
        </Helmet>
        <section className="eventHeader">Performers</section>
        <VerticalLayout data={data} />
        <section className="servicespg-gallery">
          <GallerySection gallery={data.gallery} />
        </section>
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
