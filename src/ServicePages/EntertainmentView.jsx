import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import SwiperWizVideos from "../SwiperWizVideos";
import VerticalLayout from "../VerticalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";
import VideoSection from "../VideoSection";
import { GreyEffectButton } from "../styled";

export default function EntertainmentView() {
  const [data, setData] = useState(
    services.filter(
      (e) => e.name === "Musical Entertainment - Games and More"
    )[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Music Entertainment - Mikey Mike Events</title>
          <meta
            name="description"
            content="Our entertainment services are extensive, providing you with access to celebrity talent and speakers and talented musicians and performers."
          />
        </Helmet>
        <section className="eventHeader">Musical Entertainment</section>
        <VerticalLayout data={data} />
        <SwiperWizVideos data={data.subheader} />
        {data.video && (
          <VideoSection
            videoCover={data.video_cover}
            video={data.video}
            video_title={data.video_title}
          />
        )}

        <SwiperWizVideos data={data.category} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
