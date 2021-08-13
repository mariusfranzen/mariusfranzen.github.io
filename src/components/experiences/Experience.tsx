import { Grid, List, ListItem, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { ReactElement } from 'react'
import experience from '../../types/experience'

interface Props {
    experience: experience
}

const useStyles = makeStyles(theme => ({

}))

function Experience({ experience }: Props): ReactElement {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="stretch">
            <Grid item>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Grid item>
                        <Typography variant="subtitle1" fontWeight="bold">{experience.title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" fontWeight="bold" fontStyle="italic">{experience.company}</Typography>
                    </Grid>
                    <Grid item>
                        {experience.notes ? (
                            <List>
                                {experience.notes.map((note) => (
                                    <ListItem>{note}</ListItem>
                                ))}
                            </List>
                        ) : null}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Experience
