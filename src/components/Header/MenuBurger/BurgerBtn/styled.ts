import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getBordersRadii, getIndents, getSizes } from 'utils/themeGetters'

export const BurgerBtn = styled.div`
	display: none;
	position: relative;

	@media ${device.sm} {
		display: block;
	}
`

export const BurgerInput = styled.input.attrs({ type: 'checkbox' })`
	position: absolute;
	visibility: hidden;

	&:checked + label::before {
		top: ${(props) => getIndents(props, 0, 1)};
		transform: rotate(45deg);
		box-shadow: 0 ${(props) => getIndents(props, 0, 2)} 0 transparent;
		transition:
			box-shadow 0.15s,
			top 0.3s,
			transform 0.3s 0.15s;
		background-color: ${({ theme }) => theme.colors.textPrimary};
	}

	&:checked + label::after {
		bottom: ${(props) => getIndents(props, 0, 1)};
		transform: rotate(-45deg);
		transition:
			bottom 0.3s,
			transform 0.3s 0.15s;
		background-color: ${({ theme }) => theme.colors.textPrimary};
	}
`

export const BurgerLabel = styled.label`
	position: relative;
	z-index: ${(props) => getIndents(props, 1, 2)};
	cursor: pointer;
	display: block;
	border: none;
	background: transparent;
	width: ${(props) => getSizes(props, 0, -8)};
	height: ${(props) => getSizes(props, 0, -12)};

	&:before,
	&:after {
		content: '';
		left: 0;
		position: absolute;
		display: block;
		width: 100%;
		height: ${(props) => getSizes(props, 0, -22)};
		border-radius: ${(props) => getBordersRadii(props, 4, 2)};
		background-color: ${({ theme }) => theme.colors.textPrimary};
	}
	&:before {
		top: 0;
		box-shadow: 0 ${(props) => getIndents(props, 0, 1)} 0 ${({ theme }) => theme.colors.textPrimary};
		transition:
			box-shadow 0.3s 0.15s,
			top 0.3s 0.15s,
			transform 0.3s;
	}
	&:after {
		bottom: 0;
		transition:
			bottom 0.3s 0.15s,
			transform 0.3s;
	}
`
