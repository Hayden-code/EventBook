function login() {
  return (
    <div>
      <h3>Login</h3>
      <form className="landingForm">
        {/* <p>Email:</p> */}
        <input
          className="landingInput"
          placeholder="Email"
          pattern=".+@globex\.com"
        />
        {/* <p>Password:</p> */}
        <input
          className="landingInput"
          placeholder="Password"
          type="password"
        />
        <button className="Btn">Submit</button>
      </form>
    </div>
  );
}

export default login;
