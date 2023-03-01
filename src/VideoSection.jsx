import { Row, Modal } from "react-bootstrap";
import { useState } from "react";
import { ModalCloseBtn, VideoSectionContainer } from "./styled";

export default function VideoSection({ videoCover, video, video_title }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <Row
      style={{
        margin: "0 auto 2rem",
      }}
    >
      <VideoSectionContainer>
        <div
          onClick={() => handleShow()}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <img
            src={require(`${videoCover}`)}
            className="coverImg"
            alt={video_title}
          />
          <div className="videoPlay">
            <i class="bi bi-play-fill"></i>
          </div>
        </div>

        <div className="textSection">
          <h4>{video_title}</h4>
          <a
            href="https://www.instagram.com/MikeyMikeEvents/"
            target={"_blank"}
            rel="noreferrer"
          >
            Check Our Instagram For More Live Reels
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </VideoSectionContainer>
      <Modal show={show} onHide={handleClose}>
        <ModalCloseBtn onClick={handleClose}>close</ModalCloseBtn>
        <ModalCloseBtn onClick={handleClose}>close</ModalCloseBtn>
        <iframe
          title={video_title}
          src={video}
          allowFullScreen
          width={window.innerWidth > 800 ? "750px" : "400px"}
          height={window.innerWidth > 800 ? "600px" : "300px"}
          style={{ alignSelf: "center" }}
          loading="lazy"
        ></iframe>
      </Modal>
    </Row>
  );
}
