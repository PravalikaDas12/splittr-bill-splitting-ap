import {
  Card,
  Divider,
  List,
  Text,
  Button,
  ThemeIcon,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import { IconCurrencyRupee, IconUsersGroup } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  head: {
    marginTop: `${rem(10)}`,
  },
  main: {
    minWidth: `${rem(300)}`,
  },
}));

export default function GroupExpenseCard() {
  const { classes } = useStyles();

  return (
    <Card
      withBorder
      shadow="sm"
      radius="md"
      padding="lg"
      className={classes.head + " " + classes.main}
    >
      <Title order={4}>June 2022</Title>
      <Text>June's expenses</Text>
      <Divider size="sm" className={classes.head} />
      <List spacing="xs" size="sm" className={classes.head}>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCurrencyRupee />
            </ThemeIcon>
          }
        >
          TOTAL EXPENSES: 5
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconUsersGroup />
            </ThemeIcon>
          }
        >
          MEMBERS: 3
        </List.Item>
      </List>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Open
      </Button>
    </Card>
  );
}
