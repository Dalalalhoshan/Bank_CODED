import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";
import React, { useEffect } from "react";
import { useState } from "react";
import { checkToken } from "./api/storage";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = checkToken();
    if (token) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono ">
        <h1>the user state is {`$user`}</h1>
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
