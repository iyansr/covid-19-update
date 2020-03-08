import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardData } from '../components/CardData'
const Confirmed = () => {
	const [confirmed, setConfirmed] = useState({
		data: [],
		isLoading: true,
	})

	const getConfirmedData = async () => {
		try {
			setConfirmed({ ...confirmed, isLoading: true })
			const response = await axios.get('https://covid19.mathdro.id/api/confirmed')
			setConfirmed({ data: response.data, isLoading: false })
		} catch (error) {
			console.log(error.response.data)
		}
	}

	useEffect(() => {
		getConfirmedData()
		// eslint-disable-next-line
	}, [])

	return (
		<div className='container'>
			<div className='mt-5 mb-3 text-center'>
				<h2>Confirmed</h2>
			</div>
			<div className='row'>
				{!confirmed.isLoading &&
					confirmed.data.map((data, index) => <CardData data={data} key={index} type='confirmed' />)}
			</div>
		</div>
	)
}

export default Confirmed
