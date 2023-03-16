import { Row } from "react-bootstrap";
import { useState } from "react";
import SwiperGallerySection from "../SwiperGallerySection";
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
          <title>Extra Entertainment & Novelty - Mikey Mike Events</title>
          <meta
            name="description"
            content="Get the best results from your email campaigns with professional help from E-Max Interactive. Contact us for the top email marketing services for your business."
          />
        </Helmet>
        <section className="eventHeader">Extra Entertainment & Novelty</section>
        <VerticalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
