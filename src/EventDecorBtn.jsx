import eventDecorImg from "./images/WebsiteRentals_Banner_1.jpg";

export default function EventDecorBtn() {
  return (
    <a href="https://www.eventdecorrentals.com/" target={"_blank"}>
      <div className="eventDecorBtn">
        <img src={eventDecorImg} alt="event-decor-button" />
      </div>
    </a>
  );
}
