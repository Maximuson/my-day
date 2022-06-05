import React, { useState } from "react";
import UsersService from "../../API/UsersService";

import styles from "./loginPage.module.scss";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
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
        history.replace("/calendar");
      })
      .catch((err) => {
        console.log(err?.response?.data?.error?.message);
      });
  };
  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input value={email} type="email" name="email" onChange={handleInput} />
    //     <input
    //       value={password}
    //       type="password"
    //       name="password"
    //       onChange={handleInput}
    //     />
    //     <button type="submit">Увійти</button>
    //   </form>
    // </div>

    <section className={styles.area_login}>
      <div className={styles.login}>
        <div>
          <img
            alt={"google logo"}
            src="https://img.icons8.com/fluency/240/000000/google-logo.png"
          />
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={handleInput}
            type="text"
            name="email"
            placeholder="Пошта"
            autoFocus
          />
          <input
            value={password}
            onChange={handleInput}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <input type="submit" value="Увійти" />
        </form>
        {/*<p>Ainda não tem uma conta? <a href="#">Criar conta</a></p>*/}
      </div>
    </section>
  );
};

export default LoginPage;
