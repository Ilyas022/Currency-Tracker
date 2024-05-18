import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import {
	getColors,
	getFontWeights,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
	getlineHeights,
} from 'utils/themeGetters'

const smallScreenEnd = '1024px'

export const FooterComp = styled.footer`
	padding-bottom: ${(props) => getIndents(props, 3)};
`
export const FooterContainer = styled.div`
	width: ${(props) => getSizes(props, 15, -10)};
	padding: 0 ${(props) => getIndents(props, 3)};
	max-width: 100%;
	margin: 0 auto;
`

export const FooterInner = styled.div`
	display: flex;
	justify-content: space-between;
	gap: ${(props) => getGaps(props, 6, -25)};
	margin-bottom: ${(props) => getIndents(props, 6, 10)};

	@media ${device.lg} {
		flex-direction: column;
	}

	@media (max-width: ${smallScreenEnd}) {
		gap: ${(props) => getGaps(props, 4, 4)};
	}

	@media ${device.sm} {
		margin-bottom: ${(props) => getIndents(props, 5, -1)};
	}
`

export const FooterLogo = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => getGaps(props, 2)};
	font-weight: ${(props) => getFontWeights(props, 3)};
	font-size: ${(props) => getFonts(props, 4, 2)};
	background: ${(props) => getColors(props).textGradient};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: ${(props) => getIndents(props, 3)};

	@media ${device.lg} {
		justify-content: center;
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 2)};
		justify-content: flex-start;
		margin-left: ${(props) => getIndents(props, 3)};
		gap: ${(props) => getGaps(props, 1, -2)};

		@media ${device.sm} {
			gap: ${(props) => getGaps(props, 1, 1)};
			margin-left: ${(props) => getIndents(props, 4)};
		}
	}

	& > a {
		@media ${device.sm} {
			width: ${(props) => getSizes(props, 1, 2)};
			height: ${(props) => getSizes(props, 1, 4)};
		}
	}
`

export const FooterLogoText = styled.p``

export const FooterInfo = styled.div`
	flex: 0 1 40%;
	padding-top: ${(props) => getIndents(props, 4, 3)};

	@media ${device.sm} {
		padding-top: ${(props) => getIndents(props, 6, -4)};
	}
`

export const FooterInfoText = styled.p`
	font-weight: ${(props) => getFontWeights(props, 0)};
	font-size: ${(props) => getFonts(props, 4)};
	line-height: ${(props) => getlineHeights(props, 6)};

	@media ${device.lg} {
		width: 70%;
		margin: 0 auto;
		text-align: center;
	}
`

export const FooterLinks = styled.div`
	flex: 1 1 auto;
	display: flex;
	justify-content: space-between;
	font-family: 'Inter', sans-serif;

	@media ${device.lg} {
		justify-content: space-evenly;
	}

	@media (max-width: ${smallScreenEnd}) {
		justify-content: space-around;
	}
`
export const FooterLinkItem = styled.div``

export const FooterLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 4)};
	font-size: ${(props) => getFonts(props, 4)};
	color: ${(props) => getColors(props).textDark};
`

export const FooterLink = styled(Link)`
	color: inherit;
	transition: color 0.3s ease;

	&:hover {
		color: ${(props) => getColors(props).textSecondary};
	}
`

export const FooterLinkTitle = styled.h3`
	font-size: ${(props) => getFonts(props, 4, 4)};
	line-height: ${(props) => getlineHeights(props, 6)};
	letter-spacing: 1.3px;
	margin-bottom: ${(props) => getIndents(props, 5, 5)};
	color: ${(props) => getColors(props).textPrimary};
`

export const FooterRights = styled.p`
	font-size: ${(props) => getFonts(props, 4)};
	line-height: ${(props) => getFontWeights(props, 6)};
	color: ${(props) => getColors(props).textDark};
	text-align: center;

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 1)};
	}
`
