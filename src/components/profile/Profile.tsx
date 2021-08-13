import { Avatar, Button, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { ReactElement } from 'react';
import sources from '../../sources';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#005564",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    avatar: {
        height: "180px",
        width: "180px"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        marginTop: "25px"
    },
    button: {
        margin: "25px"
    }
}))

function Profile({ }: Props): ReactElement {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Avatar className={classes.avatar} alt="Marius Franzén" src={sources.profile.avatar} />
                </Grid>
                <Grid item>
                    <Typography variant="h4" className={classes.text}>{sources.profile.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4" className={classes.text}>{sources.profile.title}</Typography>
                </Grid>
                <Grid item>
                    {sources.profile.buttons.map((button) => (
                        <Button component={Link} href={button.link} variant="contained" className={classes.button}>{button.label}</Button>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile
