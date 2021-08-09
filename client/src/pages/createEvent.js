import { ThemeDropdown, GuestList } from "../components/dropdownMenus";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../utils/mutations";

export default function CreateEvent() {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    theme: "",
  });
  const [AddEvent, { data, loading, error }] = useMutation(ADD_EVENT);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const createEvent = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await AddEvent({
        variables: { ...formState },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="createEvent">
      <h2 style={{ textAlign: "center" }}>Create Event</h2>
      {data ? (
        <p>Event Created!</p>
      ) : (
        <form className="landingForm" onSubmit={createEvent}>
          <label className="eventLabel">Title:</label>
          <input
            className="eventInput"
            placeholder="e.g. Picnic"
            value={formState.title}
            onChange={handleInputChange}
          ></input>
          <label className="eventLabel">Description:</label>
          <textarea
            className="eventInput"
            placeholder="e.g. Hey guys, I am having a picnic, would love for everyone to make it!"
            value={formState.description}
            onChange={handleInputChange}
          ></textarea>
          <label className="eventLabel">Guests:</label>
          <GuestList className="eventInput" />
          <label className="eventLabel">Theme:</label>
          <ThemeDropdown className="eventInput" />
          <button className="Btn" type="submit">
            CreateEvent
          </button>
        </form>
      )}
    </div>
  );
}
