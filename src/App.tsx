import { Grid, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Profile from './components/profile/Profile'

interface Props {

}

function App({ }: Props): ReactElement {
	return (
		<Grid container direction="row" alignItems="stretch">
			<Grid item xs={6}>
				<Profile />
			</Grid>
			<Grid item xs={6}>
				<Grid container direction="column" alignItems="stretch">
					<Grid item>
						<About />
					</Grid>
					<Grid item>
						<Experiences />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default App

