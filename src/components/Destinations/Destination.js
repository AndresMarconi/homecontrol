import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { compose } from "redux"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { firestoreConnect } from 'react-redux-firebase'
import { removeDestination, addDestination, updateDestination } from '../../store/actions/destinationActions'



const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '90vh',
    margin: 5
  },
  fixedHeight: {
    height: 240,
  },
  root: {
    minWidth: 275,
    margin: 5
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Destination = ({ destinations, setTitle }) => {
  const classes = useStyles();
  useEffect(() => {
    setTitle("Destinatarios")
  })
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {destinations && destinations.map((destination) => (
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {destination.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Seleccionar</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </main>
  );
}

const mapStateToProps = state => {
  const pageTitle = state.pageConfig.title;
  const destinations = state.firestore.ordered.destination;
  return { destinations: destinations, title: pageTitle };
} 

const mapDispatchToProps = dispatch => {
  return {
    deleteDestination: destination => dispatch(removeDestination(destination)),
    setTitle: (title) => dispatch({
      type: "SET_TITLE",
      title
    })
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect(ownProps => [{ collection: "destination" }]))(Destination);