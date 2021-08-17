// import EventTile from "./eventTile";
import React from "react";
// import { QUERY_EVENT, QUERY_USER } from "../utils/queries";
import EventList from "./eventTile";

function YourEvents() {
  return (
    <div className="eventsDiv">
      <h3>Hosting</h3>
      <EventList hostingOrInvited={"hosting"} />
      <h3>Invited</h3>
      <EventList hostingOrInvited={"invited"} />
    </div>
  );
}

export default YourEvents;
