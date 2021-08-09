import EventTile from "./eventTile";
import React from "react";
// import { QUERY_EVENT, QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

function YourEvents() {
  const user = Auth.getProfile().data;

  return (
    <div className="yourEvents">
      <div className="eventDiv">
        <h1>Hosting</h1>
        <EventTile events={user.hosting} />
      </div>
      <div className="eventDiv">
        <h1>Invited</h1>

        <EventTile events={user.invited} />
      </div>
    </div>
  );
}

export default YourEvents;
