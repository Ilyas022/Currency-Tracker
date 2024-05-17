import styled from 'styled-components'

import { getBorders, getColors, getFonts, getIndents, getSizes } from 'utils/themeGetters'

export const DropDownMenu = styled.div<{ $position: 'top' | 'bottom' }>`
	position: absolute;
	top: ${({ $position }) => $position === 'bottom' && '100%'};
	bottom: ${({ $position }) => $position === 'top' && '100%'};
	left: 0;
	width: 100%;
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).cardBorder};
	border-top: 0;
	background-color: ${(props) => getColors(props).selectBg};
	z-index: 5;

	& > div {
		max-height: ${(props) => getSizes(props, 8, -45)};
		overflow-y: auto;
	}
`

export const SearchBar = styled.input`
	display: block;
	width: 100%;
	border: 0;
	border-bottom: ${(props) => getBorders(props, 0)} solid $border-color;
	padding: ${(props) => getIndents(props, 1, 4)};
	outline: 0;
	background-color: ${(props) => getColors(props).primary};
	color: ${(props) => getColors(props).textPrimary};
`
export const DropDownItem = styled.div<{ $isActive: boolean }>`
	padding: ${(props) => getIndents(props, 1, 2)};
	border-bottom: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).cardBorder};
	font-size: ${(props) => getFonts(props, 0)};
	cursor: pointer;
	background-color: ${({ $isActive }) => $isActive && 'green'};
	transition: background-color 0.3s ease;

	&:last-child {
		margin-bottom: 0;
	}

	&:hover {
		background-color: ${(props) => getColors(props).cardBg};
	}
`
