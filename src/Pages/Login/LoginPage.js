import React, { useState } from "react";
import UsersService from "../../UsersService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    UsersService.login({ email, password })
      .then(({ localId }) => {
        console.log(localId);
        localStorage.setItem("userId", localId);
      })
      .catch((err) => {
        console.log(err?.response?.data?.error?.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={email} type="email" name="email" onChange={handleInput} />
        <input
          value={password}
          type="password"
          name="password"
          onChange={handleInput}
        />
        <button type="submit">Увійти!!!</button>
      </form>
    </div>
  );
};

export default LoginPage;
