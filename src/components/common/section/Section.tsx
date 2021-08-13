import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { ReactElement } from 'react';

interface Props {
    title: string
    children: JSX.Element[]
}

const useStyles = makeStyles({
    root: {
        padding: "40px 70px 10px 70px"
    },
    text: {
        textTransform: "uppercase"
    }
})

function Section({ title, children }: Props): ReactElement {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className={classes.root}>
            <Grid item xs={3}>
                <Typography variant="body1" fontWeight="700" className={classes.text}>{title}</Typography>
            </Grid>
            <Grid item xs={9}>
                {children}
            </Grid>
        </Grid>
    )
}

export default Section
