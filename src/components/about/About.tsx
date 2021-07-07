import { Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import sources from '../../sources'
import Section from '../common/section/Section'

interface Props {
    
}

function About({}: Props): ReactElement {
    return (
        <div>
            <Section title={sources.about.label}>
                {sources.about.text.map((text) => (
                    <>
                        <Typography variant="body1">{text}</Typography>
                        <br />
                    </>
                ))}
            </Section>
        </div>
    )
}

export default About
