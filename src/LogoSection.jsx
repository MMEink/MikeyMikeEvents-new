//site css imports below
import { Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./css/venue-page.css";

export default function LogoSection() {
  const logos = [
    {
      name: "48wall",
      img: "./images/logos/48-wall-events.V2-B&G-alpha.png",
      url: "https://www.48wallnyc.com/",
    },
    {
      name: "artistry",
      img: "./images/logos/logo-final-NEW-01.png",
      url: "https://www.eventsatartistry.com/",
    },
    {
      name: "MMEink",
      img: "./images/logos/MMEink-Logo_on blue.png",
      url: "https://www.mmeink.com/",
    },
    {
      name: "tardis",
      img: "./images/logos/Logo-final.png",
      url: "https://tardiscatering.com/",
    },
    {
      name: "mikeyEvents",
      img: "./images/logos/MikeymikeEventslogo.png",
      url: "https://mikeymikeevents.com/",
    },
    {
      name: "vpp",
      img: "./images/logos/vpp-logo.png",
      url: "https://www.virtualpartyplanner.com/",
    },
    {
      name: "441vintage",
      img: "./images/logos/441_Vintage_Logo-removebg-preview.png",
      url: "https://www.441vintage.com/",
    },
    {
      name: "infuso",
      img: "./images/logos/infuso.png",
      url: "https://www.infusopops.com/",
    },
    {
      name: "midtown-veranda",
      img: "./images/logos/Logo_Spread-Midtown-Veranda_logotext.png",
      url: "https://www.midtownveranda.com/",
    },
    {
      name: "emena",
      img: "./images/logos/emenalogo-message-2.png",
      url: "https://emenaspa.com/",
    },
  ];
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Venues - Mikey Mike Events</title>
          <meta
            name="description"
            content="Our experienced team of event planners and designers will help you plan and orchestrate your Wedding from start to finish."
          />
        </Helmet>

        <section className="eventHeader">Venues</section>
        <h2 className="eventSubheader">
          Plan Your Event at One of Our Exclusive Venues
        </h2>

        <section className="logoCarousel">
          {logos.map((l, i) => (
            <a href={l.url} target={"_blank"}>
              <div className="venue">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={require(`${l.img}`)} />
              </div>
            </a>
          ))}
        </section>
      </Row>
    </HelmetProvider>
  );
}
