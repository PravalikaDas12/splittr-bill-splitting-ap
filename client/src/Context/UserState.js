import React, { useState } from "react";
import UserContext from "./UserContext";
export default function UserState({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);
  return (
    <UserContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
