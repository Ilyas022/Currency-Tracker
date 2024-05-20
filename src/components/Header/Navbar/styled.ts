import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getColors, getFontWeights, getFonts, getGaps, getlineHeights } from 'utils/themeGetters'

export const NavbarComp = styled.nav`
	display: flex;
	gap: ${(props) => getGaps(props, 6, -7)};

	@media ${device.lg} {
		gap: ${(props) => getGaps(props, 5, 30)};
	}

	@media ${device.md} {
		gap: ${(props) => getGaps(props, 5)};
	}

	@media ${device.sm} {
		gap: ${(props) => getGaps(props, 1)};
		display: none;
	}
`

export const Navlink = styled(NavLink)`
	color: ${(props) => getColors(props).textPrimary};
	font-weight: ${(props) => getFontWeights(props, 0)};
	font-size: ${(props) => getFonts(props, 2)};
	line-height: ${(props) => getlineHeights(props, 6, 56)};

	@media ${device.md} {
		font-size: ${(props) => getFonts(props, 1, 2)};
		line-height: ${(props) => getlineHeights(props, 5, 8)};
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0)};
	}

	@media ${device.xs} {
		font-size: ${(props) => getFonts(props, 0, -4)};
	}
`
