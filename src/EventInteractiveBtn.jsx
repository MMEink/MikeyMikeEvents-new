import eventInteractiveImg from "./images/WebsiteRentals_Banner_3.jpg";

export default function EventDecorBtn() {
  return (
    <a href="https://www.interactiveeventrentals.com/" target={"_blank"}>
      <div className="eventDecorBtn">
        <img src={eventInteractiveImg} alt="event-decor-button" />
      </div>
    </a>
  );
}
