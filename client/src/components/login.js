function login() {
  return (
    <div>
      <h3>Login</h3>
      <form className="landingForm">
        {/* <p>Username:</p> */}
        <input className="landingInput" placeholder="Username"></input>
        {/* <p>Password:</p> */}
        <input
          className="landingInput"
          placeholder="Password"
          type="password"
        ></input>
        <button className="Btn">Submit</button>
      </form>
    </div>
  );
}

export default login;
