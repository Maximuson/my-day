import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showNotifications } from "./store/actions/notifications";

import "./App.css";
import LoginPage from "./Pages/Login/LoginPage";
import Calendar from "./Components/Calendar/Calendar";
import Header from "./Components/Header/Header";

// import UsersService from "./UsersService";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // UsersService.getUserData("Max").then((data) => {
    //   console.log(data);
    // });
  }, []);

  useEffect(() => {
    // UsersService.addUser({ name: "test11", password: "test1" }).then(res => {
    //   console.log(res)
    // });

    const userId = localStorage.getItem("userId");

    if (userId) {
      return false;
    }

    // UsersService.login({ email: "test2@gmail.com", password: "123456" })
    //   .then(({ localId }) => {
    //     console.log(localId);
    //     localStorage.setItem("userId", localId);
    //   })
    //   .catch((err) => {
    //     console.log(err?.response?.data?.error?.message);
    //   });
  }, []);

  useEffect(() => {
    dispatch(showNotifications({ text: "some text", isError: false }));
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <main className="main full-height">
        <Calendar  />
      </main>
    </div>
  );
}

export default App;
