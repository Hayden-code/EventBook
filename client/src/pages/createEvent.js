import { ThemeDropdown, GuestList } from "../components/dropdownMenus";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../utils/mutations";
import { QUERY_EVENTS } from "../utils/queries";
// import Auth from "../utils/auth";

export default function CreateEvent() {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    theme: "",
    // host: Auth.getProfile().data.userName,
  });
  const [AddEvent, { data, loading, error }] = useMutation(ADD_EVENT, {
    update(cache, { data: { AddEvent } }) {
      try {
        const { events } = cache.readQuery({ query: QUERY_EVENTS });
        cache.writeQuery({
          query: QUERY_EVENTS,
          data: { events: [AddEvent, ...events] },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
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
            name="title"
            value={formState.title}
            onChange={handleInputChange}
          ></input>
          <label className="eventLabel">Description:</label>
          <textarea
            className="eventInput"
            placeholder="e.g. Hey guys, I am having a picnic, would love for everyone to make it!"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
          ></textarea>
          <label className="eventLabel">Guests:</label>
          <GuestList className="eventInput" />
          <label className="eventLabel">Theme:</label>
          <ThemeDropdown
            className="eventInput"
            name="theme"
            value={formState.theme}
            onChange={handleInputChange}
          />
          <button className="Btn" type="submit">
            CreateEvent
          </button>
        </form>
      )}
    </div>
  );
}
