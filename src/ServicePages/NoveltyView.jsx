import { Row } from "react-bootstrap";
import { useState } from "react";
import EventInteractiveBtn from "../EventInteractiveBtn";
import GallerySection from "../GallerySection";
import VerticalLayout from "../VerticalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";

export default function NoveltyView() {
  const [data, setData] = useState(
    services.filter((e) => e.name === "Extra Entertainment & Novelty")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Extra Entertainment & Novelty Services | New York & South Florida | Mikey Mike Events</title>
          <meta
            name="description"
            content="Providing the very best in entertianment and novelty fun for your event including games, activities, artists, and photo booths."
          />
        </Helmet>
        <section className="eventHeader">Extra Entertainment & Novelty</section>
        <VerticalLayout data={data} />
        <section className="servicespg-gallery">
          <GallerySection gallery={data.gallery} />
        </section>
        <Row className="eventDecorBtns" style={{ justifyContent: "center" }}>
          <EventInteractiveBtn />
        </Row>
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
