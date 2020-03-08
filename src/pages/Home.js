import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Summary from '../components/Summary'

const Home = () => {
	const [daily, setDaily] = useState({
		data: [],
		isLoading: true,
	})

	const getDaily = async () => {
		try {
			setDaily({ ...daily, isLoading: true })
			const response = await axios.get('https://covid19.mathdro.id/api/daily')
			setDaily({ data: response.data, isLoading: false })
		} catch (error) {
			console.log(error.response.data)
		}
	}

	useEffect(() => {
		getDaily()
		// eslint-disable-next-line
	}, [])

	return (
		<div className='container'>
			<div>
				<div className='mt-5 mb-3 text-center'>
					<h2>Summary</h2>
				</div>
				<Summary />
				<br />
				<p className='text-center'>
					Source :{' '}
					<a href='https://github.com/mathdroid/covid19' target='_blank' rel='noopener noreferrer'>
						https://github.com/mathdroid/covid19
					</a>{' '}
				</p>
			</div>
			<div className='mt-5 mb-3 text-center'>
				<h2>Daily Update</h2>
			</div>
			<div className='row'>
				{daily.isLoading ? null : daily.data.map((data, index) => <Card data={data} key={index} />)}
				{/* === */}
			</div>
		</div>
	)
}

export default Home
