import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: `100%`,
    marginLeft: `2rem`,
    marginTop: `1rem`,
  },
  margin: {
    margin: theme.spacing(1),
    width: `100%`,
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Button size="large" className={classes.margin}>
        Navigation 1
      </Button>
      <Button size="large" className={classes.margin}>
        Navigation 2
      </Button>
      <Button size="large" className={classes.margin}>
        Navigation 3
      </Button>
      <Button size="large" className={classes.margin}>
        Navigation 4
      </Button>
      <Button size="large" className={classes.margin}>
        Navigation 5
      </Button>
      <Button size="large" className={classes.margin}>
        Navigation 6
      </Button>
    </Paper>
  );
}
