import { VerticalLayOutContainer } from "./styled";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//site css imports below
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function VerticalLayout({ data }) {
  return (
    <VerticalLayOutContainer>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={true}
        speed={3000}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        className="services-swiper"
      >
        {data.main_img.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={require(`${img}`)}
              alt="slide1"
              className="swiperGallery-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <article>
        <h3>{data.article_title}</h3>
        <h4>{data.article_subheader}</h4>
        <p>{data.article}</p>
      </article>
    </VerticalLayOutContainer>
  );
}
