import { Avatar, Button, Grid, Link, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import sources from '../../sources';

interface Props {

}

function Profile({ }: Props): ReactElement {
    return (
        <div>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                    <Avatar alt="Marius Franzén" src={sources.profile.avatar} />
                </Grid>
                <Grid item>
                    <Typography>{sources.profile.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{sources.profile.title}</Typography>
                </Grid>
                <Grid item>
                    {sources.profile.buttons.map((button) => (
                        <Button component={Link} href={button.link} >{button.label}</Button>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile
