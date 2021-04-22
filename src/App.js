import React from 'react';
import './App.css';
import { AppBar, Container, Toolbar, Typography, Button, IconButton, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation } from '@material-ui/core';

//import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import MenuIcon from '@material-ui/icons/Menu';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LayerIcon from '@material-ui/icons/Layers';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    marginTop: theme.spacing(4)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

  return (<>
    <AppBar color='secondary' position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Парикмахер в Калининграде
          </Typography>
          <Box>
            <Button className={classes.menuButton} color="inherit" variant="outlined" onClick={handleClickOpen}>Login</Button>

            <Dialog open={open} onClose={handleClose} area-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Log in</DialogTitle>
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

    <main>
      <Paper className={classes.mainFeaturesPost}
        style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
        <Container fixed>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom>
                  Парикмахер в Калининграде
                </Typography>

                <Typography component="h5"
                  variant="h5"
                  color="inherit"
                  paragraph>
                  Вот Вы создали и наполнили профиль своей компании в Инстаграм (или в любой социальной сети, но будем говорить в основном про Instagram).
                  Он весь такой красивый и крутой. Поэтому мы сидим и ждём, когда же потребители сами к нам прибегут, но их всё нет и нет.
                </Typography>

                <Button variant="contained" color="secondary">
                  Learn more
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom>
            Парикмахер в Калининграде
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            Вот Вы создали и наполнили профиль своей компании в Инстаграм (или в любой социальной сети, но будем говорить в основном про Instagram).
            Он весь такой красивый и крутой. Поэтому мы сидим и ждём, когда же потребители сами к нам прибегут, но их всё нет и нет.
          </Typography>

          <div className={classes.mainButtons}>
            <Grid container spacing={5} justify="center">
              <Grid item>
                <Button variant="contained" color="secondary">Start Now</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary">Learn more</Button>
              </Grid>

            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image Title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h5"
                    gutterBottom>
                    Вот Вы создали
                  </Typography>
                  <Typography>
                    Вот Вы создали. Вот Вы создали. Вот Вы создали.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>

                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="/images/Вероника_Кравченко.png"
                  title="Image Title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h5"
                    gutterBottom>
                    Вот Вы создали
                  </Typography>
                  <Typography>
                    Вот Вы создали. Вот Вы создали. Вот Вы создали.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>

                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
              </Card>
            </Grid>
        </Grid>
      </Container>
    </main>
    <footer>
      <Typography variant="h5" align="center" gutterBottom>
        Footer
      </Typography>
      <BottomNavigation 
        value={value} 
        onChange={handleChange}
        className={classes.root}>
            <BottomNavigationAction 
              label="Recents"
              value="recents"
              icon={<RestoreIcon/>}
            />
            <BottomNavigationAction 
              label="Favorites"
              value="favorites"
              icon={<FavoriteIcon/>}
            />
            <BottomNavigationAction 
              label="Nearby"
              value="nearby"
              icon={<LocationOnIcon/>}
            />
            <BottomNavigationAction 
              label="Folder"
              value="folder"
              icon={<FolderIcon/>}
            />
      </BottomNavigation>
      <Typography align="center" color="textSecondary" variant="subtitle1">
            Парикмахер в Калининграде ReactJS Material UI site
      </Typography>
    </footer>
  </>

  );
}

export default App;