// import { useMutation } from "@apollo/client";
// import { EDIT_USER } from "../utils/mutations";
// import jwt from "jwt-decode"; // import dependency
import Auth from "../utils/auth";

export default function Settings() {
  // let input;
  // const [user] = useMutation(EDIT_USER, {});
  // console.log(res.data.token);
  const user = Auth.getProfile().data;
  return (
    <div className="logout">
      <h1 style={{ textAlign: "center" }}>Settings</h1>
      <p>Change credentials for {user.userName}</p>
      <form className="landingForm">
        <label className="eventLabel">
          Change Username:
          <input
            style={{ marginLeft: "10px" }}
            className="eventInput"
            placeholder="New Username"
          />
        </label>
        <label className="eventLabel">
          Change Email:
          <input
            style={{ marginLeft: "10px" }}
            className="eventInput"
            placeholder="New Email"
            type="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </label>
        <label className="eventLabel">
          Change Password:
          <input
            style={{ marginLeft: "10px" }}
            className="eventInput"
            placeholder="New Password"
            type="password"
            minLength="8"
          />
        </label>
        <button className="Btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
