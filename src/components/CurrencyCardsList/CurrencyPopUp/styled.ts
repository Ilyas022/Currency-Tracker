import styled from 'styled-components'

import { getBorders, getColors, getIndents } from 'utils/themeGetters'

export const ExchangeItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: ${(props) => getIndents(props, 0, 1)};
	border-bottom: ${(props) => getBorders(props, 0)} dashed ${(props) => getColors(props).primary};
`

export const Currencies = styled.p``

export const Amount = styled.p``
