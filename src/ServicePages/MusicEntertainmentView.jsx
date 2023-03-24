import { Row } from "react-bootstrap";
import GallerySection from "../GallerySection";
import { useState } from "react";
import SwiperWizVideos from "../SwiperWizVideos";
import VerticalLayout from "../VerticalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";

export default function MusicEntertainmentView() {
  const [data, setData] = useState(
    services.filter((e) => e.name === "Musical Entertainment")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Musical Event Entertainment | New York & South Florida | Mikey Mike Events</title>
          <meta
            name="description"
            content="Our event entertainment services are extensive, providing you with access to talented musicians, DJs, MCs and performers."
          />
        </Helmet>
        <section className="eventHeader">Musical Entertainment</section>
        <VerticalLayout data={data} />
        <section className="servicespg-gallery" style={{ marginBottom: "0" }}>
          <GallerySection gallery={data.gallery} />
        </section>
        <SwiperWizVideos data={data.subheader} />

        <SwiperWizVideos data={data.category} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
