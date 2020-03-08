import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { CardData } from '../components/CardData'

const Recovered = () => {
	const [recovered, setRecovered] = useState({
		data: [],
		isLoading: true,
	})

	const getRecoveredData = async () => {
		try {
			setRecovered({ ...recovered, isLoading: true })
			const response = await Axios.get('https://covid19.mathdro.id/api/recovered')
			setRecovered({ data: response.data, isLoading: false })
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getRecoveredData()
		// eslint-disable-next-line
	}, [])

	return (
		<div className='container'>
			<div className='mt-5 mb-3 text-center'>
				<h2>Recovered</h2>
			</div>
			<div className='row'>
				{!recovered.isLoading &&
					recovered.data.map((data, index) => <CardData data={data} key={index} type='recovered' />)}
			</div>
		</div>
	)
}

export default Recovered
