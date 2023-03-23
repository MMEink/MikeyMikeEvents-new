import { Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import SwiperGallerySection from "../SwiperGallerySection";
import VideoSection from "../VideoSection";
import HorizontalLayout from "../HorizontalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { events_swiper } from "../data";
import { BrochureBtn } from "../styled";

export default function MitzvahsView() {
  const [data, setData] = useState(
    events_swiper.filter((e) => e.name === "bar & bat mitzvahs")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Bar & Bat Mitzvah Event Planning Services in New York and Florida | Mikey Mike Events</title>
          <meta
            name="description"
            content="Our seasoned team of event planners have nearly three decades of experience producing amazing Bar & Bat Mitzvahs. We will assist you in creating an event that is designed to fit your needs while keeping your budget in mind."
          />
        </Helmet>

        <section className="eventHeader">Bar & Bat Mitzvahs</section>
        <h2 className="eventSubheader">
          We have all the services you need for the special day
        </h2>
        <SwiperGallerySection
          data={data.category}
          video={data.video}
          video_name={data.video_title}
          video_cover={data.video_cover}
        />
        <section style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to={"/mitzvah-brochure.html"} target={"_blank"}>
            <BrochureBtn>
              Click To View Our Bar & Bat Mitzvah Brochure <i class="bi bi-book"></i>
            </BrochureBtn>
          </Link>
        </section>
        <HorizontalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
