import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperGalleryNav, SmallerEffectButton } from "./styled";
//site css imports below
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";

export default function SwiperWizVideos({ data }) {
  const [selected, setSelected] = useState(data[0]);
  console.log(data[0].image);
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <Row className="swipperGallery-container marginbt">
      <SwiperGalleryNav>
        {data.map((e, i) => (
          <li
            key={i}
            onClick={() => setSelected(e)}
            className={
              selected.name === e.name ? "selectedGalleryBtn" : "noeffect"
            }
          >
            <i class={e.icon ? e.icon : ""}></i> {e.name}
          </li>
        ))}
      </SwiperGalleryNav>
      {selected.image && (
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={true}
          speed={3000}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides
          className="swipervideo-wrapper"
        >
          {selected.image.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={require(`${img}`)}
                alt="slide1"
                className="swiperGallery-image"
              />
              <p>{selected.describe}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {selected.video && (
        <iframe
          title={selected.name}
          src={selected.video}
          allowFullScreen
          loading="lazy"
          width="1200px"
          height="675px"
          style={{ position: "relative" }}
          className="swiper-video"
        ></iframe>
      )}
    </Row>
  );
}
