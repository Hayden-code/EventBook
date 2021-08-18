import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link className="navLink" to="/dashboard/create-event">
        <h2>+</h2>
      </Link>
      {/* <Link className="navLink" to="/dashboard/your-events">
          <h3>Your Events</h3>
        </Link> */}

      <Link className="navLink" to="/dashboard/settings">
        <h4>Settings</h4>
      </Link>
      <Link className="navLink" to="/dashboard/logout">
        <h4>Logout</h4>
      </Link>
    </footer>
  );
}
