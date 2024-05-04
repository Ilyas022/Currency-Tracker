import { Marker, Popup } from 'react-map-gl'
import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getFonts, getIndents, getSizes } from 'utils/themeGetters'

export const MapComponent = styled.div`
	max-width: ${(props) => getSizes(props, 16, 80)};
	width: 100%;
	padding: 0 ${(props) => getIndents(props, 3)};
	margin: 0 auto;
`

export const MapContainer = styled.div`
	margin: 0 auto ${(props) => getIndents(props, 5)};
	max-width: ${(props) => getSizes(props, 12)};
	width: 100%;

	& > h2 {
		font-size: ${(props) => getFonts(props, 6)};
		margin-bottom: ${(props) => getIndents(props, 5)};
		text-align: center;

		@media ${device.md} {
			font-size: ${(props) => getFonts(props, 2)};
		}
	}
`

export const MapPopUp = styled(Popup)`
	color: black;
	& > :last-child {
		padding: ${(props) => getIndents(props, 3)};
		font-size: ${(props) => getFonts(props, 1)};

		& > button {
			font-size: ${(props) => getFonts(props, 2)};
		}
	}
`

export const MapItem = styled.div`
	width: 100%;
	height: ${(props) => getSizes(props, 13, 60)};

	@media ${device.lg} {
		width: 90%;
		height: ${(props) => getSizes(props, 9, 50)};
		margin: 0 auto;
	}

	@media ${device.sm} {
		height: ${(props) => getSizes(props, 9, -50)};
	}
`

export const MapMarker = styled(Marker)`
	cursor: pointer;
`
