import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup() {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  // if (data) return data;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const signupSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Sign up</h3>
      {data ? (
        <p>Signup Successful!</p>
      ) : (
        <form className="landingForm" onSubmit={signupSubmit}>
          <input
            className="landingInput"
            placeholder="Email"
            name="email"
            type="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={formState.email}
            onChange={handleInputChange}
            required
          />

          <input
            className="landingInput"
            placeholder="Username"
            type="text"
            name="userName"
            value={formState.userName}
            onChange={handleInputChange}
            required
          />

          <input
            className="landingInput"
            placeholder="Password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleInputChange}
            minLength="8"
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

export default Signup;
