import { Row } from "react-bootstrap";
import { useState } from "react";
import SwiperGallerySection from "../SwiperGallerySection";
import VerticalLayout from "../VerticalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";

export default function EventDesignDecorView() {
  const [data, setData] = useState(
    services.filter((e) => e.name === "Event Design And Decor")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Event Design and Decor - Mikey Mike Events</title>
          <meta
            name="description"
            content="Mikey Mike Events can serve you as a full-service boutique. We can create a direction for you or have your own vision brought to life."
          />
        </Helmet>
        <section className="eventHeader">Event Design And Decor</section>
        <VerticalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
