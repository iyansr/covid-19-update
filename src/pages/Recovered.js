import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { CardData } from '../components/CardData'

const Recovered = () => {
	const [recovered, setRecovered] = useState({
		data: [],
		isLoading: true,
	})
	const [search, setSearch] = useState([])
	const [serarchVal, setSearchVal] = useState('')

	const getRecoveredData = async () => {
		try {
			setRecovered({ ...recovered, isLoading: true })
			const response = await Axios.get('https://covid19.mathdro.id/api/recovered')
			setRecovered({ data: response.data, isLoading: false })
			setSearch(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const onSearch = ({ target: { value } }) => {
		setSearchVal(value)

		let newArr = recovered.data.filter(
			val =>
				`${val.provinceState}`.toLowerCase().includes(value.toLowerCase()) ||
				`${val.countryRegion}`.toLowerCase().includes(value.toLowerCase())
		)
		setSearch(newArr)
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
				<div className='input-group my-5 ml-5 pr-5'>
					<div className='input-group-prepend'>
						<span className='input-group-text' id='inputGroup-sizing-default'>
							Search
						</span>
					</div>
					<input
						onChange={onSearch}
						value={serarchVal}
						placeholder='Search Country, Province'
						type='text'
						className='form-control'
						aria-label='Sizing example input'
						aria-describedby='inputGroup-sizing-default'
						name='search'
					/>
				</div>
				{!recovered.isLoading && search.map((data, index) => <CardData data={data} key={index} type='recovered' />)}
			</div>
		</div>
	)
}

export default Recovered
