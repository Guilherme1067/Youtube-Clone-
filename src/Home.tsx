import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  Icon,
  Typography,
  ListSubheader,
  Grid,
  Hidden,
  useTheme,
  Switch,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import VideoCall from "@material-ui/icons/VideoCall";

import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";

import { ListItemButton } from "@mui/material";
import { AccountCircle } from "@material-ui/icons";

import AddCircle from "@material-ui/icons/AddCircle";

const drawerWidth = 240;
const videos = [
  {
    id: 1,
    titulo:
      "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
    canal: "Lucas Nhimi",
    visualizações: "11 mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb1.png",
  },
  {
    id: 2,
    titulo:
      "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + MAIS BONITO + EDITORCONFIG) | Dicas e Truques #02",
    canal: "Lucas Nhimi",
    visualizações: "957 mil visualizações",
    data: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb2.png",
  },
  {
    id: 3,
    titulo:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    canal: "Lucas Nhimi",
    visualizações: "106 mil visualizações",
    data: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb3.png",
  },
  {
    id: 4,
    titulo:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    canal: "Lucas Nhimi",
    visualizações: "5,6 mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb4.png",
  },
  {
    id: 5,
    titulo:
      "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
    canal: "Lucas Nhimi",
    visualizações: "2,2 mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb5.png",
  },
  {
    id: 6,
    titulo: "Como MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
    canal: "Lucas Nhimi",
    visualizações: "233 mil visualizações",
    data: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb6.png",
  },
  {
    id: 7,
    titulo:
      "pré-requisitos | Criando uma Rede Social com React.js e .NET Core #01",
    canal: "Lucas Nhimi",
    visualizações: "118 mil visualizações",
    data: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb7.png",
  },
  {
    id: 8,
    titulo:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    canal: "Lucas Nhimi",
    visualizações: "1,9 mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none",
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(2),
  },
  logo: {
    height: "28px",
  },
  subheader: {
    textTransform: "uppercase",
  },
}));

interface darkModeProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export function Home({ darkMode, setDarkMode }: darkModeProps) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton
            className={classes.menuIcon}
            edge="start"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <img
            src={
              theme.palette.type === "dark"
                ? "/images/branco.png"
                : "/images/preto.png"
            }
            alt="Logo"
            className={classes.logo}
          />

          <Box className={classes.grow} />

          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />

          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>

          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>

          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>

          <Button variant="outlined" color="secondary">
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box style={{ display: "flex" }}>
        <Hidden mdDown>
          <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div>
              <List>
                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Ínicio"}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Em alta"}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Subscriptions />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Inscrições"}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />

              <List>
                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <VideoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Biblioteca"}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Histórico"}
                    />
                  </ListItemButton>
                </ListItem>
              </List>

              <Divider />
              <Box style={{ padding: 7, marginTop: 25 }}>
                <Typography variant="body2">
                  Faça Login para curtir vídeos, comentar e se inscrever.
                </Typography>

                <Box style={{ marginTop: 2 }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircle />}
                  >
                    Fazer Login
                  </Button>
                </Box>
              </Box>
              <Divider />

              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    O melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>

                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary="Música"
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary="Esportes"
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText primary="Jogos" />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary="Filmes"
                      classes={{ primary: classes.listItemText }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary="Notícias"
                      classes={{ primary: classes.listItemText }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary="Ao vivo"
                      classes={{ primary: classes.listItemText }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary="Destaque"
                      classes={{ primary: classes.listItemText }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary="Video em 360"
                      classes={{ primary: classes.listItemText }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>

        <Box style={{ padding: 20 }}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.titulo}
                    src={item.thumb}
                  />
                </Box>
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {item.titulo}
                  </Typography>

                  <Typography
                    display="block"
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.canal}
                  </Typography>

                  <Typography variant="body2">{`${item.visualizações} • ${item.data}`}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
