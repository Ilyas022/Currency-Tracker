import styled from 'styled-components'

import { getBorders, getColors, getIndents, getSizes } from 'utils/themeGetters'

export const SpinnerContainer = styled.div`
	margin-top: ${(props) => getIndents(props, 4, 6)};
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Spinner = styled.div`
	border: ${(props) => getBorders(props, 4)} solid ${(props) => getColors(props).cardBorder};
	border-top: ${(props) => getBorders(props, 4)} ${(props) => getColors(props).icon} solid;
	border-radius: 50%;
	height: ${(props) => getSizes(props, 6)};
	width: ${(props) => getSizes(props, 6)};
	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`
