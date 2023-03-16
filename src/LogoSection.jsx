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
      name: "Studios",
      img: "./images/logos/daylight-studio-logo.jpg",
      url: "https://www.thestudiosevents.com/",
    },
    {
      name: "tardis",
      img: "./images/logos/Logo-final.png",
      url: "https://tardiscatering.com/",
    },
    {
      name: "williamsburg",
      img: "./images/logos/opera-house-logo.png",
      url: "https://www.williamsburgoperahouse.com/",
    },
    {
      name: "the 1912",
      img: "./images/logos/The1912.jpg",
      url: "https://www.1912events.com/",
    },
    {
      name: "441vintage",
      img: "./images/logos/441_Vintage_Logo-removebg-preview.png",
      url: "https://www.441vintage.com/",
    },
    {
      name: "the loft midtown",
      img: "./images/logos/lofts-venue-logo.jpg",
      url: "https://www.theloftinmidtown.com/",
    },
    {
      name: "midtown-veranda",
      img: "./images/logos/Logo_Spread-Midtown-Veranda_logotext.png",
      url: "https://www.midtownveranda.com/",
    },
    {
      name: "NY cruise",
      img: "./images/logos/terminal-logo12.jpg",
      url: "https://www.brooklynterminalevents.com/",
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
          We are Proud to be a Part of These Unique Exclusive Venues
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
