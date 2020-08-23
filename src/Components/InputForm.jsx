import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SideImage from '../images/login1.jpg';
import Icon from '../images/icon.png';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${SideImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }

}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <img src={Icon} alt="cr-icon" />
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="id"
              label="Clash Royale Id"
              name="id"
              autoComplete="id"
              autoFocus
            />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="card">Card</InputLabel>
                <Select
                labelId="card"
                id="card"
                // value={age}
                // onChange={handleChange}
                label="Card"
                >
                    <MenuItem value="Archers">Archers</MenuItem>
                    <MenuItem value="Baby Dragon">Baby Dragon</MenuItem>
                    <MenuItem value="Balloon">Balloon</MenuItem>
                    <MenuItem value="Bandit">Bandit</MenuItem>
                    <MenuItem value="Barbarians">Barbarians</MenuItem>
                    <MenuItem value="Bats">Bats</MenuItem>
                    <MenuItem value="Battle Healer">Battle Healer</MenuItem>
                    <MenuItem value="Battle Ram	">Battle Ram</MenuItem>
                    <MenuItem value="Bomber">Bomber</MenuItem>
                    <MenuItem value="Bowler">Bowler</MenuItem>
                    <MenuItem value="Cannon Cart">Cannon Cart</MenuItem>
                    <MenuItem value="Dark Prince">Dark Prince</MenuItem>
                    <MenuItem value="Dart Goblin">Dart Goblin</MenuItem>
                    <MenuItem value="Electro Dragon">Electro Dragon</MenuItem>
                    <MenuItem value="Electro Wizard">Electro Wizard</MenuItem>
                    <MenuItem value="Elite Barbarians">Elite Barbarians</MenuItem>
                    <MenuItem value="Elixir Golem">Elixir Golem</MenuItem>
                    <MenuItem value="Executioner">Executioner</MenuItem>
                    <MenuItem value="Firecracker">Firecracker</MenuItem>
                    <MenuItem value="Fire Spirits">Fire Spirits</MenuItem>
                    <MenuItem value="Fisherman">Fisherman</MenuItem>
                    <MenuItem value="Flying Machine">Flying Machine</MenuItem>
                    <MenuItem value="Giant">Giant</MenuItem>
                    <MenuItem value="Giant Skeleton">Giant Skeleton</MenuItem>
                    <MenuItem value="Goblin Brawler">Goblin Brawler</MenuItem>
                    <MenuItem value="Goblin Gang">Goblin Gang</MenuItem>
                    <MenuItem value="Goblin Giant">Goblin Giant</MenuItem>
                    <MenuItem value="Goblins">Goblins</MenuItem>
                    <MenuItem value="Golem">Golem</MenuItem>
                    <MenuItem value="Guards">Guards</MenuItem>
                    <MenuItem value="Hog Rider">Hog Rider</MenuItem>
                    <MenuItem value="Hunter">Hunter</MenuItem>
                    <MenuItem value="Heal Spirit">Heal Spirit</MenuItem>
                    <MenuItem value="Ice Golem">Ice Golem</MenuItem>
                    <MenuItem value="Ice Spirit">Ice Spirit</MenuItem>
                    <MenuItem value="Ice Wizard">Ice Wizard</MenuItem>
                    <MenuItem value="Inferno Dragon">Inferno Dragon</MenuItem>
                    <MenuItem value="Knight">Knight</MenuItem>
                    <MenuItem value="Lava Hound">Lava Hound</MenuItem>
                    <MenuItem value="Lumberjack">Lumberjack</MenuItem>
                    <MenuItem value="Magic Archer">Magic Archer</MenuItem>
                    <MenuItem value="Mega Minion">Mega Minion</MenuItem>
                    <MenuItem value="Mega Knight">Mega Knight</MenuItem>
                    <MenuItem value="Mini P.E.K.K.A.">Mini P.E.K.K.A.</MenuItem>
                    <MenuItem value="Miner">Miner</MenuItem>
                    <MenuItem value="Minions">Minions</MenuItem>
                    <MenuItem value="Minion Horde">Minion Horde</MenuItem>
                    <MenuItem value="Musketeer">Musketeer</MenuItem>
                    <MenuItem value="Night Witch">Night Witch</MenuItem>
                    <MenuItem value="P.E.K.K.A.">P.E.K.K.A.</MenuItem>
                    <MenuItem value="Prince">Prince</MenuItem>
                    <MenuItem value="Princess">Princess</MenuItem>
                    <MenuItem value="Ram Rider">Ram Rider</MenuItem>
                    <MenuItem value="Rascal">Rascal</MenuItem>
                    <MenuItem value="Royal Ghost">Royal Ghost</MenuItem>
                    <MenuItem value="Royal Giant">Royal Giant</MenuItem>
                    <MenuItem value="Royal Hogs">Royal Hogs</MenuItem>
                    <MenuItem value="Royal Recruits">Royal Recruits</MenuItem>
                    <MenuItem value="Skeletons">Skeletons</MenuItem>
                    <MenuItem value="Skeleton Army">Skeleton Army</MenuItem>
                    <MenuItem value="Skeleton Barrel">Skeleton Barrel</MenuItem>
                    <MenuItem value="Skeleton Dragons">Skeleton Dragons</MenuItem>
                    <MenuItem value="Sparky">Sparky</MenuItem>
                    <MenuItem value="Spear Goblins">Spear Goblins</MenuItem>
                    <MenuItem value="Three Musketeers">Three Musketeers</MenuItem>
                    <MenuItem value="Valkyrie">Valkyrie</MenuItem>
                    <MenuItem value="Wall Breakers">Wall Breakers</MenuItem>
                    <MenuItem value="Witch">Witch</MenuItem>
                    <MenuItem value="Wizard">Wizard</MenuItem>
                    <MenuItem value="Zappies">Zappies</MenuItem>
                </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Find Trade
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}