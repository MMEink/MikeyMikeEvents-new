import NavbarView from "./Navbar";
import MainView from "./MainView/Main";
import AboutUsView from "./AboutUsView/AboutUsView";
import ContactView from "./ContactView/ContactView";
import EventDesignDecorView from "./ServicePages/EventDesignDecorView";
import LoungeDecorView from "./ServicePages/LoungeDecorView";
import LightingView from "./ServicePages/LightingView";
import WeddingsView from "./Events/WeddingsView";
import FloralDesignView from "./ServicePages/FloralDesignView";
import EntertainmentView from "./ServicePages/EntertainmentView";
import MilestoneView from "./Events/MilestoneView";
import VenuesView from "./VenuesView/VenuesView";
import MitzvahsView from "./Events/MitzvahsView";
import Sweet16sView from "./Events/Sweet16sView";
import NotFoundView from "./NotFoundView/NotFoundView";
import ThankyouView from "./ThankyouView/ThankyouView";
import PerformersView from "./ServicePages/PerformersView";
import ScrollToTop from "./ScrollToTop";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Brochure from "./Events/Brochure";
import { brochurePdf } from "./data";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const onScrollUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <Router className="App">
      <ScrollToTop />
      <NavbarView />
      <Row>
        <Routes>
          <Route path="/">
            <Route index element={<MainView />}></Route>
            <Route path="aboutus" element={<AboutUsView />}></Route>
            <Route path="contact" element={<ContactView />}></Route>
            <Route
              path="event-design-decor"
              element={<EventDesignDecorView />}
            ></Route>
            <Route path="entertainment" element={<EntertainmentView />}></Route>
            <Route path="floral-design" element={<FloralDesignView />}></Route>
            <Route path="*" element={<NotFoundView />}></Route>
            <Route path="thankyou" element={<ThankyouView />}></Route>
            <Route path="lighting" element={<LightingView />}></Route>
            <Route path="performers" element={<PerformersView />}></Route>
            <Route path="lounge-decor" element={<LoungeDecorView />}></Route>
            <Route path="weddings" element={<WeddingsView />}></Route>
            <Route path="sweet16s" element={<Sweet16sView />}></Route>
            <Route path="venues" element={<VenuesView />}></Route>
            <Route
              path="milestone-celebrations"
              element={<MilestoneView />}
            ></Route>
            <Route path="mitzvahs" element={<MitzvahsView />}></Route>
            <Route
              path="wedding-brochure"
              element={
                <Brochure
                  pdf={brochurePdf.find((e) => e.name === "wedding").pdf}
                />
              }
            ></Route>
            <Route
              path="mitzvahs-brochure"
              element={
                <Brochure
                  pdf={brochurePdf.find((e) => e.name === "wedding").pdf}
                />
              }
            ></Route>
          </Route>
        </Routes>

        <Button
          className="scrollUpBtn fixed-bottom"
          style={{ display: visible ? "flex" : "none" }}
          onClick={() => onScrollUpClick()}
        >
          &#10094;
        </Button>
      </Row>
    </Router>
  );
}

export default App;
