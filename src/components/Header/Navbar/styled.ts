import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { device } from 'constants/breakpoints'

const lineHeight = '206%'

export const StyledNavbar = styled.nav`
	display: flex;
	gap: 113px;

	@media ${device.lg} {
		gap: 70px;
	}

	@media ${device.md} {
		gap: 40px;
	}

	@media ${device.sm} {
		gap: 16px;
	}
`

export const StyledNavlink = styled(NavLink)`
	color: #fff;
	font-weight: ${({ theme }) => theme.fontWeights[0]};
	font-size: ${({ theme }) => `${theme.fonts[2]}px`};
	line-height: ${lineHeight};

	@media ${device.md} {
		font-size: 18px;
		line-height: 120%;
	}

	@media ${device.sm} {
		font-size: 14px;
	}

	@media ${device.xs} {
		font-size: 10px;
	}
`
