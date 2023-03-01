import logo from "./images/logos/MikeymikeEventslogo.png";
import { Navbar, Button } from "react-bootstrap";
import arrow from "./images/1522547488.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DropdownContainer, NavBtnContainer, EffectButton } from "./styled";
import { services, events, search } from "./data";

export default function NavbarView() {
  const [dropdownToggle, setDropdownToggle] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const InputOnChange = (e) => {
    setShowSuggestion(true);
    const value = e.target.value;
    if (value.length < 1) {
      setSuggestion([]);
      setShowSuggestion(false);
    }
    const result = search.filter(
      (s) => s.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setSuggestion(result);
  };
  return (
    <Navbar sticky="top" variant="light" expand="lg" expanded={expanded}>
      <div className="side-nav">
        <ul className="infobar">
          <li>
            <i className="bi bi-telephone-fill blue-icon"></i> 1-877-885-0705
          </li>
          <li>
            <a
              href="https://www.facebook.com/MikeyMikeEvents/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mikeymikeevents/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
        {window.innerWidth > 600 && (
          <div className="searchSection">
            <div className="searchbar">
              <input
                type="text"
                name="keys"
                id="searchInput"
                maxLength={128}
                placeholder="Search"
                onChange={(e) => InputOnChange(e)}
              />
              <i className="bi bi-search"></i>
            </div>
            {showSuggestion && (
              <ul className="suggestions">
                {suggestion.length >= 1 ? (
                  suggestion.map((s, i) =>
                    s.link ? (
                      <Link to={`/${s.link}`}>
                        <li key={i}>{s.name}</li>
                      </Link>
                    ) : (
                      <a href={s.a} target={"_blank"} rel="noreferrer">
                        <li>
                          {s.text}
                          <i
                            class="bi bi-box-arrow-right"
                            style={{ marginLeft: "5px", color: "#007ebd" }}
                          ></i>
                        </li>
                      </a>
                    )
                  )
                ) : (
                  <li>
                    Sorry, your search did not match with any of our content.
                    Please try something else.
                  </li>
                )}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="main-nav">
        <div className="navbar-left">
          <Navbar.Brand>
            <Link to={"/"}>
              <img src={logo} alt="logo" className="navbar-logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="navBtns">
            {window.innerWidth < 600 && (
              <div className="searchSection">
                <div className="searchbar">
                  <input
                    type="text"
                    name="keys"
                    id="searchInput"
                    maxLength={128}
                    placeholder="Search"
                    onChange={(e) => InputOnChange(e)}
                  />
                  <i className="bi bi-search"></i>
                </div>
                {showSuggestion && (
                  <ul className="suggestions">
                    {suggestion.length >= 1 ? (
                      suggestion.map((s, i) =>
                        s.link ? (
                          <Link to={`/${s.link}`}>
                            <li key={i}>{s.name}</li>
                          </Link>
                        ) : (
                          <a href={s.a} target={"_blank"} rel="noreferrer">
                            <li>
                              {s.text}
                              <i
                                class="bi bi-box-arrow-right"
                                style={{ marginLeft: "5px", color: "#007ebd" }}
                              ></i>
                            </li>
                          </a>
                        )
                      )
                    ) : (
                      <li>
                        Sorry, your search did not match with any of our
                        content. Please try something else.
                      </li>
                    )}
                  </ul>
                )}
              </div>
            )}
            <NavBtnContainer>
              <Link to={"/"} onClick={() => setExpanded(false)}>
                <Button className="navBtn">
                  <span>Home</span>
                </Button>
              </Link>
            </NavBtnContainer>
            <NavBtnContainer>
              <Link to={"/aboutus"} onClick={() => setExpanded(false)}>
                <Button className="navBtn">
                  <span>about Us</span>
                </Button>
              </Link>
            </NavBtnContainer>
            <NavBtnContainer
              onMouseEnter={() => setDropdownToggle("services")}
              onMouseLeave={() => setDropdownToggle("")}
            >
              {window.innerWidth >= 900 ? (
                <Button className="navBtn" onClick={() => setExpanded(false)}>
                  <span>Services</span>
                </Button>
              ) : (
                <Button
                  className="navBtn"
                  onClick={() =>
                    dropdownToggle === "services"
                      ? setDropdownToggle("")
                      : setDropdownToggle("services")
                  }
                >
                  <span>Services</span>
                  {dropdownToggle ? (
                    <i
                      class="bi bi-caret-up-fill"
                      style={{ color: "#007ebd" }}
                    ></i>
                  ) : (
                    <i
                      class="bi bi-caret-down-fill"
                      style={{ color: "#007ebd" }}
                    ></i>
                  )}
                </Button>
              )}
              {dropdownToggle === "services" && (
                <DropdownContainer>
                  <div>
                    <ul>
                      {services.map((service, i) =>
                        service.name === "Food & Beverage" ? (
                          <a
                            href={service.link}
                            onClick={() => {
                              setDropdownToggle(false);
                              setExpanded(false);
                            }}
                            target="_blank"
                            rel="noreferrer"
                            key={i}
                          >
                            <li key={i}>{service.name}</li>
                          </a>
                        ) : (
                          <Link
                            to={`/${service.link}`}
                            onClick={() => {
                              setDropdownToggle(false);
                              setExpanded(false);
                            }}
                            key={i}
                          >
                            <li key={i}>{service.name}</li>
                          </Link>
                        )
                      )}
                    </ul>
                  </div>
                </DropdownContainer>
              )}
            </NavBtnContainer>
            <NavBtnContainer
              onMouseEnter={() => setDropdownToggle("events")}
              onMouseLeave={() => setDropdownToggle("")}
            >
              {window.innerWidth >= 900 ? (
                <Button className="navBtn" onClick={() => setExpanded(false)}>
                  <span>Events</span>
                </Button>
              ) : (
                <Button
                  className="navBtn"
                  onClick={() =>
                    dropdownToggle === "events"
                      ? setDropdownToggle("")
                      : setDropdownToggle("events")
                  }
                >
                  <span>Events</span>
                  {dropdownToggle ? (
                    <i
                      class="bi bi-caret-up-fill"
                      style={{ color: "#007ebd" }}
                    ></i>
                  ) : (
                    <i
                      class="bi bi-caret-down-fill"
                      style={{ color: "#007ebd" }}
                    ></i>
                  )}
                </Button>
              )}
              {dropdownToggle === "events" && (
                <DropdownContainer>
                  <div>
                    <ul>
                      {events.map((event, i) => (
                        <Link
                          to={`/${event.link}`}
                          onClick={() => {
                            setDropdownToggle("");
                            setExpanded(false);
                          }}
                          key={i}
                        >
                          <li key={i}>{event.name}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </DropdownContainer>
              )}
            </NavBtnContainer>
            <NavBtnContainer>
              <Link to={"/venues"} onClick={() => setExpanded(false)}>
                <Button className="navBtn">
                  <span>Venues</span>
                </Button>
              </Link>
            </NavBtnContainer>
            <NavBtnContainer>
              <Link to={"/contact"} onClick={() => setExpanded(false)}>
                <Button className="navBtn">
                  <span>Contact Us</span>
                </Button>
              </Link>
            </NavBtnContainer>
          </Navbar.Collapse>
        </div>
        <Link
          to={"/contact"}
          onClick={() => setExpanded(false)}
          className="navbar-right"
        >
          <div>
            <EffectButton>
              <span>Get Started</span>
            </EffectButton>
          </div>
        </Link>
      </div>
    </Navbar>
  );
}
