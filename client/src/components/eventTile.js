import React from "react";
import { Link } from "react-router-dom";

const EventList = (hostingOrInvited) => {
  let eventsToRender = [];

  if (eventsToRender.length > []) {
    return (
      <div className="yourEvents">
        {eventsToRender.map((event) => (
          <Link key={event.id} link={"event/" + event.id}>
            <div className="eventDiv">
              <div
                className="eventTheme"
                style={{ backgroundColor: event.theme }}
              ></div>
              <p className="eventText">Host: {event.host}</p>
              <h3 className="eventText">{event.title}</h3>
              <p className="eventText">{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  } else {
    return (
      <p className="noEvents">
        You have no events at this time, create an event to see it displayed
        here.
      </p>
    );
  }
};

export default EventList;
