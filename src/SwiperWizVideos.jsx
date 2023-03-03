import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SwiperGalleryNav, SmallerEffectButton } from "./styled";
//site css imports below
import { useState, useEffect } from "react";

export default function SwiperWizVideos({ data }) {
  const [selected, setSelected] = useState(data[0]);
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
      {selected.image ? (
        <div className="imageWizVideos">
          <img
            src={require(`${selected.image}`)}
            alt="slide1"
            className="swiperGallery-image"
          />
          <p>
            {selected.describe} <br />
            {selected.link && (
              <Link to={selected.link}>
                <SmallerEffectButton>Learn More</SmallerEffectButton>
              </Link>
            )}
          </p>
        </div>
      ) : (
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
