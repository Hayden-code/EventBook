import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="headerDiv">
        <Link className="headerText" to="/dashboard/your-events">
          <h3>Home</h3>
        </Link>
        <Link className="headerText" to="/dashboard/your-events">
          <h2>EventBook</h2>
        </Link>
        <Link className="headerText" to="/dashboard/your-events">
          <h3>Explore</h3>
        </Link>
      </div>
    </header>
  );
}
