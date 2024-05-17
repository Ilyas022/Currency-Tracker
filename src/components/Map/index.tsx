import 'mapbox-gl/dist/mapbox-gl.css'

import mapboxgl from 'mapbox-gl'
import React from 'react'
import ReactMap, {
	GeolocateControl,
	FullscreenControl,
	NavigationControl,
	ScaleControl,
} from 'react-map-gl'
import { MarkerEvent } from 'react-map-gl/dist/esm/types/events'

import { ErrorBoundary } from 'components/ErrorBoundary'
import LoadingSpinner from 'components/LoadingSpinner'
import Select from 'components/Select'

import { banks, currencies, initialViewState, mapStyle } from './config'
import { MapComponent, MapContainer, MapItem, MapMarker, MapPopUp } from './styled'
import { Currency, MapState } from './types'

class Map extends React.Component<{}, MapState> {
	constructor(props: {}) {
		super(props)
		this.state = {
			popup: {
				isOpen: false,
				name: '',
				latitude: 0,
				longitude: 0,
			},
			currency: { label: 'US Dollar', value: 'USD' },
			isLoading: true,
		}
		this.handleSelect = this.handleSelect.bind(this)
		this.handleOpenPopUp = this.handleOpenPopUp.bind(this)
		this.handleClosePopUp = this.handleClosePopUp.bind(this)
		this.handleLoading = this.handleLoading.bind(this)
	}

	componentDidMount() {
		mapboxgl.accessToken = process.env.MAPBOX_API_KEY
	}

	handleSelect(currency: Currency) {
		this.setState({ currency })
	}

	handleOpenPopUp({
		e,
		longitude,
		latitude,
		name,
	}: {
		e: MarkerEvent<mapboxgl.Marker, MouseEvent>
		longitude: number
		latitude: number
		name: string
	}) {
		e.originalEvent.stopPropagation()
		this.setState({
			popup: {
				isOpen: true,
				name,
				latitude,
				longitude,
			},
		})
	}

	handleClosePopUp() {
		this.setState({ popup: { isOpen: false, name: '', longitude: 0, latitude: 0 } })
	}

	handleLoading() {
		this.setState({ isLoading: false })
	}

	render() {
		const {
			currency,
			popup: { isOpen, latitude, longitude, name },
			isLoading,
		} = this.state

		const data = banks.filter((bank) => bank.currencies.includes(currency.value))

		return (
			<MapComponent>
				<ErrorBoundary fallback={<p>Something went wrong</p>}>
					<MapContainer>
						<h2>Search currency in the bank</h2>
						<Select options={currencies} value={currency} onSelect={this.handleSelect} />
					</MapContainer>
					{isLoading && <LoadingSpinner />}
					<MapItem>
						<ReactMap
							mapboxAccessToken={process.env.MAPBOX_API_KEY}
							initialViewState={initialViewState}
							mapStyle={mapStyle}
							onData={this.handleLoading}
						>
							<GeolocateControl position="top-left" />
							<FullscreenControl position="top-left" />
							<NavigationControl position="top-left" />
							<ScaleControl />
							{data.map((bank) => (
								<div key={bank.id}>
									<MapMarker
										latitude={bank.latitude}
										longitude={bank.longitude}
										onClick={(e) =>
											this.handleOpenPopUp({
												e,
												latitude: bank.latitude,
												longitude: bank.longitude,
												name: bank.name,
											})
										}
									/>
								</div>
							))}
							{isOpen && (
								<MapPopUp
									latitude={latitude}
									longitude={longitude}
									onClose={this.handleClosePopUp}
									closeButton
									anchor="bottom-left"
									offset={20}
								>
									{name}
								</MapPopUp>
							)}
						</ReactMap>
					</MapItem>
				</ErrorBoundary>
			</MapComponent>
		)
	}
}

export default Map
