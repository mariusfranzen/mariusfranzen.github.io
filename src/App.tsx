import { Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Profile from './components/profile/Profile'

interface Props {

}

function App({ }: Props): ReactElement {
	return (
		<div>
			<Profile />
		</div>
	)
}

export default App

