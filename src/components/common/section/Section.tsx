import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { ReactElement } from 'react';

interface Props {
    title: string
    children: JSX.Element[]
}

function Section({ title, children }: Props): ReactElement {
    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
            <Grid item xs={2}>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item xs={10}>
                {children}
            </Grid>
        </Grid>
    )
}

export default Section
