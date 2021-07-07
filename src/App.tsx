import { Grid, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import About from './components/about/About'
import Profile from './components/profile/Profile'

interface Props {

}

function App({ }: Props): ReactElement {
	return (
		<Grid container direction="row" justifyContent="space-between" alignItems="stretch">
			<Grid item xs={6}>
				<Profile />
			</Grid>
			<Grid item xs={6}>
				<About />
			</Grid>
		</Grid>
	)
}

export default App

