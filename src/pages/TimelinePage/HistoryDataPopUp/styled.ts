import styled, { keyframes } from 'styled-components'

import {
	getBordersRadii,
	getColors,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
} from 'utils/themeGetters'

const animShadow = keyframes`
to {
	// doesn't work with get size function
		box-shadow: 0px 0px 100px 50px;
    	opacity: 0;
	}
`

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${(props) => getGaps(props, 2)};
	margin-bottom: ${(props) => getIndents(props, 3)};

	& > div {
		width: 50%;
	}
`

export const FormItem = styled.div`
	display: flex;
	flex-direction: column-reverse;
	gap: ${(props) => getGaps(props, 0, 2)};
	position: relative;
	z-index: 7;

	& > input {
		font-size: ${(props) => getFonts(props, 2)};
		text-align: center;
		width: 100%;
		padding: ${(props) => getIndents(props, 1, 2)};
		background: ${(props) => getColors(props).selectBg};
		box-shadow: 0px 0px 0px 2px transparent;
		color: ${(props) => getColors(props).primary};
		transition: box-shadow 0.3s;

		&:focus {
			box-shadow: 0px 0px 0px 2px ${(props) => getColors(props).primary};
		}
	}

	& > input:focus + label::after {
		animation: ${animShadow} 0.3s forwards;
	}

	& > input:focus + label {
		pointer-events: none;
	}

	& > label {
		width: 100%;

		& > span {
			padding: ${(props) => getIndents(props, 2, -1)} ${(props) => getIndents(props, 0)};
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 6;
			width: 100%;
			height: ${(props) => getSizes(props, 2, 2)};
			box-shadow: 0px 0px 0px 0px;
			color: ${(props) => getColors(props).icon};
		}
	}
`

export const SubmitBtn = styled.button`
	display: block;
	width: 50%;
	margin: 0 auto;
	text-align: center;
	font-size: ${(props) => getFonts(props, 2)};
	border-radius: ${(props) => getBordersRadii(props, 3)};
	background-color: green;

	padding: ${(props) => getIndents(props, 3)};
`
