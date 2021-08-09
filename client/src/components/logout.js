import Auth from "../utils/auth";

export default function Logout() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="logout">
      <h1>Logout?</h1>
      <div>
        <button className="Btn" onClick={logout}>
          Confirm
        </button>
      </div>
    </div>
  );
}
