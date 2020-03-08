import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
	return (
		<div>
			<h1>Upss.. Looks like you're in wrong page</h1>
			<h5>
				Go back to <Link to='/'>home</Link>
			</h5>
		</div>
	)
}

export default Page404
