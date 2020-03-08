import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { CardData } from '../components/CardData'

const Death = () => {
	const [death, setDeath] = useState({
		data: [],
		isLoading: true,
	})

	const getDeathData = async () => {
		try {
			setDeath({ ...death, isLoading: true })
			const response = await Axios.get('https://covid19.mathdro.id/api/deaths')
			setDeath({ data: response.data, isLoading: false })
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getDeathData()
		// eslint-disable-next-line
	}, [])

	return (
		<div className='container'>
			<div className='mt-5 mb-3 text-center'>
				<h2>Death</h2>
			</div>
			<div className='row'>
				{!death.isLoading && death.data.map((data, index) => <CardData data={data} key={index} type='deaths' />)}
			</div>
		</div>
	)
}

export default Death
