import { Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import sources from '../../sources'
import Section from '../common/section/Section'
import Experience from './Experience'

interface Props {
    
}

function Experiences({}: Props): ReactElement {
    return (
        <div>
            <Section title={sources.experiences.label}>
                {sources.experiences.experiences.map((experience) => (
                    <Experience experience={experience} />
                ))}
            </Section>
        </div>
    )
}

export default Experiences
