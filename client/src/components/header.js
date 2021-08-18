import { Link } from "react-router-dom";
import auth from "../utils/auth";

export default function Header() {
  const user = auth.getProfile().data;
  console.log(user);
  return (
    <header>
      <div className="headerDiv">
        <Link className="headerText" to={`/dashboard/your-events/${user._id}`}>
          <h3>Home</h3>
        </Link>
        <Link className="headerText" to={`/dashboard/your-events/${user._id}`}>
          <h2>EventBook</h2>
        </Link>
        <Link className="headerText" to="/dashboard/explore">
          <h3>Explore</h3>
        </Link>
      </div>
    </header>
  );
}
