import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  const eventsToRender = [
    {
      _id: "1",
      title: "Harry's Birthday",
      description:
        "It's my Birthday! Come on down and have a few beers! Yewwww",
      host: "Harry",
      theme: "#EC8993",
    },
    {
      _id: "2",
      title: "Picnic",
      description: "Let's go to St Kilda park and have a picnic!",
      host: "Hayden",
      theme: "#C1E8E0",
    },
    {
      _id: "3",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed turpis lectus. Maecenas at aliquet lectus. Donec varius quam eu maximus mattis. Aenean eget leo in dui facilisis eleifend. Donec enim ipsum, placerat eget magna eu, vestibulum rhoncus risus. Etiam quis placerat libero, sed faucibus justo. Vivamus interdum enim vitae lacinia pellentesque. Curabitur nec quam vitae purus posuere tincidunt. Nulla gravida pellentesque tempor. Proin pretium lobortis laoreet. Nam fringilla enim sit amet urna tincidunt, at tristique sapien mattis.",
      host: "Lorem Ipsum",
      theme: "#F6F6EB",
    },
    {
      _id: "4",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed turpis lectus. Maecenas at aliquet lectus. Donec varius quam eu maximus mattis. Aenean eget leo in dui facilisis eleifend. Donec enim ipsum, placerat eget magna eu, vestibulum rhoncus risus. Etiam quis placerat libero, sed faucibus justo. Vivamus interdum enim vitae lacinia pellentesque. Curabitur nec quam vitae purus posuere tincidunt. Nulla gravida pellentesque tempor. Proin pretium lobortis laoreet. Nam fringilla enim sit amet urna tincidunt, at tristique sapien mattis.",
      host: "Lorem Ipsum",
      theme: "#F5D5CB",
    },
  ];
  return (
    <div className="eventsDiv">
      <p>
        Explore exmaple events to get an idea of how to set up your owne event!
      </p>
      <div className="yourEvents">
        {eventsToRender.map((event) => (
          <Link key={event.id} to={`/dashboard/event/${event._id}`}>
            <div className="eventDiv">
              <div
                className="eventTheme"
                style={{ backgroundColor: event.theme }}
              ></div>
              <p className="eventText">Host: {event.host}</p>
              <h3 className="eventText">{event.title}</h3>
              <p className="eventText">{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
