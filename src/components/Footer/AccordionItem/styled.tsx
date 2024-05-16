import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { getBorders, getColors, getFonts, getGaps, getIndents, getSizes } from 'utils/themeGetters'

export const Item = styled.div`
	border-bottom: ${(props) => getBorders(props, 0)} solid white;
	font-size: ${(props) => getFonts(props, 1)};
	color: ${(props) => getColors(props).textPrimary};
	overflow: hidden;
`

export const Button = styled.button<{ $isOpen: boolean }>`
	font-size: inherit;
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: ${(props) => getIndents(props, 2, -1)} 0;

	color: ${(props) => (props.$isOpen ? getColors(props).icon : getColors(props).textPrimary)};

	& > svg {
		transition: 0.5s ease-in-out;
		rotate: ${({ $isOpen }) => ($isOpen ? '180deg' : 0)};

		width: ${(props) => getSizes(props, 0, -4)};
		height: ${(props) => getSizes(props, 0, -4)};
	}
`
export const Title = styled.h3``

export const Content = styled.div`
	transition: height 0.7s ease-in-out;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 0, 2)};
	padding-bottom: ${(props) => getIndents(props, 2, -1)};
`
export const AccordionLink = styled(Link)`
	color: inherit;
`
