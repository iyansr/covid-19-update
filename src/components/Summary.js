import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Summary = () => {
	const [summaryData, setSummaryData] = useState({
		data: {},
		isLoading: true,
	})

	const getSummaryData = async () => {
		try {
			setSummaryData({ ...summaryData, isLoading: true })
			const response = await Axios.get('https://covid19.mathdro.id/api')
			setSummaryData({ data: response.data, isLoading: false })
		} catch (error) {
			console.log(error.response.data)
		}
	}

	useEffect(() => {
		getSummaryData()
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			<p className='text-muted text-center'>
				last update : {!summaryData.isLoading && moment(summaryData.data.lastUpdate).format('DD MMM YYYY HH:mm:ss')}{' '}
			</p>

			<div className='row'>
				<div className='col-sm-4 my-2'>
					<div className='card mx-auto bg-warning' style={{ width: '18rem' }}>
						<div className='card-body mx-auto'>
							{!summaryData.isLoading && (
								<>
									<h5 className='card-title text-dark text-center'>Confirmed</h5>
									<h2 className='card-title text-dark text-center'>{summaryData.data.confirmed.value}</h2>
									<div className='mx-auto text-center'>
										<Link to='/confirmed' className='btn btn-outline-dark '>
											Detail
										</Link>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
				<div className='col-sm-4 my-2'>
					<div className='card mx-auto bg-success' style={{ width: '18rem' }}>
						<div className='card-body mx-auto'>
							{!summaryData.isLoading && (
								<>
									<h5 className='card-title text-light text-center'>Recovered</h5>
									<h2 className='card-title text-light text-center'>
										{summaryData.data.recovered.value}{' '}
										<span className='h6'>
											({((summaryData.data.recovered.value / summaryData.data.confirmed.value) * 100).toFixed(2)}%)
										</span>
									</h2>
									<div className='mx-auto text-center'>
										<Link to='/recovered' className='btn btn-outline-light '>
											Detail
										</Link>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
				<div className='col-sm-4 my-2'>
					<div className='card mx-auto bg-danger' style={{ width: '18rem' }}>
						<div className='card-body mx-auto'>
							{!summaryData.isLoading && (
								<>
									<h5 className='card-title text-light text-center'>Deaths</h5>
									<h2 className='card-title text-light text-center'>
										{summaryData.data.deaths.value}{' '}
										<span className='h6'>
											({((summaryData.data.deaths.value / summaryData.data.confirmed.value) * 100).toFixed(2)}%)
										</span>
									</h2>
									<div className='mx-auto text-center'>
										<Link to='/deaths' className='btn btn-outline-light '>
											Detail
										</Link>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Summary
