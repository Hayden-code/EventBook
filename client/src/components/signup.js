function signup() {
  return (
    <div>
      <h3>Sign up</h3>
      <form className="landingForm">
        {/* <p>Username:</p> */}
        <input className="landingInput" placeholder="Username" />
        {/* <p>Password:</p> */}
        <input
          className="landingInput"
          placeholder="Email"
          pattern=".+@globex\.com"
        />
        {/* <p>Email:</p> */}
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

export default signup;
