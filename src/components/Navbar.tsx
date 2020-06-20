import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Container,
  Button,
} from '@material-ui/core';
import {Home, GitHub} from '@material-ui/icons';
import Link from './Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface NavbarProps {}

type Props = Readonly<NavbarProps>;

export default function Navbar(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* // <AppBar position="static"> */}
      <Toolbar>
        <Link href="/">
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
          >
            <Home />
          </IconButton>
        </Link>
        <Link href="/blog">
          <Button color="inherit">Blog</Button>
        </Link>
        <Link href="/">
          <IconButton edge="start" color="inherit">
            <GitHub />
          </IconButton>
        </Link>
      </Toolbar>
      {/* // </AppBar> */}
    </div>
  );
}
