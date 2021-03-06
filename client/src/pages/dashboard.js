import CreateEvent from "../components/createEvent";
import YourEvents from "../components/yourEvents";
import Settings from "../components/settings";
import Logout from "../components/logout";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { Route, Switch } from "react-router-dom";
import Explore from "../components/explore";
import Footer from "../components/footer";
import EventPage from "../components/eventPage";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="dashboard">
        <Switch>
          <Route path="/dashboard/explore">
            <Explore />
          </Route>
          <Route path="/dashboard/create-event">
            <CreateEvent />
          </Route>
          <Route path="/dashboard/your-events/:userId">
            <YourEvents />
          </Route>
          <Route path="/dashboard/event/:eventId">
            <EventPage />
          </Route>
          <Route path="/dashboard/settings">
            <Settings />
          </Route>
          <Route path="/dashboard/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
