import React from "react";

function EventTile(events) {
  const eventsLoop = () =>
    events.map((event) => (
      <div>
        <h1>yo</h1>
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      </div>
    ));
  return eventsLoop;
}

export default EventTile;
