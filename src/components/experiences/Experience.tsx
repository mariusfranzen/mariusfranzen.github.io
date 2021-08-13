import { Grid, List, ListItem, ListItemIcon, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { ReactElement } from 'react'
import experience from '../../types/experience'

interface Props {
    experience: experience
}

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: "15px"
    },
    list: {
        padding: 0,
        marginTop: 0
    },
    listItem: {
        paddingTop: "0"
    }
}))

function Experience({ experience }: Props): ReactElement {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="stretch" className={classes.root}>
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
                            <ul className={classes.list}>
                                {experience.notes.map((note) => (
                                    <li className={classes.listItem}>{note}</li>
                                ))}
                            </ul>
                        ) : null}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Experience
