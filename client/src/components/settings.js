export default function Settings() {
  return (
    <div className="logout">
      <h1>Settings</h1>
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
            pattern=".+@globex\.com"
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
      </form>
    </div>
  );
}
