import EventTile from "./eventTile";
import React from "react";
// import { QUERY_EVENT, QUERY_USER } from "../utils/queries";

function YourEvents() {
  const events = [
    {
      _id: 1,
      title: "title",
    },
    {
      _id: 2,
      title: "title2",
    },
  ];
  return (
    <div>
      <h1>YourEventsRoute</h1>
      <EventTile events={events} />
    </div>
  );
}

export default YourEvents;
