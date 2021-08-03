import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link className="navLink" to="/dashboard/create-event">
          <h3>Create Event</h3>
        </Link>

        <h3>Your Events</h3>
      </div>
      <div className="secondDiv">
        <h4>Settings</h4>
        <h4>Logout</h4>
      </div>
    </div>
  );
}
