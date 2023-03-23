import { Row } from "react-bootstrap";
import { useState } from "react";
import SwiperGallerySection from "../SwiperGallerySection";
import HorizontalLayout from "../HorizontalLayout";
import FooterView from "../FooterView";
import VideoSection from "../VideoSection";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { events_swiper } from "../data";

export default function Sweet16sView() {
  const [data, setData] = useState(
    events_swiper.filter((e) => e.name === "sweet 16s")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Sweet 16 Event Planning in New York & Florida | Mikey Mike Events</title>
          <meta
            name="description"
            content="Mikey Mike Events specializes in creating unique experiences and providing professional event planning services for your child's Sweet 16 celebration in New York and Miami."
          />
        </Helmet>

        <section className="eventHeader">Sweet 16s</section>
        <h2 className="eventSubheader">
          We have all the services you need for the special day
        </h2>
        <SwiperGallerySection
          data={data.category}
          video={data.video}
          video_name={data.video_title}
          video_cover={data.video_cover}
        />
        <HorizontalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
