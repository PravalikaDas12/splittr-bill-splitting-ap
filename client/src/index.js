import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";

import "./Styles/main.css";
import { BrowserRouter as Router } from "react-router-dom";
import UserState from "./Context/UserState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserState>
      <Router>
        <MantineProvider>
          <App />
        </MantineProvider>
      </Router>
    </UserState>
  </React.StrictMode>
);
