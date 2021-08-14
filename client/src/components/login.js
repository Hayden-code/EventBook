import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";

function LoginComponent() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { data, loading, error }] = useMutation(LOGIN_USER);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const loginSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h3>Login</h3>
      {data ? (
        <p>Login Successful!</p>
      ) : (
        <form className="landingForm" onSubmit={loginSubmit}>
          <input
            className="landingInput"
            placeholder="Email"
            name="email"
            type="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleInputChange}
            required
          />

          <input
            className="landingInput"
            placeholder="Password"
            name="password"
            type="password"
            minLength="8"
            onChange={handleInputChange}
            required
          />
          <button className="Btn" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginComponent;
