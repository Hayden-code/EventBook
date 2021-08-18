import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link className="navLink" to="/dashboard/create-event">
          <h3>Create Event</h3>
        </Link>
        {/* <Link className="navLink" to="/dashboard/your-events">
          <h3>Your Events</h3>
        </Link> */}
      </div>
      <div className="secondDiv">
        <Link className="navLink" to="/dashboard/settings">
          <h4>Settings</h4>
        </Link>
        <Link className="navLink" to="/dashboard/logout">
          <h4>Logout</h4>
        </Link>
      </div>
    </div>
  );
}
