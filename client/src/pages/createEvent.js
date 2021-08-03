import { ThemeDropdown, GuestList } from "../components/dropdownMenus";

export default function CreateEvent() {
  return (
    <div className="createEvent">
      <h2 style={{ textAlign: "center" }}>Create Event</h2>
      <form className="landingForm">
        <label className="eventLabel">Title:</label>
        <input className="eventInput" placeholder="e.g. Picnic"></input>
        <label className="eventLabel">Description:</label>
        <textarea
          className="eventInput"
          placeholder="e.g. Hey guys, I am having a picnic, would love for everyone to make it!"
        ></textarea>
        <label className="eventLabel">Guests:</label>
        <GuestList className="eventInput" />
        <label className="eventLabel">Theme:</label>
        <ThemeDropdown className="eventInput" />
        <button className="Btn">CreateEvent</button>
      </form>
    </div>
  );
}
