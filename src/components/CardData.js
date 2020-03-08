import React from 'react'
import moment from 'moment'

export const CardData = ({ data, type = null }) => {
	return (
		<div className='col-sm-4 my-2'>
			<div className='card mx-auto' style={{ width: '18rem' }}>
				<div className='card-body'>
					<h5 className='card-title text-center'>{data.countryRegion}</h5>
					<h5 className='card-title text-center'>{data.provinceState === null ? '-' : data.provinceState}</h5>

					<hr />

					<h5 className='card-title text-center'>Total</h5>
					{type === 'confirmed' ? (
						<>
							<h2 className='card-title text-center'>{data.confirmed}</h2>
							<p className='card-subtitle mb-2 text-muted text-center'>
								Last Update : {moment(data.lastUpdate).format('DD MMM YYYY')}
							</p>
						</>
					) : type === 'recovered' ? (
						<>
							<h2 className='card-title text-center text-success'>{data.recovered}</h2>
							<p className='card-subtitle mb-2 text-muted text-center'>
								Last Update : {moment(data.lastUpdate).format('DD MMM YYYY')}
							</p>
						</>
					) : type === 'deaths' ? (
						<>
							<h2 className='card-title text-center text-danger'>{data.deaths}</h2>
							<p className='card-subtitle mb-2 text-muted text-center'>
								Last Update : {moment(data.lastUpdate).format('DD MMM YYYY')}
							</p>
						</>
					) : null}
				</div>
			</div>
		</div>
	)
}
