import { Row } from "react-bootstrap";
import { useState } from "react";
import SwiperGallerySection from "../SwiperGallerySection";
import VideoSection from "../VideoSection";
import HorizontalLayout from "../HorizontalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { events_swiper } from "../data";

export default function MitzvahsView() {
  const [data, setData] = useState(
    events_swiper.filter((e) => e.name === "bar & bat mitzvahs")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Bar & Bat Mitzvahs - Mikey Mike Events</title>
          <meta
            name="description"
            content="Plan your Bar & Bat Mitzvah with Mikey Mike Events. Our experienced party planning team will guide you in developing a Mitzvah."
          />
        </Helmet>

        <section className="eventHeader">Bar & Bat Mitzvahs</section>
        <h2 className="eventSubheader">
          We have all the services you need for the special day
        </h2>
        <SwiperGallerySection data={data.category} />
        {data.video && (
          <VideoSection
            videoCover={data.video_cover}
            video={data.video}
            video_title={data.video_title}
          />
        )}
        <HorizontalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
