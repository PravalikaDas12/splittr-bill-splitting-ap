import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UserContext from "./Context/UserContext";
import {
  AppShell,
  Burger,
  Drawer,
  Group,
  Header,
  MediaQuery,
  Title,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SideNav from "./Components/SideNav";

import Landing from "./Pages/Landing";
import Signin from "./Pages/Signin";
import GroupPage from "./Pages/GroupPage";
import Dashboard from "./Pages/Dashboard";
import ThisGroup from "./Pages/ThisGroup";

function App() {
  const { loggedIn } = useContext(UserContext);
  const smallScreen = useMediaQuery("(min-width: 48em)");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="App">
      <>
        <AppShell
          navbar={smallScreen && <SideNav close={close} />}
          header={
            <Header>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Group position="apart" p="md">
                  <Title>SplittR</Title>
                  {!opened && (
                    <Burger
                      opened={opened}
                      onClick={() => {
                        opened ? close() : open();
                      }}
                    />
                  )}
                </Group>
              </MediaQuery>
            </Header>
          }
        >
          <>
            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>
              <Route exact path="/sign-in">
                {!loggedIn ? <Signin /> : <Redirect to="/dashboard" />}
              </Route>
              <Route exact path="/dashboard">
                {loggedIn ? <Dashboard /> : <Redirect to="/sign-in" />}
              </Route>
              <Route exact path="/groups">
                {loggedIn ? <GroupPage /> : <Redirect to="/sign-in" />}
              </Route>
              <Route exact path="/groups/:group_id">
                {loggedIn ? <ThisGroup /> : <Redirect to="/sign-in" />}
              </Route>
            </Switch>
          </>
        </AppShell>
      </>
      <Drawer
        position="right"
        size="100%"
        withCloseButton={false}
        opened={opened}
        onClose={close}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <SideNav opened={opened} open={open} close={close} />
      </Drawer>
    </div>
  );
}

export default App;

// import React from "react";
// import LandingHero from "../Components/LandingHero";

// import { useState } from "react";
// import {
//   AppShell,
//   Navbar,
//   Text,
//   Burger,
//   Drawer,
//   Group,
//   Title,
//   MediaQuery,
//   Center,
//   Header,
//   Container,
// } from "@mantine/core";

// import { useMediaQuery, useDisclosure } from "@mantine/hooks";
// import SideNav from "../Components/SideNav";

// export default function Landing() {
//   const smallScreen = useMediaQuery("(min-width: 48em)");
//   const [opened, { open, close }] = useDisclosure(false);

//   return (
//     <>

//   );
// }
