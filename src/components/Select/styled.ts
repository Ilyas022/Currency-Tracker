import styled from 'styled-components'

import { getBorders, getColors, getFonts, getIndents, getSizes } from 'utils/themeGetters'

export const SelectItem = styled.div``

export const DropDown = styled.div`
	position: relative;
`

export const DropDownSelect = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: ${(props) => getSizes(props, 2, -8)};
	padding: 0 ${(props) => getIndents(props, 3)} 0 ${(props) => getIndents(props, 1, 2)};
	font-size: ${(props) => getFonts(props, 0)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).cardBorder};
	position: relative;
	cursor: pointer;
	transition: box-shadow 0.3s ease;

	&::after {
		top: calc(50% - 2px);
		right: ${(props) => getIndents(props, 1, 2)};
		border: solid transparent;
		content: '';
		height: 0;
		width: 0;
		position: absolute;
		border-top-color: ${(props) => getColors(props).textPrimary};
		border-width: ${(props) => getBorders(props, 2)};
		margin-left: ${(props) => getIndents(props, 0, -8)};
	}

	&:hover {
		box-shadow: 0 0 ${(props) => getIndents(props, 0, 1)} ${(props) => getColors(props).selectHover};
	}
`
