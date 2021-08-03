import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="headerText" to="/dashboard">
        <h3>Home</h3>
      </Link>
      <Link className="headerText" to="/dashboard">
        <h2>EventBook</h2>
      </Link>
      <Link className="headerText" to="/dashboard/explore">
        <h3>Explore</h3>
      </Link>
    </header>
  );
}
