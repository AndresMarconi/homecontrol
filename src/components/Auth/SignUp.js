import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { connect } from "react-redux";
import { signUp } from '../../store/actions/authActions'
import { Form, Field } from "react-final-form"
import { Redirect } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Home Control
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const SignUp = ({ uid, createUser }) => {
    const classes = useStyles();
    if (uid) return <Redirect to="/dashboard" />
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Form
                    onSubmit={formObj => {
                        console.log(formObj);
                        createUser(formObj)
                    }}
                >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Field name="email">
                                    {({ input }) => (
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                type="email"
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                {...input}
                                            />
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="password">
                                    {({ input }) => (
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                {...input}
                                            />
                                        </Grid>
                                    )}
                                </Field>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
                            </Button>
                            </Grid>
                        </form>
                    )}
                </Form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );

}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        createUser: creds => dispatch(signUp(creds)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);