import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  rem,
  Container,
  Group,
  Button,
  createStyles,
} from "@mantine/core";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

const useStyles = createStyles((theme) => ({
  inner: {
    position: "relative",
    paddingTop: rem(120),
    paddingBottom: rem(120),

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },
}));

export default function Signin() {
  const { login } = useContext(UserContext);
  const { classes } = useStyles();

  return (
    <Container className={classes.inner} size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Split Bill
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button onClick={login} fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>

      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>
    </Container>
  );
}
