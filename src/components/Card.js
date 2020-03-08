import React from 'react'
import moment from 'moment'

const Card = ({ data }) => {
	return (
		<div className='col-sm-4 my-2'>
			<div className='card mx-auto' style={{ width: '18rem' }}>
				<div className='card-body'>
					<h5 className='card-title'>Report Date : {moment(data.reportDate).format('DD MMM YYYY')}</h5>
					<hr />
					<h4 className='text-center'>Location</h4>
					<p className='card-text h5 text-center'>
						Mainland China : <span className='text-info'> {data.mainlandChina} </span>
					</p>
					<p className='card-text h5 text-center'>
						Other : <span className='text-info'> {data.otherLocations} </span>
					</p>
					<br />
					<h4 className='text-center'>Status</h4>
					<p className='card-text h5 text-center'>
						Confirmed : <span className='text-danger'> {data.totalConfirmed} </span>
					</p>
					<p className='card-text h5 text-center'>
						Recovered :{' '}
						<span className='text-success'> {data.totalRecovered === null ? '-' : data.totalRecovered} </span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card
