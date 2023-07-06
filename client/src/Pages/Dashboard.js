import {
  Anchor,
  Breadcrumbs,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import DonutChart from "../Components/DonutChart";

const useStyles = createStyles((theme) => ({
  head: {
    marginBottom: `${rem(20)}`,
  },
  tail: {
    marginTop: `${rem(30)}`,
  },
  button: {
    borderRadius: theme.radius.lg,
    border: "2px dashed grey",
    backgroundColor: theme.colors.gray[2],
    padding: `${rem(20)}`,
    minWidth: `${rem(300)}`,
    alignSelf: "stretch",
    marginTop: `${rem(10)}`,
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: theme.colors.gray[4],
      // color: theme.colors.gray[2],
      border: "2px solid gray",
    },
  },
}));

export default function Dashboard({ setPage }) {
  const { classes } = useStyles();

  return (
    <>
      <Breadcrumbs>
        <Anchor>Home</Anchor>
        <Anchor>Dashboard</Anchor>
      </Breadcrumbs>
      <Title order={1} className={classes.head}>
        Welcome !
      </Title>
      <Title className={classes.tail} order={3}>
        Expense Overview
      </Title>
      <DonutChart />
    </>
  );
}
