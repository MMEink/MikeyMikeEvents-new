import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row } from "react-bootstrap";
import { SwiperGalleryNav } from "./styled";
import GallerySection from "./GallerySection";
//site css imports below
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";

export default function SwiperGallerySection({ data }) {
  const [selected_img, setSelectedImg] = useState(data[0].images);
  const [selected_gallery, setSelectedGallery] = useState(data[0].gallery);
  const [selected_describe, setSelectedDescribe] = useState(data[0].describe);
  const [selected, setSelected] = useState(data[0].name);
  useEffect(() => {
    console.log(selected);
    setSelectedImg(data.filter((c) => c.name === selected)[0].images);
    setSelectedDescribe(data.filter((c) => c.name === selected)[0].describe);
    selected !== "catering" &&
      setSelectedGallery(data.filter((c) => c.name === selected)[0].gallery);
  }, [selected]);

  return (
    <Row className="swipperGallery-container">
      <SwiperGalleryNav>
        {data.map((e, i) => (
          <li
            key={i}
            onClick={() => setSelected(e.name)}
            className={selected === e.name ? "selectedGalleryBtn" : "noeffect"}
          >
            {e.name}
          </li>
        ))}
      </SwiperGalleryNav>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={true}
        speed={3000}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        className="swiperGallery-wrapper"
      >
        {selected_img.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={require(`${img}`)}
              alt="slide1"
              className="swiperGallery-image"
            />

            <p>
              {selected === "catering" ? (
                <a
                  href="https://tardiscatering.com/"
                  target={"_blank"}
                  style={{
                    textAlign: "center",
                    display: "block",
                    textDecoration: "underline",
                    fontSize: "1.5rem",
                  }}
                >
                  Visit Our Tardi's Catering Site
                </a>
              ) : (
                selected_describe
              )}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {selected !== "catering" && selected_gallery && (
        <GallerySection gallery={selected_gallery} />
      )}
    </Row>
  );
}
