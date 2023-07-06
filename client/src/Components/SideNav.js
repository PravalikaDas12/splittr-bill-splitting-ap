import { useContext, useState } from "react";
import {
  createStyles,
  Navbar,
  Group,
  getStylesRef,
  rem,
  Burger,
  Title,
  MediaQuery,
  UnstyledButton,
  Avatar,
  Text,
} from "@mantine/core";
import {
  IconReceipt2,
  IconLogout,
  IconHome,
  IconDashboard,
  IconLogin,
} from "@tabler/icons-react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    color: theme.white,
  },

  version: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: "filled", color: theme.primaryColor })
        .background,
      0.1
    ),
    color: theme.white,
    fontWeight: 700,
  },

  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: "filled", color: theme.primaryColor })
        .background,
      0.1
    )}`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: "filled", color: theme.primaryColor })
        .background,
      0.1
    )}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    width: "100%",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background,
        0.1
      ),
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color: theme.white,
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background,
        0.15
      ),
      [`& .${getStylesRef("icon")}`]: {
        opacity: 0.9,
      },
    },
  },
  user: {
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).color,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background,
        0.15
      ),
      [`& .${getStylesRef("icon")}`]: {
        opacity: 0.9,
      },
    },
  },
}));

const data = [
  {
    link: "/dashboard",
    label: "Dashboard",
    icon: IconDashboard,
    private: true,
  },
  { link: "/groups", label: "Groups", icon: IconReceipt2, private: true },
  { link: "/groups/5", label: "This Group", icon: IconReceipt2, private: true },
  { link: "/sign-in", label: "Sign In", icon: IconLogin, private: false },
];

export default function SideNav(props) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");
  const history = useHistory();
  const { logout, loggedIn } = useContext(UserContext);

  const { opened, open, close } = props;

  return (
    <>
      <Navbar p="md" width={{ sm: 200, lg: 300 }} className={classes.navbar}>
        <Navbar.Section grow>
          <Group className={classes.header} position="apart">
            <Title>SplittR</Title>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => {
                  opened ? close() : open();
                }}
              />
            </MediaQuery>
          </Group>
          <UnstyledButton
            className={cx(classes.link, {
              [classes.linkActive]: "/" === active,
            })}
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
              setActive("/");
              close();
            }}
          >
            <IconHome className={classes.linkIcon} stroke={1.5} />
            <span>Home</span>
          </UnstyledButton>
          {loggedIn
            ? data.map(
                (item) =>
                  item.private && (
                    <UnstyledButton
                      key={item.label}
                      className={cx(classes.link, {
                        [classes.linkActive]: item.link === active,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(item.link);
                        setActive(item.link);
                        close();
                      }}
                    >
                      <item.icon className={classes.linkIcon} stroke={1.5} />
                      <span>{item.label}</span>
                    </UnstyledButton>
                  )
              )
            : data.map(
                (item) =>
                  !item.private && (
                    <UnstyledButton
                      key={item.label}
                      className={cx(classes.link, {
                        [classes.linkActive]: item.link === active,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(item.link);
                        setActive(item.link);
                        close();
                      }}
                    >
                      <item.icon className={classes.linkIcon} stroke={1.5} />
                      <span>{item.label}</span>
                    </UnstyledButton>
                  )
              )}
        </Navbar.Section>
        <Navbar.Section className={classes.footer}>
          {loggedIn && (
            <>
              <UnstyledButton className={classes.user}>
                <Group>
                  <Avatar src={null} radius="xl" />
                  <div style={{ flex: 1 }}>
                    <Text size="md" weight={500}>
                      {/* {name} */}
                      Rohan
                    </Text>

                    <Text size="sm">
                      {/* {email} */}
                      Barsagade
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
              <UnstyledButton
                className={classes.link}
                onClick={(event) => {
                  event.preventDefault();
                  close();
                  logout();
                }}
              >
                <IconLogout className={classes.linkIcon} stroke={1.5} />
                <span>Logout</span>
              </UnstyledButton>
            </>
          )}
        </Navbar.Section>
      </Navbar>
    </>
  );
}
