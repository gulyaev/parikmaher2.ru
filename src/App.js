import React from 'react';
import './App.css';
import { AppBar, Container, Toolbar, Typography, IconButton, BottomNavigation, Grid, Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import Posts from "../src/Components/Posts";
import CenteredTabs from './Components/CenteredTabs';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "norepeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(12)
  },
  footer: {
    paddingTop: theme.spacing(16)
  },
  centeredTabs: {
    marginTop: theme.spacing(16)
  }
}));

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <AppBar color='secondary' position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <h3>Work & Beauty</h3>
            </Typography>
            <Box>
            <Button className={classes.menuButton} color="inherit" variant="outlined" onClick={handleClickOpen}>Войти</Button>

            <Dialog open={open} onClose={handleClose} area-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Войти</DialogTitle>
              <DialogContent>
                <DialogContentText>Log in to see videos</DialogContentText>
                <TextField 
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Adress"
                  type="email"
                  fullWidth
                />

                <TextField 
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Log in</Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Button className={classes.menuButton} color="secondary" variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <CenteredTabs className={classes.centeredTabs}/>
      <main>
        <Posts />
      </main>
      <footer className={classes.footer}>
        <Typography align="center" color="textSecondary" variant="subtitle1">
          Парикмахер в Калининграде ReactJS Material UI site
      </Typography>
        <script async="" defer="defer" src="//platform.instagram.com/en_US/embeds.js"></script>
      </footer>
    </>
  );
}

export default App;