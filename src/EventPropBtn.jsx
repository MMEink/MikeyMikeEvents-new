import eventPropImg from "./images/WebsiteRentals_Banner_2.jpg";

export default function EventPropBtn() {
  return (
    <a href="https://www.eventproprentals.com/" target={"_blank"}>
      <div className="eventDecorBtn">
        <img src={eventPropImg} alt="event-prop-button" />
      </div>
    </a>
  );
}
