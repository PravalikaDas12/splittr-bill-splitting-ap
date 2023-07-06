import {
  Title,
  createStyles,
  rem,
  Group,
  UnstyledButton,
  Center,
  Text,
  Stack,
  Anchor,
  Breadcrumbs,
} from "@mantine/core";
import React from "react";
import { IconCirclePlus } from "@tabler/icons-react";
import GroupExpenseCard from "../Components/GroupExpenseCard";
import { useHistory } from "react-router-dom";

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

export default function GroupPage({ setPage }) {
  const { classes } = useStyles();
  const history = useHistory();

  return (
    <>
      <Breadcrumbs>
        <Anchor
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </Anchor>
        <Anchor
          onClick={() => {
            history.push("/groups");
          }}
        >
          Groups
        </Anchor>
      </Breadcrumbs>
      <Title order={1} className={classes.head}>
        Welcome !
      </Title>
      <Title order={3}>Your Groups</Title>
      <Group className={classes.head}>
        <GroupExpenseCard />
        <UnstyledButton className={classes.button}>
          <Center>
            <Stack align="center">
              <IconCirclePlus />
              <Text>Add Group</Text>{" "}
            </Stack>
          </Center>
        </UnstyledButton>
      </Group>
    </>
  );
}
