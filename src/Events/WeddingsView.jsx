import { Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import SwiperGallerySection from "../SwiperGallerySection";
import HorizontalLayout from "../HorizontalLayout";
import VideoSection from "../VideoSection";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { events_swiper } from "../data";
import { BrochureBtn } from "../styled";

export default function WeddingsView() {
  const [data, setData] = useState(
    events_swiper.filter((e) => e.name === "weddings")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Wedding Planning Services in New York & Florida | Mikey Mike Events</title>
          <meta
            name="description"
            content="We are committed to crafting your dream wedding into reality. Our attention to detail and seamless execution of Wedding services makes us your number one Wedding resource when planning your special day."
          />
        </Helmet>

        <section className="eventHeader">Weddings</section>
        <h2 className="eventSubheader">
          We have all the services you need for your big day
        </h2>
        <SwiperGallerySection
          data={data.category}
          video={data.video}
          video_name={data.video_title}
          video_cover={data.video_cover}
        />
        <section style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to={"/wedding-brochure.html"} target={"_blank"}>
            <BrochureBtn>
              Click To View Our Wedding Brochure <i class="bi bi-book"></i>
            </BrochureBtn>
          </Link>
        </section>
        <HorizontalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
