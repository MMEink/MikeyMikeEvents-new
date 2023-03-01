import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashLink } from "react-router-hash-link";
//site css imports below
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Nav } from "react-bootstrap";

export default function SwiperSection() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={true}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides
      style={{ marginTop: "1rem", width: "100%" }}
    >
      <SwiperSlide key={1} className="header-slides slide1"></SwiperSlide>
      <SwiperSlide key={2} className="header-slides slide2"></SwiperSlide>
      <SwiperSlide key={3} className="header-slides slide3"></SwiperSlide>
      <SwiperSlide key={4} className="header-slides slide4"></SwiperSlide>

      <div className="slogan">
        <h2>THE MOST CREATIVE MINDS IN THE EVENT INDUSTRY</h2>
        <p className="subheader">
          FOR NEARLY 3 DECADES MIKEY MIKE EVENTS HAS BEEN MAKING YOUR SPECIAL
          EVENTS SOMETHING YOU AND YOUR GUESTS WILL NEVER FORGET!
        </p>
        <Nav.Link href="#aboutUs">
          <button>WHAT TYPE OF EVENT ARE YOU PLANNING? </button>
        </Nav.Link>
      </div>
    </Swiper>
  );
}
