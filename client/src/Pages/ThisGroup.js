import {
  Title,
  createStyles,
  rem,
  Button,
  SimpleGrid,
  Container,
  Text,
  Tabs,
  Space,
  Box,
  Center,
} from "@mantine/core";
import React from "react";
import ExpenseTable from "../Components/ExpenseTable";
import { MemberTable } from "../Components/MemberTable";

const data = {
  data: [
    {
      avatar:
        "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Robert Wolfkisser",
      job: "Engineer",
      email: "rob_wolf@gmail.com",
      role: "Collaborator",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Jill Jailbreaker",
      job: "Engineer",
      email: "jj@breaker.com",
      role: "Collaborator",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Henry Silkeater",
      job: "Designer",
      email: "henry@silkeater.io",
      role: "Contractor",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Bill Horsefighter",
      job: "Designer",
      email: "bhorsefighter@gmail.com",
      role: "Contractor",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Jeremy Footviewer",
      job: "Manager",
      email: "jeremy@foot.dev",
      role: "Manager",
    },
  ],
};

const useStyles = createStyles((theme) => ({
  head: {
    marginBottom: `${rem(20)}`,
  },
  tail: {
    marginTop: `${rem(30)}`,
  },
  grey: {
    color: theme.colors.gray[7],
  },
  bg: {
    width: "100%",
  },
}));

export default function ThisGroup() {
  const { classes } = useStyles();

  return (
    <>
      <Title order={3}>June 2022</Title>
      <SimpleGrid
        cols={2}
        spacing="xl"
        breakpoints={[{ maxWidth: "lg", cols: 1 }]}
      >
        <Container className={classes.bg}>
          <Text className={classes.grey}>EXPENSE LIST</Text>
          <Tabs defaultValue="active">
            <Tabs.List>
              <Tabs.Tab value="active">Active</Tabs.Tab>
              <Tabs.Tab value="settled">Settled</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="active" pt="xs">
              <ExpenseTable />
            </Tabs.Panel>
            <Tabs.Panel value="settled" pt="xs">
              Settled
            </Tabs.Panel>
          </Tabs>
        </Container>
        <Container className={classes.bg}>
          <Text className={classes.grey}>ADD MEMBER</Text>
          <MemberTable data={data.data} />
          <Space h="lg" />
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,
              cursor: "pointer",
              border: `${rem(2)} dashed ${theme.colors.red[6]}`,
              color: theme.colors.white,
            })}
          >
            <Text color="red" fw={700}>
              Danger Zone
            </Text>
            <Space h="md" />
            <Center>
              <Button
                sx={(theme) => ({
                  width: "100%",
                  backgroundColor: theme.colors.red[5],
                  "&:hover": {
                    backgroundColor: theme.colors.red[7],
                  },
                })}
              >
                Delete Group
              </Button>
            </Center>
          </Box>
        </Container>
      </SimpleGrid>
    </>
  );
}
