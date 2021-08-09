// import { QUERY_USER, QUERY_USERS } from "../utils/queries";
// import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";
// import { useQuery } from "@apollo/client";

// const user = useQuery(QUERY_USER);
// const guests = _.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }));

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const themes = [
  { key: "bl", value: "bl", text: "Blue" },
  { key: "re", value: "re", text: "Red" },
  { key: "gr", value: "gr", text: "Green" },
];
const guests = [
  { key: "harry", value: "Ha", text: "Harry Jones" },
  { key: "cale", value: "Ca", text: "Cale Hooker" },
  { key: "anthony", value: "An", text: "Anthony mcdonald-tipungwuti" },
];

function ThemeDropdown() {
  return (
    <Dropdown
      placeholder="Choose Theme"
      fluid
      search
      selection
      options={themes}
    />
  );
}

function GuestList() {
  return (
    <Dropdown
      placeholder="Guests"
      fluid
      multiple
      search
      selection
      options={guests}
    />
  );
}

export { ThemeDropdown, GuestList };
