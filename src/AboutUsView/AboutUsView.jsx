import { Row } from "react-bootstrap";
import placeholder from "../images/mike.jpg";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HorizontalLayOutContainer } from "../styled";

export default function AboutUsView() {
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Professional Event Planning Agency - Mikey Mike Events</title>
          <meta
            name="description"
            content="With over 25 years in the industry Mikey Mike Events is there to provide you with all of your social event plannig needs in New York and Miami."
          />
        </Helmet>
        <section className="eventHeader">About Us</section>
        <HorizontalLayOutContainer>
          <article>
            <h3>ABOUT MIKEY MIKE EVENTS</h3>
            <h4>SOPHISTICATED FUN FOR A DISTINGUISHED CLIENTELE</h4>
            <p>
              For those special moments in life when we want to celebrate
              ourselves or those we care about, Mikey Mike Events is there to
              provide you with all of your social event needs. Utilize us as
              your full-service partner or as a boutique, and we will be sure to
              deliver beyond your expectations and within the confines of your
              budget. Whether it is a Wedding, Bar or Bat Mitzvah, Sweet 16, or
              other Milestone Celebration, we can provide you with all that you
              need to create a unique and memorable experience developed by some
              of the most creative minds in the event industry.
            </p>
            <Link to={"/contact"}>
              <button>Get Started</button>
            </Link>
          </article>
          <img src={placeholder} alt="mike photo" />
        </HorizontalLayOutContainer>
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
