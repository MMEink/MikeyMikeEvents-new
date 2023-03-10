import SwiperSection from "./SwiperSection";
import AboutUsSection from "./AboutUsSection";
import { Row } from "react-bootstrap";
import FooterView from "../FooterView";

function MainView() {
  const homepgVideo = {
    video_cover: "./images/mikey-back-screen.png",
    video: "https://player.vimeo.com/video/560020648?dnt=1&app_id=122963",
    video_title: "MIKE MIKE EVENTS IS BACK!",
  };

  return (
    <Row>
      <SwiperSection />
      <AboutUsSection />
      <FooterView />
    </Row>
  );
}

export default MainView;
