import { Row, Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Pagination, Navigation } from "swiper";
import { ServicePagesPortfolio, ModalCloseBtn } from "./styled";
import arrow from "./images/1522547488.svg";
import { Link } from "react-router-dom";
import video from "./images/video.svg";
import expand from "./images/resize-svgrepo-com.svg";

export default function GallerySection({ gallery }) {
  const [hoverImg, setHoverImg] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setSelectedImg("");
  };
  const handleShow = (image) => {
    setShow(true);
    setSelectedImg(image);
  };
  return (
    <Row
      style={{
        margin: "auto",
        backgroundColor: "white",
        letterSpacing: "2px",
        position: "relative",
        top: "-50px",
      }}
    >
      <ServicePagesPortfolio>
        {gallery.map((p, i) => (
          <div
            key={i}
            onClick={() =>
              window.innerWidth < 900 && !p.redirect_link && handleShow(p)
            }
            onMouseEnter={() => setHoverImg(p)}
            onMouseLeave={() => setHoverImg("")}
            className="portfolioCard"
          >
            <img src={require(`${p}`)} className="coverImg" alt={p} />
            {hoverImg === p && (
              <div
                style={{
                  position: "absolute",
                  cursor: "pointer",
                  bottom: "0",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => handleShow(p)}
              >
                <img src={expand} alt="icon" />
              </div>
            )}
            {/* {hoverImg === p && (
              <div
                style={{
                  position: "absolute",
                  cursor: "pointer",
                  bottom: "15%",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => handleShow(p)}
              >
                <img src={video} alt={video} />
              </div>
            )} */}
          </div>
        ))}
      </ServicePagesPortfolio>
      <Modal show={show} onHide={handleClose}>
        <ModalCloseBtn onClick={handleClose}>close</ModalCloseBtn>
        <ModalCloseBtn onClick={handleClose}>close</ModalCloseBtn>
        {selectedImg && (
          <img
            src={require(`${selectedImg}`)}
            width="80%"
            style={{ alignSelf: "center" }}
            className="modal_singleImg"
            loading="lazy"
            alt="images"
          />
        )}
        {/* {selectedVideo && (
          <iframe
            title={selectedVideo}
            src={selectedVideo}
            allowFullScreen
            width={window.innerWidth > 800 ? "750px" : "400px"}
            height={window.innerWidth > 800 ? "600px" : "300px"}
            style={{ alignSelf: "center" }}
            loading="lazy"
          ></iframe>
        )} */}
      </Modal>
    </Row>
  );
}
