import { Row } from "react-bootstrap";
import { useState } from "react";
import GallerySection from "../GallerySection";
import VerticalLayout from "../VerticalLayout";
import EventPropBtn from "../EventPropBtn";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";

export default function ThemePropsView() {
  const [data, setData] = useState(
    services.filter((e) => e.name === "Theme Props")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Themed Prop Rentals | New York & South Florida | Mikey Mike Events</title>
          <meta
            name="description"
            content="Our inventory of eclectic themed props contains authentic items from celebrated time periods and themed events."
          />
        </Helmet>
        <section className="eventHeader">Theme Props</section>
        <VerticalLayout data={data} />
        <section className="servicespg-gallery">
          <GallerySection gallery={data.gallery} />
        </section>
        <Row className="eventDecorBtns" style={{ justifyContent: "center" }}>
          <EventPropBtn />
        </Row>
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
